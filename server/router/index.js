const {graphiqlKoa, graphqlKoa} = require('graphql-server-koa')
const router = require('koa-router')()
const schema = require('../graphql/schema')
router.get('/graphql', graphqlKoa(schema))
router.get('/graphiql', graphiqlKoa(schema))

router.post('/graphql', graphqlKoa(schema))
router.post('/graphiql', graphiqlKoa(schema))
module.exports = router.routes()