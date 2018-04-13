const db = require('./modelFactory')('player')
exports.list = condition => db.find(condition)
exports.get = id => db.findOne({id})
