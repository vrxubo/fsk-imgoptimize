const {
  GraphQLSchema,
  GraphQLObjectType
} = require('graphql')
const {
  match,
  matches,
  player,
  players,
  food,
  foods,
  rater,
  raters
} = require('./model/match')

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