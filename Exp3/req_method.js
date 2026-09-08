const http = require("http");
const server = http.createServer((req, res) => {
    console.log( req.method);
    res.end("req recieved");
});
server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
