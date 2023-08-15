console.log(module);

console.log(__dirname) ;

setInterval(() => {
    console.log('hello world');
}, 1000);

const sayHi = (name) => {
    console.log(`hello there ${name}`);
}
sayHi('susan');
