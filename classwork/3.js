const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.end("Request successful");
  } else if (req.method === "POST" && req.url === "/users") {
    res.statusCode = 201;
    res.end("User created successfully");
  } else if (req.url === "/bad-data") {
    res.statusCode = 400;
    res.end("Bad Request: Invalid payload");
  } else {
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

server.listen(8000);
