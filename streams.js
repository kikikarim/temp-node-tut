// we use this to create a big.txt file in the content folder
/* const { writeFileSync } = require('fs');
for (let i =0; i < 10000; i++) {
writeFileSync (
    './content/big.txt', `hello world ${i}\n`, {flag: 'a'}
)}
*/

const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt');

stream.on('data', (result) => {
    console.log(result)
})
// by default the size is around 64kb
// last buffer - remainder
// highWaterMark - contols size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000}); 
// const stream = createReadStream('./content/big.txt', {encoding : 'utf8'});
