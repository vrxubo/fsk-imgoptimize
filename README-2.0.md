# 复杂一点的GraphQL服务 #


既然要练不如直接做个项目练手, 因此准备重写比赛项目, 先简单介绍一下项目需求:
该项目是一组美食大赛的评分系统:

1. 比赛有多场
1. 比赛分为团体赛和个人赛
1. 每场比赛的选手不同
1. 每场比赛的奖项不同
1. 每个选手的参赛作品不同
1. 不同场次的比赛选手的参赛作品数目不同
1. 同一场比赛可能会将选手分成多组分别排名
1. 不同的比赛有可能在同一地点同时进行
1. 比赛的评委按时间划分与比赛场次无关, 同时进行的比赛用同一组评委
    (比赛按时间段进行 上午 10:00-12:00 下午 14:00 - 16:00)
1. 参赛作品现场做, 做完端到评委席, 评委品尝之后才能打分, 因此每个作品送到评委席之后才能开始评分
1. 所有评委评分后去掉一个最高分一个最低分 剩下的取平均分
1. 因为是美食比赛, 因此对卫生有一定要求, 每个选手初始有10分现场分, 巡场评委可以对卫生不合格的选手根据实际情况扣除一定的现场分

## 数据模型 ##

> Match (比赛)

| 属性名 | 解释 | 类型 |
| --------- | ----- | ------ |
|   _id    | 主键 | String |
|title     | 标题 | String |
| enTitle| 英文标题 | String |
| desc | 详情 | String |
| type | 比赛类型: 1 个人赛 2 团体赛 | Number |
| status | 状态: 0 未开始 1 进行中 2 已结束 | Number |
| groups | 分组和奖项 | Array |

> Player (选手)

| 属性名 | 解释 | 类型 |
| --------- | ----- | ------ |
|   _id    | ID  | String |
| name | 名称 | String |
| member | 成员 | String |
| group | 分组 | String |
| sence | 现场分 | Number |
| score | 得分 | Number |
| matchId | 比赛的ID | String |
| desc | 详情说明 | String |

> Food (参赛菜品)

| 属性名 | 解释 | 类型 |
| --------- | ----- | ------ |
|   _id    | ID  | String |
| name | 名称 | String |
| enName | 外文名称 | String |
| scores | 得分情况 | Array |
| average | 平均分 | Number |
| matchId | 比赛ID | String |
| playerId | 选手ID | String |
| status | 状态: 0 未开始 1 评分中 2 已结束 | Number |

> Rater (评委)

| 属性名 | 解释 | 类型 |
| --------- | ----- | ------ |
|   _id    | ID  | String |
| name | 姓名 | String |
| startDate| 开始时间 | Number |
| endDate | 结束时间 | Number |
| desc | 说明 | String |

## GraphQL Schema ##

> Match (比赛)

```javascript
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

```

> Player (选手)

```js
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
```

> Food (菜品)

```js
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
```

> Rater (评委)

```js
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
```

> Level (奖项名次)

```js
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
```

> Group (分组)

```js
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
```

> Score (评分详情)

```js
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
```

> 由于各个Schema之间存在相互依赖的关系因此所有的代码都只能放在一个文件里, 暂时没想到好的解决办法, 如果你有请告诉我, 谢谢!

## 定义查询 ##

> 比赛列表

```js
matches = {
  type: new GraphQLList(Match),
  resolve () {
    return matchDao.list()
  }
}
```

> 比赛

```js
match = {
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
```

> 选手列表

```js
players = {
  type: new GraphQLList(Player),
  resolve () {
    return playerDao.list()
  }
}
```

> 选手

```js
player = {
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
```

> 菜品列表

```js
foods = {
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
```

> 菜品

```js
food = {
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
```

> 评委列表

```js
raters = {
  type: new GraphQLList(Rater),
  resolve () {
    return raterDao.list()
  }
}
```

> 评委

```js
rater = {
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
```

## 定义Query ##

```js
const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    match,
    matches,
    player,
    players,
    food,
    foods,
    rater,
    raters
  }
})
module.exports = new GraphQLSchema({
  query: Query
})
```


**启动服务器试试吧**

[所有源码(https://github.com/vrxubo/graphql.git)](https://github.com/vrxubo/graphql.git)
> git clone https://github.com/vrxubo/graphql.git
> git checkout v2