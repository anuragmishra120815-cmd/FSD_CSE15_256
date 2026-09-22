/*Using Node.js’s built-in events module, create an EventEmitter. Register multiple listeners for a response event, then emit the event by passing name and id as arguments and display them in the console.*/ 
// 1. Import the built-in events module and instantiate EventEmitter
const EventEmitter = require('node:events');
const myEmitter = new EventEmitter();

// 2. Register the first listener for the 'response' event
myEmitter.on('response', (name, id) => {
    console.log(`Listener 1 received - Name: ${name}, ID: ${id}`);
});

// 3. Register a second listener for the same 'response' event
myEmitter.on('response', (name, id) => {
    console.log(`Listener 2 logs - User "${name}" has an identifier of ${id}.`);
});

// 4. Emit the 'response' event, passing name and id as additional arguments
myEmitter.emit('response', 'Alice', 101);
