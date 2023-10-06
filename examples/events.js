const EventEmitter = require("events")

const myEvent = new EventEmitter()

console.log('first');
myEvent.on("event", (name, id) => {
    console.log(`my name: ${name} - my id: {id}`)
})

console.log('second');
myEvent.on("event", (name, id) => {
    console.log(`meu nome: ${name} - meu id: {id}`)
})


myEvent.emit('event', 'john', 34)
console.log('thirty');