const http = require('http');
/*
const server = http.createServer((req, res)=> {
    res.write('welcome to our home page');
    res.end()
})

server.listen(5000) // if you write "localhost:5000" on google it will show you page with 'welcome to our home page' written on it
*/

const server = http.createServer((req, res)=> {
    if (req.url === '/') {
    res.end('welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('here is our short history')
    }
    else {
    res.end(`
    <h1>oops!</h1>
    <p>we can't seem to find the page you're looking for</p>
    <a href="/">back home</a>
    `)
    }
})

server.listen(5000)
// to run this you need to go to google and write 'localhost:5000'
// if you write 'localhost:5000/about' it will show you 'here is our short history'
// if you write 'localhost:5000/error' or anything else it will return the html 

