// Event Emitter

const events = require("events");
const util = require("util");


// Object Constructor

const teams = function(name) {
  this.name = name;
}

util.inherits(teams, events.EventEmitter);


// Object Declarations

const Arsenal = new teams("Arsenal");
const Juventus = new teams("Juventus");
const Galatasaray = new teams("Galatasaray");

const teamArray = [ Arsenal, Juventus, Galatasaray ];

// Attaching an event listener to each team in the array by iterating through the teamArray

teamArray.forEach((x) => {
  x.on("nation", function(nation) {
    console.log(x.name + " is " + nation + " football club");
  });
});


Arsenal.emit("nation", "English");    // Arsenal is English football club
Juventus.emit("nation", "Italian");    // Juventus is Italian football club
Galatasaray.emit("nation", "Turkish");    // Galatasaray is Turkish football club
