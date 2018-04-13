module.exports = {
  name: {
    type: String
  },
  enName: {
    type: String
  },
  status: {
    type: Number,
    default: 0
  },
  scores: {
    type: Object
  },
  desc: {
    type: String
  },
  average: {
    type: Number,
    default: 0
  },
  matchId: {
    type: String
  },
  authorId: {
    type: String
  },
  imgUrl: {
    type: String
  }
}