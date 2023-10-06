const http = require('http')

const server = http.createServer()

server.on('request' , (req, res) => {
    if (req.url === "/") {
        res.end("Home 5001")
    }
})

server.listen(5001, () => {
    console.log("Server listening on port 5001")
})