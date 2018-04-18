module.exports = {
  _id: {
    index: true,
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  enName: {
    type: String
  },
  scores: {
    type: Array
  },
  average: {
    type: Number,
    default: 0
  },
  matchId: {
    type: String,
    required: true
  },
  playerId: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    default: 0
  }
}