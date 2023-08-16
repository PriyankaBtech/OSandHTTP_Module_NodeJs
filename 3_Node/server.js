/************************* Create server in node.js *********************************/

const http = require('http')

const PORT = 3021

const HOSTNAME = 'localhost' // 127.0.0.1

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("Node server create by Priyanka !")
})

server.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`)
})

// In Node.js, the http.createServer() method is used to create an HTTP server.
// createServer() method takes a callback function as its argument, which will be called whenever a new request is received by the server.

/*

# Inside the callback function, request (req) and response(res) are the two arguments passed which represent
the incoming requests and outgoing responses, respectively.

# the response status code is set to 200 using res.statusCode = 200, this indicates that the request has been successfully processed.
And also set the content-type, header to text/plain using res.setHeader(“Content-type”, “text/plain”), This tells the client
that the response contains plain text.

# The listen method is called on the server object to start the server and make it listen on port 3021 using
server.listen().
When the server is ready to receive requests, the callback function passed to listen is called,
and the message "Server running at localhost:3000" is logged to the console.

*/