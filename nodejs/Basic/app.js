import express from "express";

const server = express();

// routing
server.get("/", (request, response) => {
  response.send("I am express js");
});

server.get("/about", (request, response) => {
  response.send("I am about page");
});

// server.get("*", (request, response) => {
//   response.send("This page is not found on server");
// });

server.listen(3001, () => {
  console.log("server is running on port 3001");
});
