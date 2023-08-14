/************************* HTTP Module in NodeJs ***********************************/

// HTTP stands for Hypertext Transfer Protocol. It is a protocol used for transmitting data over the internet.

// HTTP defines how client and server communicate with eachother and how request and response should be formatted and transmitted.

// It is the foundation of data communication for the world wide web or the internet.


const http = require('http')

// Create Server
const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.write('<h1> Hello, Node.Js <h1>')
        // you can add multiple conditions
    } else if(req.url == '/about') {
        res.write('<h1> About Page <h1>')
    }
    // end your request
    res.end()
})

server.listen(5001)

console.log("The HTTP server is running on port 5001")

