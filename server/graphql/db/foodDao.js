const foodDb = require('./modelFactory')('food')

exports.list = condition => foodDb.find(condition)

exports.get = _id => foodDb.findOne({_id})