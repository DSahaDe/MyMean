var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

eventEmitter.on('scream',(a,b)=>{
  setImmediate(()=>{
   console.log("Called asynchronously");
  });
});

//Fire the 'scream' event:
eventEmitter.emit('scream');
