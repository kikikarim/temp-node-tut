// file system module
const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', function(err, files) {
    if (err) console.log('error', err);
    else console.log('result', files);
});


// events module
const eventEmitter = require('events');
const emitter = new eventEmitter();

// register a listener 
emitter.on('messagelogged', function(arg) {
    console.log('listener called', arg);
});

// raise an event 
emitter.emit('messagelogged', {id:1, url: 'http://'});
/* we need to register a listener that will be called 
when the message log event is called */
/* we need to register a listener before raising an event*/
/* {id:1, url: 'http://'} this is the event argument 
that we'll define as 'arg' in the listener function*/ 

