/*using node js built-in http module,create a simple HTTP server that runs on port 3000 and returs a json response 
for every request containing a user ID 1 and name "laptop"*/
const EventEmitter = require('node:events');
const myEmitter = new EventEmitter();
myEmitter.on('response', (name, id) => {
    console.log(`Listener 1 received - Name: ${name}, ID: ${id}`);
});
myEmitter.on('response', (name, id) => {
    console.log(`Listener 2 logs - User "${name}" has an identifier of ${id}.`);
});
myEmitter.emit('response', 'Alice', 101);
