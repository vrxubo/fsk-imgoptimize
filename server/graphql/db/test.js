const matchDb = require('./modelFactory')('rater')
const rs = [
  {
    "_id": "1",
    "name": "利永周",
    "desc": ""
  },
  {
    "_id": "3",
    "name": "徐国华",
    "desc": ""
  },
  {
    "_id": "4",
    "name": "张勇",
    "desc": ""
  },
  {
    "_id": "2",
    "name": "司宛春",
    "desc": ""
  },
  {
    "_id": "6",
    "name": "沈加华",
    "desc": ""
  },
  {
    "_id": "11",
    "name": "甄文达",
    "desc": ""
  },
  {
    "_id": "36",
    "name": "王源",
    "desc": ""
  },
  {
    "_id": "31",
    "name": "仇俊",
    "desc": ""
  },
  {
    "_id": "16",
    "name": "尹达刚",
    "desc": ""
  },
  {
    "_id": "20",
    "name": "周义勇",
    "desc": ""
  },
  {
    "_id": "5",
    "name": "嵇晓丽",
    "desc": ""
  },
  {
    "_id": "30",
    "name": "梁小清",
    "desc": ""
  },
  {
    "_id": "21",
    "name": "李晓波",
    "desc": ""
  },
  {
    "_id": "26",
    "name": "徐延林",
    "desc": ""
  },
  {
    "_id": "10",
    "name": "韩家宸",
    "desc": ""
  },
  {
    "_id": "15",
    "name": "许沛荣",
    "desc": ""
  },
  {
    "_id": "35",
    "name": "关鑫",
    "desc": ""
  },
  {
    "_id": "25",
    "name": "赵孝国",
    "desc": ""
  },
  {
    "_id": "8",
    "name": "Jorg Zipprick",
    "desc": ""
  },
  {
    "_id": "32",
    "name": "屈浩",
    "desc": ""
  },
  {
    "_id": "12",
    "name": "Guilermo Gonzales Arica",
    "desc": ""
  },
  {
    "_id": "37",
    "name": "陈伟",
    "desc": ""
  },
  {
    "_id": "17",
    "name": "董新民",
    "desc": ""
  },
  {
    "_id": "22",
    "name": "Anders Johannesson",
    "desc": ""
  },
  {
    "_id": "9",
    "name": "屈浩",
    "desc": ""
  },
  {
    "_id": "13",
    "name": "叶震宇",
    "desc": ""
  },
  {
    "_id": "27",
    "name": "关鑫",
    "desc": ""
  },
  {
    "_id": "18",
    "name": "钟志勇",
    "desc": ""
  },
  {
    "_id": "23",
    "name": "Marie Sauce",
    "desc": ""
  },
  {
    "_id": "28",
    "name": "王源",
    "desc": ""
  },
  {
    "_id": "33",
    "name": "赵孝国",
    "desc": ""
  },
  {
    "_id": "38",
    "name": "梁小清",
    "desc": ""
  },
  {
    "_id": "7",
    "name": "Cyril Rouquet",
    "desc": ""
  },
  {
    "_id": "14",
    "name": "王京京",
    "desc": ""
  },
  {
    "_id": "19",
    "name": "张洪",
    "desc": ""
  },
  {
    "_id": "24",
    "name": "屈浩",
    "desc": ""
  },
  {
    "_id": "29",
    "name": "陈伟",
    "desc": ""
  },
  {
    "_id": "34",
    "name": "徐延林",
    "desc": ""
  },
  {
    "_id": "39",
    "name": "仇俊",
    "desc": ""
  }
]

matchDb.create(...rs)