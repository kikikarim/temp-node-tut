/*
const { readFile, writeFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(data)
            } else {
                resolve(data)
            }
        })
    })
} */
/*
getText('./content/first.txt')
  .then((result)=> console.log(result))
  .catch((err)=> console.log(err))
  */
/*
const start = async () => {
    try {
        const first = await getText('./content/first.txt');
        console.log(first)
    } catch (error) {
        console.log(error)
    }
}

start() */

// a simpler way to do the same thing 
const { readFile, writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');
        await writeFilePromise('./content/result-mind-grenade.txt', `this is awesome: ${first, second}`)
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}
start()

//another more simple way to do it 
/*
const { readFile, writeFile } = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFilePromise('./content/result-mind-grenade.txt', `this is awesome: ${first, second}`)
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}
start()
*/