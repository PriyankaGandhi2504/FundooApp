const EventEmitter = require('events')
var emitter = new EventEmitter

class logger extends EventEmitter{
    log(message){
        console.log(message)
        this.emit('msgLog', {id : 1, url : 'http://abc.io/log'})
    }
}

module.exports = logger