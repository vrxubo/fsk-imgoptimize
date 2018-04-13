module.exports = {
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  member: {
    type: String
  },
  sence: {
    type: Number,
    default: 10
  },
  desc: {
    type: String
  },
  matchId: {
    type: String,
    required: true
  }
}