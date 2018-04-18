const {
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull
} = require('graphql')
const playerDao = require('../db/playerDao')
const matchDao = require('../db/matchDao')
const foodDao = require('../db/foodDao')
const raterDao = require('../db/raterDao')

const Level = new GraphQLObjectType({
  name: 'Level',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    from: {
      type: GraphQLInt
    },
    to: {
      type: GraphQLInt
    },
    prize: {
      type: GraphQLString
    },
    desc: {
      type: GraphQLString
    }
  }
})
const Group = new GraphQLObjectType({
  name: 'Group',
  fields: {
    name: {
      type: GraphQLString
    },
    levels: {
      type: new GraphQLList(Level)
    }
  }
})
let Match, Player, Food, Rater;
Match = new GraphQLObjectType({
  name: 'Match',
  fields () {   // 这里需要用函数返回fields对象 否则会因为代码顺序问题导致找不到 Player 和 Food
    return {
      _id: {
        type: new GraphQLNonNull(GraphQLString)
      },
      title: {
        type: new GraphQLNonNull(GraphQLString)
      },
      enTitle: {
        type: GraphQLString
      },
      desc: {
        type: GraphQLString
      },
      groups: {
        type: new GraphQLList(Group)
      },
      players: {
        type: new GraphQLList(Player),
        resolve (match) {
          return playerDao.list({matchId: match.id})
        }
      }
    }
  }
})

Player = new GraphQLObjectType({
  name: 'Player',
  fields () {
    return {
      _id: {
        type: new GraphQLNonNull(GraphQLString)
      },
      name: {   // 参赛选手名称 若是团体赛则为团队名称
        type: GraphQLString
      },
      member: { // 成员列表 仅适用于团体赛 每个成员名字之间用逗号分隔
        type: GraphQLString
      },
      sence: { // 现场分
        type: GraphQLInt
      },
      desc: {  // 选手描述
        type: GraphQLString
      },
      match: { // 比赛场次
        type: Match,
        resolve (p) {
          console.log(p)
          return matchDao.get(p.matchId)
        }
      },
      foods: {
        type: new GraphQLList(Food),
        resolve (p) {
          return foodDao.list({playerId: p._id})
        }
      },
      group: {  // 分组
        type: GraphQLString
      },
      score: {
        type: GraphQLFloat
      }
    }
  }
})

const Score = new GraphQLObjectType({
  name: 'Score',
  fields () {
    return {
      score: {
        type: GraphQLFloat
      },
      rater: {
        type: Rater,
        resolve (s) {
          return raterDao.get(s.raterId)
        }
      }
    }
  }
})

Food = new GraphQLObjectType({
  name: 'Food',
  fields () {
    return {
      _id: {
        type: GraphQLString
      },
      name: {
        type: GraphQLString
      },
      enName: {
        type: GraphQLString
      },
      scores: {
        type: new GraphQLList(Score)
      },
      average: {
        type: GraphQLFloat
      },
      match: {
        type: Match,
        resolve (f) {
          return matchDao.get(f.matchId)
        }
      },
      player: {
        type: Player,
        resolve (f) {
          return playerDao.get(f.playerId)
        }
      },
      status: {
        type: GraphQLFloat
      }
    }
  }
})

Rater = new GraphQLObjectType({
  name: 'Rater',
  fields () {
    return {
      _id: {
        type: GraphQLString
      },
      name: {
        type: GraphQLString
      },
      startDate: {
        type: GraphQLInt,
        resolve (r) {
          return r.startDate.getTime()
        }
      },
      endDate: {
        type: GraphQLInt,
        resolve (r) {
          return r.startDate.getTime()
        }
      },
      desc: {
        type: GraphQLString
      }
    }
  }
})

exports.matches = {
  type: new GraphQLList(Match),
  resolve () {
    return matchDao.list()
  }
}
exports.match = {
  type: Match,
  args: {
    id: {
      type: GraphQLString
    }
  },
  resolve (_, args) {
    return matchDao.get(args.id)
  }
}
exports.players = {
  type: new GraphQLList(Player),
  resolve () {
    return playerDao.list()
  }
}
exports.player = {
  type: Player,
  args: {
    id: {
      type: GraphQLString
    }
  },
  resolve (_, {id}) {
    return playerDao.get(id)
  }
}

exports.foods = {
  type: new GraphQLList(Food),
  args: {
    matchId: {
      type: GraphQLString
    },
    playerId: {
      type: GraphQLID
    }
  },
  resolve (_, args) {
    return foodDao.list(args)
  }
}
exports.food = {
  type: Food,
  args: {
    id: {
      type: GraphQLString
    }
  },
  resolve (_, {id}) {
    return foodDao.get(id)
  }
}

exports.raters = {
  type: new GraphQLList(Rater),
  resolve () {
    return raterDao.list()
  }
}
exports.rater = {
  type: Rater,
  args: {
    id: {
      type: GraphQLID
    }
  },
  resolve (_, {id}) {
    return raterDao.get(id)
  }
}




