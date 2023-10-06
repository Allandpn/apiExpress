const http = require("http")
const fs = require("fs")
const { time, timeEnd } = require("console")

http
    .createServer((req, res) => {
        const fileRead = fs.createReadStream("./examples/big.txt", "utf8")
        time()
        fileRead.on('open', ()=> {
            console.log('envio')
            fileRead.pipe(res)
        })
        fileRead.on("err", ()=> {
            res.end(err)
        })
        console.log(timeEnd())
    })
    .listen(5000)