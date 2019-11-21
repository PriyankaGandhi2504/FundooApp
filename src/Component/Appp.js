const EventEmitter = require('events')
// var emitter = new EventEmitter

logger.on('msgLog', (arg) => {
    console.log('msglog', arg);
})

const logger = require('./Logger')
var logger = new Logger
logger.log('message')