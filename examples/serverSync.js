const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("OK")
        res.end()
    } 
    else if (req.url === "/about") {
        for(let i = 0; i < 1000; i++) {
            for(let j = 0; j < 1000; j++) {
                console.log(j)
            }
        }
        res.write("about")
        res.end()
    }
    else if (req.url === "/contat") {
        res.write("contat")
        res.end()
    }
    else {
        res.write("fail")
    }
        
    
})

server.listen(5000, () => {
    console.log("server listening on port 5000")
})