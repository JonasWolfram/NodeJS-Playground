const http = require("http");

console.log("http.createServer");
const server = http.createServer((request, response) => {
  console.log("http.createServer callback");
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  const url = new URL(request.url, "http://localhost:8080");

  console.log(url);
  console.log("Name: ", url.searchParams.get("name"));

  const body = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>NodeJS Demo</title>
</head>  
<body>
  <h1 style="color:green">Hallo ${url.searchParams.get("name")}</h1>
</body>
</html>`;

  response.end(body);
});

const port = 8080;
console.log("listen");
server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
