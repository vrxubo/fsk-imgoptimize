module.exports = {
  _id: {
    index: true,
    required: true,
    type: String
  },
  name: {
    type: String,
    required: true
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  desc: {
    type: String
  }
}