const {readFile, writeFile} = require("fs")
const { reject } = require("lodash")
const { resolve } = require("path")

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err,data) => {
            if(err){
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

const writeText = (path, data) => {
    const promise = new Promise ((resolve, reject) => { 
        writeFile(path, data, {flag: 'a'},(err) => {
            if (err){
                reject(new Error(err))
            }
            else {
                resolve()
            }
        })
    })
}


const path = ("./examples/text.txt")
const path1 = ("./examples/text1.txt")

getText(path)
    .then((result1) => writeText(path1, result1))
    .catch((err) => console.log(err))