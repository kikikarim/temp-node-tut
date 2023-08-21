const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id: ${id}`)
})
customEmitter.on('response', () => {
    console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)

/* on -listen for an event/ emit -emit an event */
/* we should first listen to the event and then emit it, so the order must be "on --> emit" */
/* we can have different methods for the same event, 
like in our case we used 2 functions when listening to the event */
/* we can also use arguments when emitting an event */