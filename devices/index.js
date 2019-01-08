"use strict";
const neeoapi = require("neeo-sdk");
const http = require("http.min");

// first we set the device info, used to identify it on the Brain
const simplehttp = neeoapi.buildDevice('Simple HTTP') // change "My first driver" to anything you like but keep the "" characters
  .setManufacturer('OWN')
  .addAdditionalSearchToken('HTTP')
  .setType('ACCESSOIRE')

// Adding Buttons
//NEEO Softkey (predefined Screen integration)
  .addButton({ name: "POWER Fernsehen", label: "Fernsehen" }) // This makes a new button named Fernsehen, on the remote its shown as Button Fernsehen
  .addButton({ name: "POWER Movie", label: "Movie" }) // This makes a new button named Movie, on the remote its shown as Button Movie
  .addButton({ name: "POWER Musik", label: "Musik" }) // This makes a new button named Musik, on the remote its shown as Button Musik
  .addButton({ name: "POWER WiiU", label: "Wii U" }) // This makes a new button named WiiU, on the remote its shown as Button Wii U
  .addButton({ name: "POWER Xbox", label: "Xbox" }) // This makes a new button named Xbox, on the remote its shown as Button Xbox
  .addButton({ name: "POWER AUS", label: "AUS" }) // This makes a new button named AUS, on the remote its shown as Button AUS

// Here is the code that gets executed when a button is pressed.
  .addButtonHandler((buttonName, deviceId) => {
  console.log(`[CONTROLLER] ${buttonName} button pressed`);
  if (buttonName == "POWER Fernsehen") {
    http("http://192.168.7.7/remote/?login=remote&pass=remote&koid=1001&kovalue=1"); //Just sneds a http get, use this to controll devices that supports a http get
  }
  if (buttonName == "POWER Movie") {
    http("http://192.168.7.7/remote/?login=remote&pass=remote&koid=1002&kovalue=1");
  }
  if (buttonName == "POWER Musik") {
    http("http://192.168.7.7/remote/?login=remote&pass=remote&koid=1003&kovalue=1");
  }
  if (buttonName == "POWER WiiU") {
    http("http://192.168.7.7/remote/?login=remote&pass=remote&koid=1004&kovalue=1");
  }
  if (buttonName == "POWER Xbox") {
    http("http://192.168.7.7/remote/?login=remote&pass=remote&koid=1005&kovalue=1");
  }
  if (buttonName == "POWER AUS") {
    http("http://192.168.7.7/remote/?login=remote&pass=remote&koid=1006&kovalue=1");
  }
});

//Overhand Driver to NEEO CLI
  module.exports = {
    devices: [simplehttp]
  }