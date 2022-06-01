const events = require("events");
const eventEmitter = new events.EventEmitter();

// Event-Handler erstellen
const eventHandler = function () {
  console.log("Ich höre einen Schrei !!!");
};

// Zuweisung des Event-Handlers an ein Event
eventEmitter.on("Schrei", eventHandler);

// Auslösen des Events
eventEmitter.emit("Schrei");
