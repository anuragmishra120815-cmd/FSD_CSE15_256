
const http = require("http");
const student = require("./student");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });

    // 2. Send the imported student data as a JSON string
    res.end(JSON.stringify(student));
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
