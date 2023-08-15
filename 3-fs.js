const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second);

writeFileSync (
    './content/result-sync.txt',
    `here is the result : ${first}, ${second}`
)

/*Async is multi-thread, which means operations or programs can run in parallel. 
Sync is single-thread, so only one operation or program will run at a time. Async is non-blocking, 
which means it will send multiple requests to a server. */

/*If you need to complete tasks in a specific order and time is not a factor, 
then synchronous programming is best. 
However, if you need to execute multiple tasks at the same time
and you need the results of each task to continue your program, then go with asynchronous programming*/ 