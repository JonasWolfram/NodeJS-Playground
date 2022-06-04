// Note: This file was copied from Geeksforgeeks for testing purposes only.
const http = require("http");

// Setting up PORT
const PORT = process.env.PORT || 3000;

// Creating http Server
var httpServer = http.createServer(function (req, res) {
  // Setting up Headers
  res.setHeader("Alfa", "Beta");
  res.setHeader("Alfa1", "");
  res.setHeader("Alfa2", 5);
  res.setHeader("Cookie-Setup", ["Alfa=Beta", "Beta=Romeo"]);
  // res.setHeader('', 'Beta'); // Throws Error
  // res.setHeader(); // Throws Error

  // Checking and printing the headers
  console.log("When Header is set an Array:", res.getHeader("Cookie-Setup"));
  console.log("When Header is set an 'Beta':", res.getHeader("Alfa"));
  console.log("When Header is set '':", res.getHeader("Alfa1"));
  console.log("When Header is set number 5:", res.getHeader("alfa2"));
  console.log("When Header is not set:", res.getHeader("Content-Type"));

  // Getting the set Headers
  const headers = res.getHeaders();

  // Printing those headers
  console.log(headers);

  var Output =
    "Hello Geeksforgeeks..., " +
    "Available headers are:" +
    JSON.stringify(headers);

  // Prints Output on the browser in res
  res.write(Output);
  res.end("ok");
});

// Listening to http Server
httpServer.listen(PORT, () => {
  console.log("Server is running at port 3000...");
});
