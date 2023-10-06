const {readFile, writeFile} = require('fs').promises
/* const util = require('util')

const rPromise = util.promisify(readFile)
const wPromise = util.promisify(writeFile) */

const path = ("./examples/text.txt")
const path1 = ("./examples/text1.txt")

const start = async (path, path1) => {
    try {
        const first = await readFile(path, 'utf8')
        await writeFile(path1, first, {flag: 'a'})
        const thirty = await readFile(path1, 'utf8')

        console.log(first);
        console.log(thirty);
    } catch (error) {
        console.log(error);
    }

}

start(path, path1)


