const matchDb = require('./modelFactory')('match')
const playerDb = require('./modelFactory')('player')
// matchDb.remove({})
//   .then(() => playerDb.remove({}))
//   .then(() => {
//     matchDb.create({
//       title: '一带一路美食艺术伊尹赛(团体)', // 名称
//       enTitle: 'THE BELT AND ROAD GASTRODIPLOMACY YIYIN CUP（GROUP）', // 名称
//       desc: '树立红厨帽餐厅国际地位，展示企业优秀文化和产品，促进国际交流，共建红厨帽餐厅互相学习的平台。', // 宗旨
//       type: 2, // 1 个人赛 2 团体赛
//       status: 0,
//       groups: [{
//         levels:[
//           {name: '伊尹大奖', from: 1, to: 8, prize: '', desc: ''},
//           {name: '伊尹金奖', from: 9, prize: '', desc: ''}
//         ]
//       }]
//     }).then(data => {
//       playerDb.create({
//         id: 'T01',
//         name: '北京大董烤鸭店',
//         member: '张引平, 赵晓平, 池健',
//         scene: 10,
//         desc: '',
//         matchId: data._id
//       })
//       playerDb.create({
//         id: 'T02',
//         name: '天津耳朵眼饮食集团',
//         member: '张得胜, 韩增, 李阳',
//         scene: 10,
//         desc: '',
//         matchId: data._id
//       })
//     })
//   })

// playerDb.create([
//   { matchId: '5acebf372646479d1993f40a', id: 'T03', name: '山东凯瑞餐饮集团', member: '尹明玉, 刘洪峰, 辛廷杰', scene: 10, desc: ''},
//   { matchId: '5acebf372646479d1993f40a', id: 'T04', name: '河南鲁班张餐饮', member: '唐连军, 崔超锋, 王富景', scene: 10, desc: ''},
//   { matchId: '5acebf372646479d1993f40a', id: 'T05', name: '伊尹餐饮', member: '李乐, 高伦, 李海英', scene: 10, desc: ''},
//   { matchId: '5acebf372646479d1993f40a', id: 'T06', name: '满满海餐饮', member: '张晔, 张立杰, 迟国富', scene: 10, desc: ''},
//   { matchId: '5acebf372646479d1993f40a', id: 'T07', name: '小厨娘淮扬菜代表队', member: '刘峰, 项林辉, 陈立军', scene: 10, desc: ''},
//   { matchId: '5acebf372646479d1993f40a', id: 'T08', name: '徐记海鲜', member: '黄立成, 胡朋, 李伟标', scene: 10, desc: ''},
//   { matchId: '5acebf372646479d1993f40a', id: 'T09', name: '莲花渔村', member: '梁伟, 何志忠, 赵兴宝', scene: 10, desc: ''},
//   { matchId: '5acebf372646479d1993f40a', id: 'T10', name: '新荣记餐饮集团', member: '郎剑杰, 李州, 陈辉', scene: 10, desc: ''},
//   { matchId: '5acebf372646479d1993f40a', id: 'T11', name: '陇菜和盛祥', member: '王会龙, 肖俊龙, 江亚勇', scene: 10, desc: ''},
//   { matchId: '5acebf372646479d1993f40a', id: 'T12', name: '广州半岛餐饮集团', member: '余祖旺, 王洪凯, 宋光俊', scene: 10, desc: ''},
//   { matchId: '5acebf372646479d1993f40a', id: 'T13', name: '度小月', member: '蓝本清, 黄坚翔, 彭麦杰', scene: 10, desc: ''},
//   { matchId: '5acebf372646479d1993f40a', id: 'T14', name: '武汉市丽华园酒店管理', member: '任斌, 刘灯峰, 柳国红', scene: 10, desc: ''},
//   { matchId: '5acebf372646479d1993f40a', id: 'T15', name: '九江俏西海餐饮管理', member: '王松, 余毓根, 李金应', scene: 10, desc: ''},
//   { matchId: '5acebf372646479d1993f40a', id: 'T16', name: '长春老妈菜馆', member: '鞠德伟, 韩涛, 朱慧明', scene: 10, desc: ''},
//   { matchId: '5acebf372646479d1993f40a', id: 'T17', name: '包头新雅', member: '宋立平, 闫子成, 李雪清', scene: 10, desc: ''},
//   { matchId: '5acebf372646479d1993f40a', id: 'T18', name: '贵阳丝恋黔所味友团队', member: '代武, 何永华, 陈寿刚', scene: 10, desc: ''},
//   { matchId: '5acebf372646479d1993f40a', id: 'T19', name: '真知味', member: '陶冶, 陆文东, 石峰', scene: 10, desc: ''},
//   { matchId: '5acebf372646479d1993f40a', id: 'T20', name: '德悦梦之队', member: '汪育健, 徐英鹏, 刘建强', scene: 10, desc: ''}
// ])
//   .then(data => console.log(data))

const allCache = {}

const batch = cacheKey => {
  let queue = {}
  let cache = allCache[cacheKey]
  let loadings = {}
  if (!cache) {
    allCache[cacheKey] = cache = {}
  }
  function exec () {
    const ids = Object.keys(queue)
    if (ids.length) {
      const _qs = queue
      Object.assign(loadings, queue)
      queue = {}
      playerDb.find({id: {$in: ids}})
        .then(data => {
          data.forEach(p => {
            cache[p.id] = p
            const {resolves} = _qs[p.id]
            resolves && resolves.forEach(resolve => resolve(p))
            delete _qs[p.id]
            delete loadings[p.id]
          })
          Object.keys(_qs).forEach(id => {
            const player = cache[id]
            if (player) {
              _qs[id].resolves.forEach(resolve => resolve(player))
              delete loadings[id]
            } else {
              _qs[id].rejects.forEach(reject => reject(`没有找到ID为${id}的选手`))
              delete loadings[id]
            }
          })
        })
    }
  }

  return id => {
    if (cache[id]) {
      return cache[id]
    } else {
      return new Promise((resolve, reject) => {
        const task = queue[id]
        const loadingTask = loadings[id]
        if (loadingTask) {
          loadingTask.resolves.push(resolve)
          loadingTask.rejects.push(reject)
        } else if (task) {
          task.resolves.push(resolve)
          task.rejects.push(reject)
        } else {
          queue[id] = {
            resolves: [resolve],
            rejects: [reject]
          }
        }
        setTimeout(exec)
      })
    }
  }
}

const get = batch('player')


for (let i = 0; i < 10; i++) {
  get(`T${i < 10 && '0' || ''}${i}`)
    .then(data => console.log(data.id, data.name))
    .catch(err => console.error(err))
}

for (let i = 0; i < 10; i++) {
  get(`T${i < 10 && '0' || ''}${i}`)
    .then(data => console.log(data.id, data.name))
    .catch(err => console.error(err))
}

