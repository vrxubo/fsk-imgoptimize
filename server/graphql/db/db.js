const mongoose = require('mongoose')
const {mongoUri} = require('../../config')
const logger = require('../../logger')('db')
mongoose.Promise = global.Promise
mongoose.connect(mongoUri)
const conn = mongoose.connection
  conn.on('error', err => logger.error(err))
conn.once('open', () => logger.info('connect.'))
module.exports = mongoose