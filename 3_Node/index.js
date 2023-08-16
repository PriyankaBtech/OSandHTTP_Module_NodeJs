/************************* Create server in node.js *********************************/

const http = require('http')

const PORT = 3022

const HOSTNAME = 'localhost'

const server = http.createServer((req, res) => {
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')

    // data always transfer between client and server in form of Binary not in JSON
    res.end(JSON.stringify({error : "Server Error"}))
})

server.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`)
})