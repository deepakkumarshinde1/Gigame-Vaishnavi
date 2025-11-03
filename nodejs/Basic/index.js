import http from "http";
import fs from "fs";
import { add } from "./calc.js";
// import { add } from "./calc.js";
// console.log(http);

// create  a server

let server = http.createServer((request, response) => {
  fs.readFile("./home.html", (err, data) => {
    if (err) {
      response.write("Server issue contact to admin");
    } else {
      response.write(data);
    }
    response.end();
  });
});

// port number
server.listen(3001, () => {
  console.log("server is running on port 3001");
});
