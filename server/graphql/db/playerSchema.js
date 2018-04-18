module.exports = {
  _id: {
    index: true,
    required: true,
    type: String
  },
  name: {   // 参赛选手名称 若是团体赛则为团队名称
    type: String,
    required: true
  },
  member: { // 成员列表 仅适用于团体赛 每个成员名字之间用逗号分隔
    type: String
  },
  sence: { // 现场分
    type: Number,
    default: 10
  },
  desc: {  // 选手描述
    type: String
  },
  matchId: { // 比赛场次
    type: String,
    required: true
  },
  group: {  // 分组
    type: String
  },
  score: {
    type: Number,
    default: 0
  }
}