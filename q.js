/*### Question

Write a Node.js program to create a basic HTTP server that handles different URL routes. The server should:

1. Handle the `/` route and display a **Home Page**.
2. Handle the `/about` route and display an **About Page**.
3. Handle the `/contact` route and display a **Contact Page**.
4. For any unknown URL, display a **404 - Page Not Found** message.
5. Provide a link on the 404 page to return to the **Home Page**.
6. Run the server on **port 3000**.
*/ 
const http = require("http");
const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Welcome to Home Page</h1>");
    }

    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>This is About Page</h1>");
    }

    else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>This is Contact Page</h1>");
    }

    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`
            <h1>404 - Page Not Found</h1>
            <a href="/">Return to Home Page</a>
        `);
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});