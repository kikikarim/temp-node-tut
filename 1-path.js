// path module
const path = require('path');  // this is how to load the module
var pathObj = path.parse(__filename);
console.log(pathObj);

console.log(path.sep); // returns '/'

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);  // joins them together and returns the full path 

const base = path.basename(filePath)
console.log(base); // returns the last file in the path

const absolute = path.resolve(__dirname, '/content', 'subfolder', 'test.txt');
console.log(absolute); // returns the absolute path in which we can open by clicking on it
