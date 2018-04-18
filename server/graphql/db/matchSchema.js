module.exports = {
  _id: {   // 比赛I
    type: String,
    required: true,
    index: true
  },
  title: { // 比赛名
    type: String,
    required: true
  },
  enTitle: { // 比赛英文名
    type: String
  },
  desc: { // 比赛说明
    type: String
  },
  type: { // 比赛类型  1 个人赛  2 团体赛
    type: Number,
    enum: [1, 2],
    default: 1
  },
  status: { // 比状态 0 未开始  1 进行中 2 已结束
    type: Number,
    enum: [0, 1, 2],
    default: 0
  },
  groups: { // 分组和奖项
    type: Array
  }
}