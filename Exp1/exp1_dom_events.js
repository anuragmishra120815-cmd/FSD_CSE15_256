const EventEmitter = require("events");

const button = new EventEmitter();

button.on("click", () => {
  console.log("Button clicked!");
});

button.on("mouseover", () => {
  console.log("Mouse is over the button!");
});

button.emit("click");
button.emit("mouseover");
