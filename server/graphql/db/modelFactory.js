const mongoose = require('./db')
const cache = {}
module.exports = name => {
  if (cache[name]) return cache[name]
  const schema = require(`./${name}Schema`)
  const kittySchema = mongoose.Schema(schema)
  const db = mongoose.model(name, kittySchema)
  cache[name] = db
  return db
}