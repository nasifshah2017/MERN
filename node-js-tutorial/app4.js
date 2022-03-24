// Event Emitter

// Importing the events() function from the Node JS library
const events = require("events");

const myEmitter = new events.EventEmitter;

myEmitter.on("test", function(arg) {
  console.log(arg);
});

myEmitter.emit("test", "hello world!");
