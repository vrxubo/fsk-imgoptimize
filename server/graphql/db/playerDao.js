const playerDb = require('./modelFactory')('player')

exports.list = condition => playerDb.find(condition)

exports.get = _id => playerDb.findOne({_id})
