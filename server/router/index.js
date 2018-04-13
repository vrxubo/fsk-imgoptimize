const {graphiqlKoa, graphqlKoa} = require('apollo-server-koa')
const router = require('koa-router')()
const schema = require('../graphql/schema')
router.get('/graphql', graphqlKoa({schema}))
router.post('/graphql', graphqlKoa({schema}))
router.get('/graphiql', graphiqlKoa({
  endpointURL: '/graphql'
}))
module.exports = router.routes()


// router.get('/graphql', graphqlKoa({schema}))
// router.post('/graphql', graphqlKoa({schema}))
// router.get('/graphiql', graphiqlKoa({
//   endpointURL: '/graphql',
//   passHeader: `'Authorization': 'Bearer lorem ipsum'`,
// }))