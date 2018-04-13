const log4js = require('log4js')
const isProd = process.env.NODE_ENV === 'production'
module.exports = name => {
  const logger = log4js.getLogger(name)
  logger.level = isProd ? 'error' : 'debug'
  return logger
}