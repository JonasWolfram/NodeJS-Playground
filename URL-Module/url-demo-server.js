const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      console.log(filename);
      console.log(req.url);
      return res.end();
    });
  })
  .listen(8080);
