// os module
const os = require('os');   // this is how to load the module
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
const user = os.userInfo()  // info about current user

console.log('total memory: ' + totalMemory);
console.log(`free memory : ${freeMemory}`);
console.log(user);
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};
console.log(currentOS);