const { write } = require("fs");
const http = require("http");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Server is running!</h1>");
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server is listening on http://${hostname}:${port}/`);
});
