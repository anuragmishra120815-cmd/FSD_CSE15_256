const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
}); // Fixed: Replaced '}' with ');' to properly close the createServer callback

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
}); // Fixed: Added missing ')' to properly close the listen function
