const Router = require('koa-router')
const {graphqlKoa, graphiqlKoa} = require('apollo-server-koa')
const router = new Router()
const schema = require('../graphql/schema')
router.get('/graphql', graphqlKoa({schema}))
router.post('/graphql', graphqlKoa({schema}))
router.get('/graphiql', graphiqlKoa({
  endpointURL: '/graphql',
  passHeader: `'Authorization': 'Bearer lorem ipsum'`,
}))
module.exports = router.routes()