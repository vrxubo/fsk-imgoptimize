const db = require('./modelFactory')('match')
exports.list = () => db.find()
exports.get = _id => db.findOne()
