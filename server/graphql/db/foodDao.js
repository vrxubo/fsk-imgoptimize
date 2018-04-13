const db = require('./modelFactory')('food')

exports.list = () => db.find()
exports.get = id => db.findOne({id})
