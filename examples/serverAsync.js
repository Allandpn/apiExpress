const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url = "/") {
        req.end("Home")
        
    }
    (req, res) => {
        if(req.url = "/about") {
            req.end("About")
            
        }

        (req, res) => {
            if(req.url = "/contat") {
                req.end("contat")
                
            }
        }
    }
})