const http = require("http");

http
  .createServer(function (req, res) {
    res.write("Hallo Welt!");
    res.end();
  })
  .listen(8080);
