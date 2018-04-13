# 使用Koa搭建我的第一个GraphQL服务器 #

## 一. 创建项目,安装依赖 ##
```
    # mkdir learn-graphql&&cd learn-graphql
    # npm init
    # npm i koa koa-bodyparser koa-router koa-static log4js apollo-server-koa graphql -S
```

## 二. 创建一个Koa Server ##

```js
    const Koa = require('koa')
    const koaStatic = require('koa-static')
    const koaBodyParse = require('koa-bodyparser')
    const {staticDir, port} = require('./config)
    const logger = require('./logger')('server')
    const app = new Koa()
    app.use(koaStatic(staticDir))
    app.use(koaBodyParse({
       onerror (err, ctx) {
          logger.error(err)
          ctx.throw(`body parse error: ${err}`)
       }
    })
    app.use(ctx => (ctx.body = 'Hello World!'))
    app.listen(port, () => logger.info(`server is start on: ${port}`))
```
   此时在浏览器中打开 http://localhost:port/ 就可以看到 Hello World! 了

## 三. 准备数据 ##

本次只是简单的搭建一个graphql服务器, 因此数据直接放到json文件里.
下面是之前一个比赛活动的部分的数据拿过来直接用了,  大家也可以自己构建数据(数据内容并不重要)

```json
     // json文件的内容
     [
       {
         "id": "B1",
         "title": "B1：一带一路美食艺术伊尹赛(团体)",
         "enTitle": "THE BELT AND ROAD GASTRODIPLOMACY YIYIN CUP（GROUP）",
         "desc": "树立红厨帽餐厅国际地位，展示企业优秀文化和产品，促进国际交流，共建红厨帽餐厅互相学习的平台。"
       },
       {
         "id": "B2",
         "title": "B2：一带一路美食艺术伊尹赛（个人）",
         "enTitle": "THE BELT AND ROAD GASTRODIPLOMACY YIYIN CUP ( INDIVIDUAL )",
         "desc": "推动一带一路烹饪艺术家的技艺、文化、菜品交流，促进世界美食厨艺互鉴，为人类饮食健康做出贡献。"
       }
     ]
 ```

## 四. 创建GraphQL Schema ##

这时就需要用到 graphql 了
```js
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} = require('graphql')
```

首先根据上一节构建的数据内容 创建GraphQL 对象类型
```js
const Match = new GraphQLObjectType({
    name: 'Match', // 类型名 必填项 没有报错
    description: '比赛的详情', // 可以对对象类型加个说明
    fields: {      // 该类型 对象的字段列表  这里只放能让用户访问的字段
                   // 如果我们不想让用户看到enTitle的数据 就不要在fields里定义enTitle
        id: {
            type: GraphQLString  // 定义id的数据类型为 String
        },
        title: {   // 定义title属性
            type: GraphQLString
        },
        desc: {
            type: GraphQLString
        }
    }
})
```

这里要吐槽一下graphql组件的api
```js
    // 定义field的时候不能简写 必须写成下面这样
    fields: {
        desc: {
            type: GraphQLString
        }
    }
    // 我总是习惯性的写成这样:  不好使 会报错 -_-///
    fields: {
        desc: GraphQLString
    }
```

定义完了对象类型接下来就是查询类型了:
```js
    const data = require('./data.json')
    // 与对象类型一样 定义查询类型也是用GraphQLObjectType
    const Query = new GraphQLObjectType({
        name: 'Query'
        fields: {
            matches: {      // 查询比赛列表
                type: new GraphQLList(Match) // 类型是Match的列表
                resolve () {
                    return data
                }
            },
            match: {        // 查询单个比赛详情
                type: Match,
                args: {     // 查询参数
                    id: GraphQLString // 使用ID查询单个比赛
                },
                resolve (_, args) {   // resolve方法的第二参数是参数对象
                    return data.filter(m => m.id === args.id)[0]
                }
            }
        }
    })
```

最后是Schema

```js

module.exports = new GraphQLSchema({
    query: Query
})
```

## 五. 配置路由 ##

```js
    const {graphiqlKoa, graphqlKoa} = require('apollo-server-koa')
    const router = require('koa-router')()
    const schema = require('../graphql/schema')
    // 使用GraphQL所有的请求都可以用同一个接口
    // 因此这里只配了 /graphql 的 get 和 post 接口
    router.get('/graphql', graphqlKoa({schema}))
    router.post('/graphql', graphqlKoa({schema}))
    router.get('/graphiql', graphiqlKoa({ // 使用graphiql 可以在页面里直接调试接口
      endpointURL: '/graphql'
    }))
    module.exports = router.routes()
```

将路由配置加到之前写的Koa Server里

```js
    const router = require('./router')
    // 将 app.use(ctx => (ctx.body = 'Hello World!')) 改为:
    app.use(router)
```
重启服务.

## 六. 调试接口 ##

在浏览器中打开 http://localhost:port/graphiql 进入调试页面

尝试在页面中分别输入以下代码, 然后运行看结果:

查询id 为 "B1" 的比赛的title:
```
# 这里的 match 对应前面定义的查询类型里的fields里match  后面的matches一样
{
  match (id: "B1") {
    title
  }
}
```

查询所有比赛的title:
```
{
  matches {
    title
  }
}
```

还可以这样查:
```
{
  matches {
    title
  }
  match (id: "B1") {
    title
  }
}
```

别名:
```
{
    m1: match (id: 'B1') {
        title
    }
    m2: match (id: 'B2') {
        title
    }
}
```

片段
```
# 加入有一个查询长这样  有没有感觉重复的字段写三遍很麻烦
{
    m1: match (id: 'B1') {
        title
        desc
        id
    }
    m2: match (id: 'B2') {
        title
        desc
        id
    }
    matches {
        title
        desc
        id
    }
}
# 所以有了片段
{
    m1: match (id: 'B1') {
        ...matchFields
    }
    m2: match (id: 'B2') {
        ...matchFields
    }
    matches {
        ...matchFields
    }
}
fragment matchFields on Match {  // Match 上的属性
    id
    title
    desc
}
```


```
# 这种格式其实是查询的简写
{
    queryFieldName {
        fieldName
    }
}

# 完整的query 如:
# query 说明是一个查询  与之对应的还有 mutation
# queryOneMatch 相当于查询的描述
query queryOneMatch {
    match (id: "B1") {
        title
    }
}
```

变量
```
# 如果每次查询都修改一次id的话 是不是很麻烦
# 所以有了变量  定义 String类型的变量 $id
query queryOneMatch ($id: String) {
    match (id: $id) {
        title
    }
}
# 在调试页有个QUERY VARIABLES 的面板 点开可以输入变量:
{
  "id": "B1"
}
```