const matchDb = require('./modelFactory')('match')

exports.list = () => matchDb.find()

exports.get = _id => matchDb.findOne({_id})
