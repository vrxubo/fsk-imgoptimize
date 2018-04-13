const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql')
const data = require('./data.json')

const Match = new GraphQLObjectType({
  name: 'Match',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    title: {
      type: GraphQLString
    },
    enTitle: {
      type: GraphQLString
    },
    desc: {
      type: GraphQLString
    }
  }
})

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    matches: {
      type: new GraphQLList(Match),
      resolve () {
        return data
      }
    },
    match: {
      type: Match,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve (_, args) {
        return data.filter(m => m.id === args.id)[0]
      }
    }
  }
})
module.exports = new GraphQLSchema({
  query: Query
})