const http = require("http");
const server = http.createServer((req, res) => {
    console.log( req.method);
    res.write("Hello world");
    res.end();
});
server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
