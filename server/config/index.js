const {resolve} = require('path')
module.exports = {
  port: 3000,
  staticDir: resolve(__dirname, '../../dist'),
  mongoUri: 'mongodb://127.0.0.1:27017/match'
}