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
    id: new GraphQLNonNull(GraphQLString),
    title: GraphQLString,
    enTitle: GraphQLString,
    desc: GraphQLString
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
        id: GraphQLString
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