const { readFile, writeFile } = require('fs');

console.log('started a first task');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first task');
});
console.log('starting next task...');

/*
console.log('first');
setTimeout(() => {
    console.log('second');
}, 0);
console.log('third'); */
/* setTimeout() is an asynchronous function, 
meaning that the timer function will not pause execution of other functions in the functions stack.*/