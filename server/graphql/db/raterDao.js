const raterDb = require('./modelFactory')('rater')

exports.list = condition => raterDb.find(condition)

exports.get = _id => raterDb.findOne({_id})
