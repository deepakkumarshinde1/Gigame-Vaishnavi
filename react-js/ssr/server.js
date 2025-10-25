import fs from "node:fs/promises";
import express from "express";
import { Transform } from "node:stream";
import { Helmet } from "react-helmet"; // react-helmet server API

// Constants
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";
const ABORT_DELAY = 10000;

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile("./dist/client/index.html", "utf-8")
  : "";

// Create http server
const app = express();

// Add Vite or respective production middlewares
/** @type {import('vite').ViteDevServer | undefined} */
let vite;
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;
  app.use(compression());
  app.use(base, sirv("./dist/client", { extensions: [] }));
}

// Serve HTML
app.use("*all", async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, "");

    /** @type {string} */
    let template;
    /** @type {import('./src/entry-server.js').render} */
    let render;
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile("./index.html", "utf-8");
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;
    } else {
      template = templateHtml;
      render = (await import("./dist/server/entry-server.js")).render;
    }

    let didError = false;

    const { pipe, abort } = render(url, {
      onShellError() {
        res.status(500);
        res.set({ "Content-Type": "text/html" });
        res.send("<h1>Something went wrong</h1>");
      },
      onShellReady() {
        try {
          res.status(didError ? 500 : 200);
          res.set({ "Content-Type": "text/html" });

          // Split template around your app marker
          const [htmlStart, htmlEnd] = template.split(`<!--app-html-->`);
          let htmlEnded = false;

          // --- Collect helmet tags (react-helmet) ---
          // NOTE: react-helmet stores state globally; this call collects tags written
          // by <Helmet> during render and resets internal state.
          // If you serve concurrent requests in the same process, you risk leaking tags.
          // Recommended: migrate to react-helmet-async for production concurrency safety.
          const helmet = Helmet.renderStatic();
          const headTags =
            (helmet.title ? helmet.title.toString() : "") +
            (helmet.meta ? helmet.meta.toString() : "") +
            (helmet.link ? helmet.link.toString() : "") +
            (helmet.script ? helmet.script.toString() : "") +
            (helmet.noscript ? helmet.noscript.toString() : "");

          // Inject head tags: prefer <!--ssr-head--> placeholder, otherwise insert before </head>
          let injectedHtmlStart = htmlStart;
          if (injectedHtmlStart.includes("<!--ssr-head-->")) {
            injectedHtmlStart = injectedHtmlStart.replace(
              "<!--ssr-head-->",
              headTags
            );
          } else if (injectedHtmlStart.includes("</head>")) {
            injectedHtmlStart = injectedHtmlStart.replace(
              "</head>",
              `${headTags}\n</head>`
            );
          } else {
            // fallback: prepend headTags to start of template
            injectedHtmlStart = headTags + injectedHtmlStart;
          }

          const transformStream = new Transform({
            transform(chunk, encoding, callback) {
              try {
                if (!htmlEnded) {
                  let s = chunk.toString();
                  // detect the end marker and remove it, then write the htmlEnd
                  const marker = "<vite-streaming-end></vite-streaming-end>";
                  if (s.endsWith(marker)) {
                    // remove marker and write remaining + trailing htmlEnd
                    const stripped = s.slice(0, -marker.length);
                    res.write(stripped, "utf-8");
                    res.write(htmlEnd, "utf-8");
                    htmlEnded = true;
                  } else {
                    res.write(s, "utf-8");
                  }
                } else {
                  // after we've already written htmlEnd, just pass through binary chunks
                  res.write(chunk, encoding);
                }
                callback();
              } catch (err) {
                callback(err);
              }
            },
          });

          transformStream.on("finish", () => {
            // ensure response end
            if (!res.writableEnded) res.end();
          });

          // write the start part (with injected head)
          res.write(injectedHtmlStart);

          // pipe the React stream into our transform which writes into res
          pipe(transformStream);
        } catch (err) {
          console.error("Error in onShellReady:", err);
          res.status(500).end("Server error");
        }
      },
      onAllReady() {
        // nothing needed here because we handle htmlEnd in transform when marker is found.
        // keep the hook to match API expectations and to catch late errors if desired.
      },
      onError(error) {
        didError = true;
        console.error(error);
      },
    });

    // safety abort
    setTimeout(() => {
      abort();
    }, ABORT_DELAY);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
