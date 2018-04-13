const mongoose = require('./index')
const cache = {}
module.exports = name => {
  if (cache[name]) return cache[name]
  const schema = require(`./${name}Schema`)
  const kittySchema = mongoose.Schema(schema)
  const model = mongoose.model(name, kittySchema)
  cache[name] = model
  return model
}