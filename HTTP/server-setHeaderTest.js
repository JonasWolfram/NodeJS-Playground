const http = require("http");
// Setting up PORT
const PORT = process.env.PORT || 3000;

// Creating http Server
const httpServer = http.createServer(function (req, res) {
  // Setting up Headers
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]);

  // Checking and  printing the headers
  console.log("When Header is set a string:", res.getHeader("Content-Type"));
  console.log("When Header is set an Array:", res.getHeader("Set-Cookie"));

  // Getting the set Headers
  const headers = res.getHeaders();

  // Printing those headers
  console.log(headers);

  // Prints Output on the browser in res
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("ok");
});

// Listening to http Server
httpServer.listen(PORT, () => {
  console.log("Server is running at port 3000...");
});
