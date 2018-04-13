const foodDao = require('../db/foodDao')
const matchDao = require('../db/matchDao')
const playerDao = require('../db/playerDao')
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLID
} = require('graphql/index')

const Level = new GraphQLObjectType({
  name: 'Level',
  fields: {
    name: {
      type: GraphQLString
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
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    levels: {
      type: new GraphQLList(Level)
    }
  }
})
let Match;
const Player = new GraphQLObjectType({
  name: 'Player',
  fields () {
    return {
      _id: {
        type: GraphQLID
      },
      id: {
        type: GraphQLString
      },
      name: {
        type: GraphQLString
      },
      member: {
        type: GraphQLString
      },
      sence: {
        type: GraphQLInt
      },
      desc: {
        type: GraphQLString
      },
      match: {
        type: Match,
        resolve (p) {
          return matchDao.get(p.matchId)
        }
      }
    }
  }
})
Match = new GraphQLObjectType({
  name: 'Match',
  description: '比赛',
  fields: {
    _id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    entitle: {
      type: GraphQLString
    },
    desc: {
      type: GraphQLString
    },
    type: {
      type: GraphQLInt
    },
    groups: {
      type: new GraphQLList(Group)
    },
    players: {
      type: new GraphQLList(Player),
      resolve (m) {
        return playerDao.list({matchId: m._id})
      }
    }
  }
})
const Score = new GraphQLObjectType({
  name: 'Score',
  fields: {
    raterId: {
      type: GraphQLID
    },
    raterName: {
      type: GraphQLString
    },
    score: {
      type: GraphQLInt
    },
  }
})
const Food = new GraphQLObjectType({
  name: 'Food',
  fields: {
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    enName: {
      type: GraphQLString
    },
    status: {
      type: GraphQLInt
    },
    scores: {
      type: new GraphQLList(Score)
    },
    desc: {
      type: GraphQLString
    },
    average: {
      type: GraphQLInt
    },
    match: {
      type: Match
    },
    author: {
      type: Player
    },
    imgUrl: {
      type: GraphQLString
    }
  }
})

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    match: {
      type: Match,
      args: {
        _id: {
          type: GraphQLID
        }
      },
      resolve (_, args) {
        return matchDao.get(args._id)
      }
    },
    matchs: {
      type: new GraphQLList(Match),
      resolve () {
        return matchDao.list()
      }
    },
    food: {
      type: Food,
      args: {
        id: {
          type: GraphQLString
        },
        authorId: {
          type: GraphQLString
        },
        matchId: {
          type: GraphQLString
        }
      },
      resolve (_, args) {
        return foodDao.get(args.id)
      }
    },
    foods: {
      type: new GraphQLList(Food),
      args: {
        authorId: {
          type: GraphQLID
        },
        matchId: {
          type: GraphQLID
        }
      },
      resolve (_, args) {
        return foodDao.list()
      }
    },
    player: {
      type: Player,
      args: {
        _id: {
          type: GraphQLID
        }
      },
      resolve (_, args) {
        return playerDao.get(args._id)
      }
    },
    players: {
      type: new GraphQLList(Player),
      args: {
        matchId: {
          type: GraphQLID
        }
      },
      resolve () {
        return playerDao.list()
      }
    }
  }
})
module.exports = new GraphQLSchema({
  query: Query
})





//
