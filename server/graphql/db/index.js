const {mongoUri} = require('../../config')
const mongoose = require('mongoose')
const logger = require('../../logger')('db')
mongoose.Promise = global.Promise
mongoose.connect(mongoUri)
const db = mongoose.connection
db.on('error', err => logger.error(err))
db.once('open', () => logger.info('connected.'))
module.exports = mongoose