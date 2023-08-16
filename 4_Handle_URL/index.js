/********************* Handle URL in node.js *****************************/

const http = require("http")

const port = 3023 // port declaration

const host = "localhost" // host name declaration

// create server with http.createServer
const server = http.createServer((req, res) => {
// conditional statement for handling route
if (req.url === "/") {
res.write("Hello, world!")
res.end()

} else if (req.url === "/about") {
res.write("About page")
res.end()

} else if (req.url === "/contact") {
res.write("Contact us")
res.end()

} else {
res.write("Page not found")
res.end()
}
})

// server listen on port
server.listen(port, () => {
console.log(`Server up at ${host}:${port}`)
})