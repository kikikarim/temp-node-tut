/* npm stands for Node Package Manager. It's a library and registry for JavaScript software packages. */ 
/* npm also has command-line tools to help you install the different packages and manage their dependencies. 
to access it you can go to "npmjs.com". */ 

/* local dependency - use it only in this particular project
npm i <packageName> */

/* global dependency - use it in any project 
npm install -g <packageName> */

/* package.json - manifest file (stores important info about project/package 
manual approach (create package.json in the root, create properties etc)
npm init (step by step, press enter to skip)
npm init -y (everything default)
*/

/* if you install a package it will be added in dependencies in 'package.json'*/
/* if you refresh the folder you're working with, you'll find something named 'node_modules' 
in which all the dependencies are stored */

/* you can type 'clear' in the terminal to clear everything you've done and to better see what uou're actually doing */

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("hello world");