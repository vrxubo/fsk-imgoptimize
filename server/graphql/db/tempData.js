const ms = [ { // 比赛数据
  "_id": "B2",
  "title": "B2: 一带一路使馆主厨邀请赛",
  "enTitle": "EMBASSY CHEF COMPETITION FOR THE BELT AND ROAD INITIATIVES",
  "desc": "展示本国的特色美食，提升在中国的知名度和美誉度，带动本国美食、特产的推广与销售，让中国消费者品尝更多的世界美食",
  "type": 1,
  "status": 0,
  "groups": [ {
    "levels": [ { "desc": "", "prize": "", "from": 1, "name": "使馆主厨奖" } ]
  } ]
},
  {
    "_id": "B3",
    "title": "B3：一带一路美食艺术伊尹赛（个人）",
    "enTitle": "THE BELT AND ROAD GASTRODIPLOMACY YIYIN CUP ( INDIVIDUAL )",
    "desc": "推动一带一路烹饪艺术家的技艺、文化、菜品交流，促进世界美食厨艺互鉴，为人类饮食健康做出贡献。",
    "type": 2,
    "status": 0,
    "groups": [ {
      "name": "国内选手",
      "levels": [
        { "desc": "", "prize": "", "to": 8, "from": 1, "name": "伊尹金奖" },
        { "desc": "", "prize": "", "from": 9, "name": "伊尹银奖" }
      ]
    }, {
      "levels": [
        { "desc": "", "prize": "", "to": 8, "from": 1, "name": "伊尹金奖" },
        { "desc": "", "prize": "", "from": 9, "name": "伊尹银奖" }
      ],
      "name": "国外选手"
    } ]
  },
  {
    "_id": "B4",
    "title": "B4：第三届厨邦超级凉菜大奖赛",
    "enTitle": "THE THIRD CHUBANG COLD DISH COMPETITION",
    "desc": "推动中国旺销凉菜厨艺交流、展示我国各大凉菜流派风采，扩大凉菜师傅知名度，发现和培养凉菜新星。",
    "type": 1,
    "status": 0,
    "groups": [
      {
        "levels": [
          { "desc": "", "prize": "", "to": 3, "from": 1, "name": "特金奖" },
          { "desc": "", "prize": "", "to": 9, "from": 4, "name": "金奖" },
          { "desc": "", "prize": "", "to": 18, "from": 10, "name": "银奖" },
          { "desc": "", "prize": "", "from": 19, "name": "优秀奖" }
        ]
      }
    ]
  },
  {
    "_id": "B1",
    "title": "B1：一带一路美食艺术伊尹赛(团体)",
    "enTitle": "THE BELT AND ROAD GASTRODIPLOMACY YIYIN CUP（GROUP）",
    "desc": "树立红厨帽餐厅国际地位，展示企业优秀文化和产品，促进国际交流，共建红厨帽餐厅互相学习的平台。",
    "type": 2,
    "status": 0,
    "groups": [ {
      "levels": [
        { "desc": "", "prize": "", "to": 8, "from": 1, "name": "伊尹大奖" },
        { "desc": "", "prize": "", "from": 9, "name": "伊尹金奖" }
      ]
    } ]
  } ]

const ps = [
  { "desc": "", matchId: "B2", "scene": 10, "name": "David Ball", "_id": "Z01" },
  { "desc": "", matchId: "B2", "scene": 10, "name": "Michal Řádek", "_id": "Z02" },
  { "desc": "", matchId: "B2", "scene": 10, "name": "JrRoŠČenka Ingrida", "_id": "Z03" },
  { "desc": "", matchId: "B2", "scene": 10, "name": "丁守峰", "_id": "Z04" },
  { "desc": "", matchId: "B2", "scene": 10, "name": "Layouni  Hafedh", "_id": "Z05" },
  { "desc": "", matchId: "B2", "scene": 10, "name": "Jeehan Saleem", "_id": "Z08" },
  { "desc": "", matchId: "B2", "scene": 10, "name": "Ana Montoya", "_id": "Z09" },
  { "desc": "", matchId: "B2", "scene": 10, "name": "Krista Kristensen", "_id": "Z10" },
  { "desc": "", matchId: "B2", "scene": 10, "name": "Lassi Tiihonen", "_id": "Z11" },
  { "desc": "", matchId: "B2", "scene": 10, "name": "Johana", "_id": "Z12" },

  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "李声平", "_id": "Y01" },
  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "刘功明", "_id": "Y03" },
  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "左泰锋", "_id": "Y04" },
  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "李贺明", "_id": "Y05" },
  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "李钢", "_id": "Y06" },
  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "高飞", "_id": "Y07" },
  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "段辉煌", "_id": "Y08" },
  { "desc": "", matchId: "B3", group: "国外选手", "scene": 10, "name": "David Ball", "_id": "Y12" },
  { "desc": "", matchId: "B3", group: "国外选手", "scene": 10, "name": "杰罗姆", "_id": "Y13" },
  { "desc": "", matchId: "B3", group: "国外选手", "scene": 10, "name": "Fabio Falanga", "_id": "Y14" },
  { "desc": "", matchId: "B3", group: "国外选手", "scene": 10, "name": "Rouquet Prévost", "_id": "Y15" },
  { "desc": "", matchId: "B3", group: "国外选手", "scene": 10, "name": "Ibrahim Naeem", "_id": "Y17" },
  { "desc": "", matchId: "B3", group: "国外选手", "scene": 10, "name": "Mohamed Niyaz", "_id": "Y18" },
  { "desc": "", matchId: "B3", group: "国外选手", "scene": 10, "name": "Nathalie Torres", "_id": "Y19" },
  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "王中伟", "_id": "Y20" },
  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "周伟武", "_id": "Y21" },
  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "林庆祥", "_id": "Y22" },
  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "吴学龄", "_id": "Y23" },
  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "吴云贵", "_id": "Y24" },
  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "赖建全", "_id": "Y26" },
  { "desc": "", matchId: "B3", group: "国外选手", "scene": 10, "name": "Rakrouki Adel", "_id": "Y28" },
  { "desc": "", matchId: "B3", group: "国外选手", "scene": 10, "name": "Gilbert Steiner", "_id": "Y29" },
  { "desc": "", matchId: "B3", group: "国外选手", "scene": 10, "name": "Roberto Albanese", "_id": "Y30" },
  { "desc": "", matchId: "B3", group: "国外选手", "scene": 10, "name": "Trilok Singh", "_id": "Y31" },
  { "desc": "", matchId: "B3", group: "国外选手", "scene": 10, "name": "Dipu Biswas", "_id": "Y32" },
  { "desc": "", matchId: "B3", group: "国外选手", "scene": 10, "name": "Fu Ming Hai", "_id": "Y33" },
  { "desc": "", matchId: "B3", group: "国外选手", "scene": 10, "name": "Martin Blažek", "_id": "Y34" },
  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "王万新", "_id": "Y35" },
  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "王景荣", "_id": "Y36" },
  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "邵庆宏", "_id": "Y37" },
  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "刘世芳", "_id": "Y38" },
  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "康俊生", "_id": "Y39" },
  { "desc": "", matchId: "B3", group: "国内选手", "scene": 10, "name": "梁小清", "_id": "Y40" },
  { "desc": "", matchId: "B3", group: "国外选手", "scene": 10, "name": "Diego Uriel Galvez", "_id": "Y41" },
  { "desc": "", matchId: "B3", group: "国外选手", "scene": 10, "name": "渡边睦夫", "_id": "Y42" },
  { "desc": "", matchId: "B3", group: "国外选手", "scene": 10, "name": "Ashraf Abusokhon", "_id": "Y43" },

  { matchId: "B4", desc: "", "scene": 10, "name": "丁玉亮", "_id": "L01" },
  { matchId: "B4", desc: "", "scene": 10, "name": "董永要", "_id": "L02" },
  { matchId: "B4", desc: "", "scene": 10, "name": "高柯", "_id": "L03" },
  { matchId: "B4", desc: "", "scene": 10, "name": "高生祥", "_id": "L04" },
  { matchId: "B4", desc: "", "scene": 10, "name": "李宁", "_id": "L05" },
  { matchId: "B4", desc: "", "scene": 10, "name": "王增俊", "_id": "L06" },
  { matchId: "B4", desc: "", "scene": 10, "name": "刘彦波", "_id": "L07" },
  { matchId: "B4", desc: "", "scene": 10, "name": "慕刚强", "_id": "L08" },
  { matchId: "B4", desc: "", "scene": 10, "name": "彭军炜", "_id": "L09" },
  { matchId: "B4", desc: "", "scene": 10, "name": "汪金海", "_id": "L10" },
  { matchId: "B4", desc: "", "scene": 10, "name": "王辰", "_id": "L11" },
  { matchId: "B4", desc: "", "scene": 10, "name": "王小川", "_id": "L12" },
  { matchId: "B4", desc: "", "scene": 10, "name": "王亮", "_id": "L13" },
  { matchId: "B4", desc: "", "scene": 10, "name": "王致银", "_id": "L14" },
  { matchId: "B4", desc: "", "scene": 10, "name": "武晨", "_id": "L15" },
  { matchId: "B4", desc: "", "scene": 10, "name": "张旭", "_id": "L17" },
  { matchId: "B4", desc: "", "scene": 10, "name": "赵俊召", "_id": "L18" },
  { matchId: "B4", desc: "", "scene": 10, "name": "张飞", "_id": "L19" },
  { matchId: "B4", desc: "", "scene": 10, "name": "羊少泉", "_id": "L20" },
  { matchId: "B4", desc: "", "scene": 10, "name": "杨广东", "_id": "L21" },
  { matchId: "B4", desc: "", "scene": 10, "name": "张宝成", "_id": "L22" },
  { matchId: "B4", desc: "", "scene": 10, "name": "赵龙", "_id": "L23" },
  { matchId: "B4", desc: "", "scene": 10, "name": "李思龙", "_id": "L24" },
  { matchId: "B4", desc: "", "scene": 10, "name": "谭志强", "_id": "L25" },
  { matchId: "B4", desc: "", "scene": 10, "name": "王永存", "_id": "L26" },
  { matchId: "B4", desc: "", "scene": 10, "name": "王建", "_id": "L27" },
  { matchId: "B4", desc: "", "scene": 10, "name": "产光明", "_id": "L29" },
  { matchId: "B4", desc: "", "scene": 10, "name": "全文华", "_id": "L30" },
  { matchId: "B4", desc: "", "scene": 10, "name": "侯典伟", "_id": "L31" },
  { matchId: "B4", desc: "", "scene": 10, "name": "周延昭", "_id": "L32" },
  { matchId: "B4", desc: "", "scene": 10, "name": "孙竟", "_id": "L33" },
  { matchId: "B4", desc: "", "scene": 10, "name": "黄剑盛", "_id": "L34" },
  { matchId: "B4", desc: "", "scene": 10, "name": "樊继锋", "_id": "L35" },
  { matchId: "B4", desc: "", "scene": 10, "name": "田自伟", "_id": "L36" },
  { matchId: "B4", desc: "", "scene": 10, "name": "钱维鑫", "_id": "L37" },
  { matchId: "B4", desc: "", "scene": 10, "name": "申占涛", "_id": "L38" },
  { matchId: "B4", desc: "", "scene": 10, "name": "曹学俊", "_id": "L39" },
  { matchId: "B4", desc: "", "scene": 10, "name": "陈德才", "_id": "L40" },
  { matchId: "B4", desc: "", "scene": 10, "name": "周志飞", "_id": "L41" },
  { matchId: "B4", desc: "", "scene": 10, "name": "种法伦", "_id": "L42" },
  { matchId: "B4", desc: "", "scene": 10, "name": "刁国正", "_id": "L43" },
  { matchId: "B4", desc: "", "scene": 10, "name": "靳自强", "_id": "L44" },
  { matchId: "B4", desc: "", "scene": 10, "name": "郭刚", "_id": "L45" },
  { matchId: "B4", desc: "", "scene": 10, "name": "庞金文", "_id": "L46" },
  { matchId: "B4", desc: "", "scene": 10, "name": "包继伟", "_id": "L47" },
  { matchId: "B4", desc: "", "scene": 10, "name": "范兴辉", "_id": "L48" },
  { matchId: "B4", desc: "", "scene": 10, "name": "张永生", "_id": "L49" },
  { matchId: "B4", desc: "", "scene": 10, "name": "沈尚民", "_id": "L50" },
  { matchId: "B4", desc: "", "scene": 10, "name": "汪连任", "_id": "L51" },
  { matchId: "B4", desc: "", "scene": 10, "name": "段永平", "_id": "L52" },
  { matchId: "B4", desc: "", "scene": 10, "name": "邓华青", "_id": "L53" },
  { matchId: "B4", desc: "", "scene": 10, "name": "伊朝明", "_id": "L54" },
  { matchId: "B4", desc: "", "scene": 10, "name": "王刚儒", "_id": "L55" },

  { matchId: "B1", desc: "", "scene": 10, "member": "张引平, 赵晓平, 池健", "name": "北京大董烤鸭店", "_id": "T01" },
  { matchId: "B1", desc: "", "scene": 10, "member": "张得胜, 韩增, 李阳", "name": "天津耳朵眼饮食集团", "_id": "T02" },
  { matchId: "B1", desc: "", "scene": 10, "member": "尹明玉, 刘洪峰, 辛廷杰", "name": "山东凯瑞餐饮集团", "_id": "T03" },
  { matchId: "B1", desc: "", "scene": 10, "member": "唐连军, 崔超锋, 王富景", "name": "河南鲁班张餐饮", "_id": "T04" },
  { matchId: "B1", desc: "", "scene": 10, "member": "李乐, 高伦, 李海英", "name": "伊尹餐饮", "_id": "T05" },
  { matchId: "B1", desc: "", "scene": 10, "member": "张晔, 张立杰, 迟国富", "name": "满满海餐饮", "_id": "T06" },
  { matchId: "B1", desc: "", "scene": 10, "member": "刘峰, 项林辉, 陈立军", "name": "小厨娘淮扬菜代表队", "_id": "T07" },
  { matchId: "B1", desc: "", "scene": 10, "member": "黄立成, 胡朋, 李伟标", "name": "徐记海鲜", "_id": "T08" },
  { matchId: "B1", desc: "", "scene": 10, "member": "梁伟, 何志忠, 赵兴宝", "name": "莲花渔村", "_id": "T09" },
  { matchId: "B1", desc: "", "scene": 10, "member": "郎剑杰, 李州, 陈辉", "name": "新荣记餐饮集团", "_id": "T10" },
  { matchId: "B1", desc: "", "scene": 10, "member": "王会龙, 肖俊龙, 江亚勇", "name": "陇菜和盛祥", "_id": "T11" },
  { matchId: "B1", desc: "", "scene": 10, "member": "余祖旺, 王洪凯, 宋光俊", "name": "广州半岛餐饮集团", "_id": "T12" },
  { matchId: "B1", desc: "", "scene": 10, "member": "蓝本清, 黄坚翔, 彭麦杰", "name": "度小月", "_id": "T13" },
  { matchId: "B1", desc: "", "scene": 10, "member": "任斌, 刘灯峰, 柳国红", "name": "武汉市丽华园酒店管理", "_id": "T14" },
  { matchId: "B1", desc: "", "scene": 10, "member": "王松, 余毓根, 李金应", "name": "九江俏西海餐饮管理", "_id": "T15" },
  { matchId: "B1", desc: "", "scene": 10, "member": "鞠德伟, 韩涛, 朱慧明", "name": "长春老妈菜馆", "_id": "T16" },
  { matchId: "B1", desc: "", "scene": 10, "member": "宋立平, 闫子成, 李雪清", "name": "包头新雅", "_id": "T17" },
  { matchId: "B1", desc: "", "scene": 10, "member": "代武, 何永华, 陈寿刚", "name": "贵阳丝恋黔所味友团队", "_id": "T18" },
  { matchId: "B1", desc: "", "scene": 10, "member": "陶冶, 陆文东, 石峰", "name": "真知味", "_id": "T19" },
  { matchId: "B1", desc: "", "scene": 10, "member": "汪育健, 徐英鹏, 刘建强", "name": "德悦梦之队", "_id": "T20" }

]

const foods = [
  {
    "_id": "T01（凉）",
    "name": "樱桃鹅肝",
    "enName": "Cherry foie gras",
    "desc": "",
    "matchId": "B1",
    "playerId": "T01"
  },
  {
    "_id": "T01（热）",
    "name": "红花汁鳘肚公",
    "enName": "Turble and red flower juice",
    "desc": "",
    "matchId": "B1",
    "playerId": "T01"
  },
  {
    "_id": "T01（汤）",
    "name": "黑松露墨鱼文思羹",
    "enName": "Black truffle in the tofu",
    "desc": "",
    "matchId": "B1",
    "playerId": "T01"
  },
  {
    "_id": "T01（面）",
    "name": "贝壳邂逅白芝士巧克力",
    "enName": "Shells met white cheese and chocolate",
    "desc": "",
    "matchId": "B1",
    "playerId": "T01"
  },
  {
    "_id": "T02（凉）",
    "name": "八大馇",
    "enName": "The eight cha",
    "desc": "",
    "matchId": "B1",
    "playerId": "T02"
  },
  {
    "_id": "T02（热）",
    "name": "红烧牛尾",
    "enName": "Stewed ox tail with brown sauce",
    "desc": "",
    "matchId": "B1",
    "playerId": "T02"
  },
  {
    "_id": "T02（汤）",
    "name": "紫蟹银鱼锅",
    "enName": "Purple crab whitebait porridge",
    "desc": "",
    "matchId": "B1",
    "playerId": "T02"
  },
  {
    "_id": "T02（面）",
    "name": "耳朵眼传统炸糕",
    "enName": "Traditional er duo yan friedcake",
    "desc": "",
    "matchId": "B1",
    "playerId": "T02"
  },
  {
    "_id": "T03（凉）",
    "name": "水晶肘子",
    "enName": "Crystal elbow",
    "desc": "",
    "matchId": "B1",
    "playerId": "T03"
  },
  {
    "_id": "T03（热）",
    "name": "糖醋鲤鱼",
    "enName": "Sweet and sour carp",
    "desc": "",
    "matchId": "B1",
    "playerId": "T03"
  },
  {
    "_id": "T03（汤）",
    "name": "清汤燕菜",
    "enName": "Clean soup agar-agar",
    "desc": "",
    "matchId": "B1",
    "playerId": "T03"
  },
  {
    "_id": "T03（面）",
    "name": "盘丝饼",
    "enName": "Pan cake",
    "desc": "",
    "matchId": "B1",
    "playerId": "T03"
  },
  {
    "_id": "T04（凉）",
    "name": "水晶猪蹄(国色天香)",
    "enName": "Crystal pig's feet(Exquisite Beauty）",
    "desc": "",
    "matchId": "B1",
    "playerId": "T04"
  },
  {
    "_id": "T04（热）",
    "name": "葱烧海参",
    "enName": "Scallion burning trepang",
    "desc": "",
    "matchId": "B1",
    "playerId": "T04"
  },
  {
    "_id": "T04（汤）",
    "name": "清汤酸辣乌鱼蛋",
    "enName": "Clean soup hot and sour snakehead's egg",
    "desc": "",
    "matchId": "B1",
    "playerId": "T04"
  },
  {
    "_id": "T04（面）",
    "name": "榴莲苹果酥",
    "enName": "Crisp durian and apple",
    "desc": "",
    "matchId": "B1",
    "playerId": "T04"
  },
  {
    "_id": "T05（凉）",
    "name": "山东印象",
    "enName": "Shandong  impression",
    "desc": "",
    "matchId": "B1",
    "playerId": "T05"
  },
  {
    "_id": "T05（热）",
    "name": "潍县萝卜烧真贝农黑猪肉",
    "enName": "Braised pork with Weifang Turnip",
    "desc": "",
    "matchId": "B1",
    "playerId": "T05"
  },
  {
    "_id": "T05（汤）",
    "name": "冲浪活海参",
    "enName": "Braised Sea Cumber",
    "desc": "",
    "matchId": "B1",
    "playerId": "T05"
  },
  {
    "_id": "T05（面）",
    "name": "鲅鱼饺子  海参包 酱肉火烧  蛤蜊面",
    "enName": "Mackerel pike dumpling,The sea cucumber package,bacon in the pie,clam noodles",
    "desc": "",
    "matchId": "B1",
    "playerId": "T05"
  },
  {
    "_id": "T06（凉）",
    "name": "小米拉皮",
    "enName": "Millet with rice milk slice",
    "desc": "",
    "matchId": "B1",
    "playerId": "T06"
  },
  {
    "_id": "T06（热）",
    "name": "至尊佛跳墙",
    "enName": "The supreme Fotiaoqiang",
    "desc": "",
    "matchId": "B1",
    "playerId": "T06"
  },
  {
    "_id": "T06（汤）",
    "name": "玉米汁杂粮汆大连鲍",
    "enName": "Corn juice，grains quick-boil Dalian abalone",
    "desc": "",
    "matchId": "B1",
    "playerId": "T06"
  },
  {
    "_id": "T06（面）",
    "name": "石子烤馍",
    "enName": "The pebble bake steamed bread",
    "desc": "",
    "matchId": "B1",
    "playerId": "T06"
  },
  {
    "_id": "T07（凉）",
    "name": "淮扬坛香三味拼",
    "enName": "The three kinds of taste pie with jar smell of Huaiyang",
    "desc": "",
    "matchId": "B1",
    "playerId": "T07"
  },
  {
    "_id": "T07（热）",
    "name": "淮扬一品全家福",
    "enName": "Huaiyang yipin stewed assorted meat",
    "desc": "",
    "matchId": "B1",
    "playerId": "T07"
  },
  {
    "_id": "T07（汤）",
    "name": "蟹糊文思豆腐羹",
    "enName": "Crab stive and tofu",
    "desc": "",
    "matchId": "B1",
    "playerId": "T07"
  },
  {
    "_id": "T07（面）",
    "name": "四季多汁小笼包",
    "enName": "The four season juicy small steamed bun",
    "desc": "",
    "matchId": "B1",
    "playerId": "T07"
  },
  {
    "_id": "T08（凉）",
    "name": "原味青椒",
    "enName": "Original green pepper",
    "desc": "",
    "matchId": "B1",
    "playerId": "T08"
  },
  {
    "_id": "T08（热）",
    "name": "蒜蓉粉丝蒸俄罗斯板蟹",
    "enName": "Garlic and bean vermicelli stew Russia's board crab",
    "desc": "",
    "matchId": "B1",
    "playerId": "T08"
  },
  {
    "_id": "T08（汤）",
    "name": "堂灼鱼汤蚌仔",
    "enName": "Clam and fish soup",
    "desc": "",
    "matchId": "B1",
    "playerId": "T08"
  },
  {
    "_id": "T08（面）",
    "name": "徐记红薯粉",
    "enName": "Sweet potato vermicelli",
    "desc": "",
    "matchId": "B1",
    "playerId": "T08"
  },
  {
    "_id": "T09（凉）",
    "name": "生吃鳇鱼籽",
    "enName": "Eat raw beluga roe",
    "desc": "",
    "matchId": "B1",
    "playerId": "T09"
  },
  {
    "_id": "T09（热）",
    "name": "锅包鳇鱼肉",
    "enName": "Fried beluga meat  in Scoop",
    "desc": "",
    "matchId": "B1",
    "playerId": "T09"
  },
  {
    "_id": "T09（汤）",
    "name": "翡翠鳇鱼筋",
    "enName": "Jade HuangYu tendon",
    "desc": "",
    "matchId": "B1",
    "playerId": "T09"
  },
  {
    "_id": "T09（面）",
    "name": "鳇鱼水饺",
    "enName": "Beluga dumplings",
    "desc": "",
    "matchId": "B1",
    "playerId": "T09"
  },
  {
    "_id": "T10（凉）",
    "name": "烟熏昌鱼",
    "enName": "Smoked butterfish",
    "desc": "",
    "matchId": "B1",
    "playerId": "T10"
  },
  {
    "_id": "T10（热）",
    "name": "黑松露海胆焗大花虾",
    "enName": "Black truffles,sea urchin and prawns",
    "desc": "",
    "matchId": "B1",
    "playerId": "T10"
  },
  {
    "_id": "T10（汤）",
    "name": "白芦笋黄鱼羹",
    "enName": "White asparagus and Yellow croaker soup",
    "desc": "",
    "matchId": "B1",
    "playerId": "T10"
  },
  {
    "_id": "T10（面）",
    "name": "和牛龙虾汤面",
    "enName": "Wagy and langouste noodles",
    "desc": "",
    "matchId": "B1",
    "playerId": "T10"
  },
  {
    "_id": "T11（凉）",
    "name": "酱牦牛肉",
    "enName": "Pickled Yak meat",
    "desc": "",
    "matchId": "B1",
    "playerId": "T11"
  },
  {
    "_id": "T11（热）",
    "name": "金菊百合",
    "enName": "Golden aster and lily",
    "desc": "",
    "matchId": "B1",
    "playerId": "T11"
  },
  {
    "_id": "T11（汤）",
    "name": "兰州灰豆子",
    "enName": "LanZhou grey peas",
    "desc": "",
    "matchId": "B1",
    "playerId": "T11"
  },
  {
    "_id": "T11（面）",
    "name": "兰州老月饼",
    "enName": "LanZhou old moon cake",
    "desc": "",
    "matchId": "B1",
    "playerId": "T11"
  },
  {
    "_id": "T12（凉）",
    "name": "烤椒鲍鱼仔",
    "enName": "Bake green pepper and abalone",
    "desc": "",
    "matchId": "B1",
    "playerId": "T12"
  },
  {
    "_id": "T12（热）",
    "name": "盐焗走地鸡",
    "enName": "Grilled chicken with salt",
    "desc": "",
    "matchId": "B1",
    "playerId": "T12"
  },
  {
    "_id": "T12（汤）",
    "name": "半岛功夫汤",
    "enName": "Bandao Kungfu soup",
    "desc": "",
    "matchId": "B1",
    "playerId": "T12"
  },
  {
    "_id": "T12（面）",
    "name": "水晶金鱼饺",
    "enName": "Crystal golden fish dumplings",
    "desc": "",
    "matchId": "B1",
    "playerId": "T12"
  },
  {
    "_id": "T13（凉）",
    "name": "台湾双宝之乌鱼子、樱花虾",
    "enName": "Snakehead roe and cherry shrimp",
    "desc": "",
    "matchId": "B1",
    "playerId": "T13"
  },
  {
    "_id": "T13（热）",
    "name": "凤梨豆酱蒸星斑",
    "enName": "Pineapple bean paste steamed star grouper",
    "desc": "",
    "matchId": "B1",
    "playerId": "T13"
  },
  {
    "_id": "T13（汤）",
    "name": "半天笋炖排骨汤",
    "enName": "Areca flower braised pork ribs soup",
    "desc": "",
    "matchId": "B1",
    "playerId": "T13"
  },
  {
    "_id": "T14（汤）",
    "name": "荷叶炖鮰鱼狮子头",
    "enName": "Lotus leaf stew channel catfish and large meatball",
    "desc": "",
    "matchId": "B1",
    "playerId": "T14"
  },
  {
    "_id": "T14（面）",
    "name": "荷花白糖糕",
    "enName": "Lotus and white sugar cake",
    "desc": "",
    "matchId": "B1",
    "playerId": "T14"
  },
  {
    "_id": "T13（面）",
    "name": "迎宾麻糬",
    "enName": "Hemp potato",
    "desc": "",
    "matchId": "B1",
    "playerId": "T13"
  },
  {
    "_id": "T14（凉）",
    "name": "冰晶藕带配卡露咖鱼子酱",
    "enName": "Cold Lotus root with kaluka caviar",
    "desc": "",
    "matchId": "B1",
    "playerId": "T14"
  },
  {
    "_id": "T15（凉）",
    "name": "蓝莓樱桃山药",
    "enName": "Blueberry cherry yam",
    "desc": "",
    "matchId": "B1",
    "playerId": "T15"
  },
  {
    "_id": "T15（热）",
    "name": "白雪藏龙",
    "enName": "Dragon hide in the white snow",
    "desc": "",
    "matchId": "B1",
    "playerId": "T15"
  },
  {
    "_id": "T14（热）",
    "name": "低温牛小排配香煎藕饼",
    "enName": "The low temperature beef short rib with Fried Lotus Root Pie",
    "desc": "",
    "matchId": "B1",
    "playerId": "T14"
  },
  {
    "_id": "T15（汤）",
    "name": "西海土猪汤",
    "enName": "West sea aardvark soup",
    "desc": "",
    "matchId": "B1",
    "playerId": "T15"
  },
  {
    "_id": "T15（面）",
    "name": "黑金流沙包",
    "enName": "Black gold quicksand package",
    "desc": "",
    "matchId": "B1",
    "playerId": "T15"
  },
  {
    "_id": "T16（凉）",
    "name": "双色猪手",
    "enName": "The pig trotter has two color",
    "desc": "",
    "matchId": "B1",
    "playerId": "T16"
  },
  {
    "_id": "T16（热）",
    "name": "韩式牛肉炖土豆",
    "enName": "Korean beef stew potato",
    "desc": "",
    "matchId": "B1",
    "playerId": "T16"
  },
  {
    "_id": "T16（汤）",
    "name": "米汤土豆条炖柳蒿芽",
    "enName": "Rice soup,potato stew liuhao sprouts",
    "desc": "",
    "matchId": "B1",
    "playerId": "T16"
  },
  {
    "_id": "T16（面）",
    "name": "五彩拉糕",
    "enName": "Five color glutinous rice cake",
    "desc": "",
    "matchId": "B1",
    "playerId": "T16"
  },
  {
    "_id": "T17（凉）",
    "name": "硕果累累拼绣球笋衣",
    "enName": "Countless rich fruits with a beautiful ball and bamboo shoot",
    "desc": "",
    "matchId": "B1",
    "playerId": "T17"
  },
  {
    "_id": "T17（热）",
    "name": "蒙古大汗烤羊排",
    "enName": "Great khan of Mongolia bake Lamb chops",
    "desc": "",
    "matchId": "B1",
    "playerId": "T17"
  },
  {
    "_id": "T17（汤）",
    "name": "一品养生羊汤",
    "enName": "YiPin fish bone and mutton soup",
    "desc": "",
    "matchId": "B1",
    "playerId": "T17"
  },
  {
    "_id": "T17（面）",
    "name": "丰收",
    "enName": "Harvest",
    "desc": "",
    "matchId": "B1",
    "playerId": "T17"
  },
  {
    "_id": "T18（凉）",
    "name": "丝恋红汤丝娃娃",
    "enName": "Silian A variety of vegetable soup",
    "desc": "",
    "matchId": "B1",
    "playerId": "T18"
  },
  {
    "_id": "T18（热）",
    "name": "茅台糟辣鱼",
    "enName": "Maotai liquor halogen spicy fish",
    "desc": "",
    "matchId": "B1",
    "playerId": "T18"
  },
  {
    "_id": "T18（面）",
    "name": "威宁荞饼烤香猪",
    "enName": "Weining buckwheat pie bake pig",
    "desc": "",
    "matchId": "B1",
    "playerId": "T18"
  },
  {
    "_id": "T18（汤）",
    "name": "泉水盗汗鸡",
    "enName": "Spring night sweats chicken",
    "desc": "",
    "matchId": "B1",
    "playerId": "T18"
  },
  {
    "_id": "T19（凉）",
    "name": "媚娘醉龙虾",
    "enName": "Meiniang salted the lobster with wine",
    "desc": "",
    "matchId": "B1",
    "playerId": "T19"
  },
  {
    "_id": "T19（热）",
    "name": "拆烩蟹鲢头",
    "enName": "Head of Silver carp with hairy crab",
    "desc": "",
    "matchId": "B1",
    "playerId": "T19"
  },
  {
    "_id": "T19（面）",
    "name": "东台鱼汤面",
    "enName": "Dongtai fish soup noodles",
    "desc": "",
    "matchId": "B1",
    "playerId": "T19"
  },
  {
    "_id": "T19（汤）",
    "name": "天山雪莲炖枣皇",
    "enName": "Tianshan snow lotus stew jujube",
    "desc": "",
    "matchId": "B1",
    "playerId": "T19"
  },
  {
    "_id": "T20（凉）",
    "name": "菊花鲳鱼",
    "enName": "Grass carp and pomfret",
    "desc": "",
    "matchId": "B1",
    "playerId": "T20"
  },
  {
    "_id": "T20（热）",
    "name": "龙盏虾趣",
    "enName": "The east China sea prawn and broccoli",
    "desc": "",
    "matchId": "B1",
    "playerId": "T20"
  },
  {
    "_id": "T20（面）",
    "name": "象形鲍鱼酥",
    "enName": "The shape of snack like abalone",
    "desc": "",
    "matchId": "B1",
    "playerId": "T20"
  },
  {
    "_id": "T20（汤）",
    "name": "三生三世桃凝烩鱼脑",
    "enName": "Peach gum and Boneless fish head",
    "desc": "",
    "matchId": "B1",
    "playerId": "T20"
  },
  {
    "_id": "Z01",
    "name": "冰岛传统鳕鱼扒",
    "enName": "Traditional Plokkfiskur",
    "desc": "",
    "matchId": "B2",
    "playerId": "Z01"
  },
  {
    "_id": "Z02",
    "name": "传统捷克菜.牛肉搭配奶油酱和饺子",
    "enName": "Traditional Czech dish. Beef with cream sauce and dumplings",
    "desc": "",
    "matchId": "B2",
    "playerId": "Z02"
  },
  {
    "_id": "Z03",
    "name": "豆腐饼",
    "enName": "Curd pie",
    "desc": "",
    "matchId": "B2",
    "playerId": "Z03"
  },
  {
    "_id": "Z04",
    "name": "安迪斯秘鲁炒牛肉",
    "enName": "The andes in Peru stir-fry beef",
    "desc": "",
    "matchId": "B2",
    "playerId": "Z04"
  },
  {
    "_id": "Z09",
    "name": "哥伦比亚土豆汤",
    "enName": "Ajiaco Santafereño",
    "desc": "",
    "matchId": "B2",
    "playerId": "Z09"
  },
  {
    "_id": "Z05",
    "name": "羔羊肉片搭配萨夫兰西梅和肉桂汁",
    "enName": "Lamb filet with prunes in safran and cinamon sauce",
    "desc": "",
    "matchId": "B2",
    "playerId": "Z05"
  },
  {
    "_id": "Z08",
    "name": "马尔代夫香料包金枪鱼",
    "enName": "Kandu Kukulhu",
    "desc": "",
    "matchId": "B2",
    "playerId": "Z08"
  },
  {
    "_id": "Z10",
    "name": "猪肉，脆皮和红豆越橘",
    "enName": "Pork，crispy skins and lingonberries",
    "desc": "",
    "matchId": "B2",
    "playerId": "Z10"
  },
  {
    "_id": "Z11",
    "name": "羔羊肉片，炖羔羊前腿连肩肉，白菜卷和所有香料汁",
    "enName": "Lamb fillet，braised lamb shoulder,cabbage roll and all spice sauce",
    "desc": "",
    "matchId": "B2",
    "playerId": "Z11"
  },
  {
    "_id": "Y01",
    "name": "李二酸菜鱼",
    "enName": "Stewed fish with pickled vegetables Lier style",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y01"
  },
  {
    "_id": "Y03",
    "name": "沙汁焗鲍鱼",
    "enName": "Abalone with specific sauce",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y03"
  },
  {
    "_id": "Z12",
    "name": "伊瓦拉对虾",
    "enName": "Encocado de Camaron",
    "desc": "",
    "matchId": "B2",
    "playerId": "Z12"
  },
  {
    "_id": "Y04",
    "name": "煎烤鲅鱼",
    "enName": "Fry scomberomorus niphonius",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y04"
  },
  {
    "_id": "Y05",
    "name": "黑蒜子牛肉粒",
    "enName": "Beef tenderloin tith garlci and black pepper",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y05"
  },
  {
    "_id": "Y07",
    "name": "炭烧西班牙猪排",
    "enName": "Wood grilled  Spanish pork chops",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y07"
  },
  {
    "_id": "Y06",
    "name": "聚点羊肉串",
    "enName": "Lamb skewer Juadian style",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y06"
  },
  {
    "_id": "Y08",
    "name": "东安黄金鸡",
    "enName": "Stewed chicken Dongan style",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y08"
  },
  {
    "_id": "Y12",
    "name": "香煎比目鱼",
    "enName": "Pan-fried Halibut Warm spring vegetable salad",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y12"
  },
  {
    "_id": "Y14",
    "name": "海鲜意面",
    "enName": "Seafood pasta",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y14"
  },
  {
    "_id": "Y13",
    "name": "香酥鳕鱼千层塔",
    "enName": "Crisp cod multi-tower",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y13"
  },
  {
    "_id": "Y15",
    "name": "金鸭",
    "enName": "Golden  Duck",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y15"
  },
  {
    "_id": "Y17",
    "name": "鱼片卷面包果土豆泥配炸咖喱肉片",
    "enName": "Maldivian Fish Roulade with Breeffruit Sandeli served with Curried Cutlet",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y17"
  },
  {
    "_id": "Y18",
    "name": "马尔代夫礁鱼配咖喱鸡腿和烟熏金枪鱼等",
    "enName": "Maldivian Reef Fish served withDrumstick Curry&Smoked Tunna",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y18"
  },
  {
    "_id": "Y19",
    "name": "安第斯山脉柠檬腌生鱼",
    "enName": "Ceviche Andean",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y19"
  },
  {
    "_id": "Y20",
    "name": "椒麻汁香煎私房牛排",
    "enName": "Hemp pepper juice fried private steak",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y20"
  },
  {
    "_id": "Y21",
    "name": "冰镇咕噜肉",
    "enName": "Sweet and sour pork served with ice",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y21"
  },
  {
    "_id": "Y22",
    "name": "一带一路福祉香随",
    "enName": "Roe lucky bag,Pan fry scallops and dired onion and satay sauce",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y22"
  },
  {
    "_id": "Y23",
    "name": "松鼠戏珠",
    "enName": "Sweet and sour fish",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y23"
  },
  {
    "_id": "Y24",
    "name": "妈妈焖老南瓜",
    "enName": "Mama stuffy old pumpkin",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y24"
  },
  {
    "_id": "Y26",
    "name": "手扒羊肉",
    "enName": "Boiled mutton with spicy sauce",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y26"
  },
  {
    "_id": "Y28",
    "name": "鱿鱼裹蒸粗麦粉配时蔬",
    "enName": "Couscous with stuffed calamari served with stew vegetables jardinière",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y28"
  },
  {
    "_id": "Y29",
    "name": "斯特拉斯堡鲑鱼片",
    "enName": "Salmon fillet Strasbourgoise",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y29"
  },
  {
    "_id": "Y30",
    "name": "改良版经典章鱼土豆",
    "enName": "Octopus & potato revisitation of classic",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y30"
  },
  {
    "_id": "Y31",
    "name": "奶油鸡肉",
    "enName": "Butter Chicken",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y31"
  },
  {
    "_id": "Y32",
    "name": "穆格莱式羊肉米饭",
    "enName": "Moghlai Mutton Biryani",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y32"
  },
  {
    "_id": "Y33",
    "name": "萨莫萨三角饺",
    "enName": "Samosas",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y33"
  },
  {
    "_id": "Y34",
    "name": "捷克经典烤牛肉",
    "enName": "Svíčková na smetaně s karlovarským knedlíkem a želé z becherovky a brusinek",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y34"
  },
  {
    "_id": "Y35",
    "name": "翡翠橄榄鱼",
    "enName": "Jade olive fish",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y35"
  },
  {
    "_id": "Y36",
    "name": "牧瓦人手抓饭",
    "enName": "Crane man hand pilaf",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y36"
  },
  {
    "_id": "Y37",
    "name": "姜辣鲍仔香煎小米腊味饭",
    "enName": "Sea-ear prickled by ginger and fried millet with preserved meat smell",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y37"
  },
  {
    "_id": "Y38",
    "name": "海梭鱼烧海参",
    "enName": "The barracuda burning sea cucumber",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y38"
  },
  {
    "_id": "Y39",
    "name": "炭烧小牛肉",
    "enName": "Use charcoal fire burning flesh",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y39"
  },
  {
    "_id": "Y40",
    "name": "芙蓉甜辣虾球",
    "enName": "Stir fried prawn with Thai sweet and chili sauce",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y40"
  },
  {
    "_id": "Y41",
    "name": "咖喱虾饭",
    "enName": "Prawn carry rice",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y41"
  },
  {
    "_id": "Y43",
    "name": "手抓饭",
    "enName": "Mansaf",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y43"
  },
  {
    "_id": "Y42",
    "name": "鸭子配时令蔬菜",
    "enName": "鴨と季節野菜の煮物",
    "desc": "",
    "matchId": "B3",
    "playerId": "Y42"
  },
  {
    "_id": "L01（荤）",
    "name": "（荤）麻辣冰露花螺",
    "desc": "",
    "matchId": "B4",
    "playerId": "L01"
  },
  {
    "_id": "L01（素）",
    "name": "（素）补脑益智核桃 ",
    "desc": "",
    "matchId": "B4",
    "playerId": "L01"
  },
  {
    "_id": "L02（荤）",
    "name": "（荤）北平小带鱼   ",
    "desc": "",
    "matchId": "B4",
    "playerId": "L02"
  },
  {
    "_id": "L03（荤）",
    "name": "（荤）龙井书香小牛肉",
    "desc": "",
    "matchId": "B4",
    "playerId": "L03"
  },
  {
    "_id": "L02（素）",
    "name": "（素）青柠珍菌",
    "desc": "",
    "matchId": "B4",
    "playerId": "L02"
  },
  {
    "_id": "L03（素）",
    "name": "（素）厨邦美味酱佛手",
    "desc": "",
    "matchId": "B4",
    "playerId": "L03"
  },
  {
    "_id": "L04（荤）",
    "name": "（荤）意境柠檬小排",
    "desc": "",
    "matchId": "B4",
    "playerId": "L04"
  },
  {
    "_id": "L04（素）",
    "name": "（素）养生黑蒜佐捞汁鲜秋葵",
    "desc": "",
    "matchId": "B4",
    "playerId": "L04"
  },
  {
    "_id": "L05（荤）",
    "name": "（荤）蒜泥白肉    ",
    "desc": "",
    "matchId": "B4",
    "playerId": "L05"
  },
  {
    "_id": "L05（素）",
    "name": "（素）豉香春笋",
    "desc": "",
    "matchId": "B4",
    "playerId": "L05"
  },
  {
    "_id": "L06（荤）",
    "name": "（荤）温拌深海螺头 ",
    "desc": "",
    "matchId": "B4",
    "playerId": "L06"
  },
  {
    "_id": "L06（素）",
    "name": "（素）秘制橙香红薯",
    "desc": "",
    "matchId": "B4",
    "playerId": "L06"
  },
  {
    "_id": "L07（素）",
    "name": "（素）香芒海鲜卷配蓝莓橙",
    "desc": "",
    "matchId": "B4",
    "playerId": "L07"
  },
  {
    "_id": "L07（荤）",
    "name": "（荤）金鸡报晓",
    "desc": "",
    "matchId": "B4",
    "playerId": "L07"
  },
  {
    "_id": "L08（荤）",
    "name": "（荤）思雨牛肉",
    "desc": "",
    "matchId": "B4",
    "playerId": "L08"
  },
  {
    "_id": "L08（素）",
    "name": "（素）盆栽黎麦色拉",
    "desc": "",
    "matchId": "B4",
    "playerId": "L08"
  },
  {
    "_id": "L09（荤）",
    "name": "（荤）金枪鱼紫金卷",
    "desc": "",
    "matchId": "B4",
    "playerId": "L09"
  },
  {
    "_id": "L09（素）",
    "name": "（素）和风春卷",
    "desc": "",
    "matchId": "B4",
    "playerId": "L09"
  },
  {
    "_id": "L10（荤）",
    "name": "（荤）海城风酱黄鱼",
    "desc": "",
    "matchId": "B4",
    "playerId": "L10"
  },
  {
    "_id": "L10（素）",
    "name": "（素）养生益脑脆兰丝",
    "desc": "",
    "matchId": "B4",
    "playerId": "L10"
  },
  {
    "_id": "L11（荤）",
    "name": "（荤）酸辣牙带鱼",
    "desc": "",
    "matchId": "B4",
    "playerId": "L11"
  },
  {
    "_id": "L12（荤）",
    "name": "（荤）本邦酱香乳鸽皇",
    "desc": "",
    "matchId": "B4",
    "playerId": "L12"
  },
  {
    "_id": "L11（素）",
    "name": "（素）创意赛香瓜",
    "desc": "",
    "matchId": "B4",
    "playerId": "L11"
  },
  {
    "_id": "L12（素）",
    "name": "（素）风生水起碧波捞",
    "desc": "",
    "matchId": "B4",
    "playerId": "L12"
  },
  {
    "_id": "L13（荤）",
    "name": "（荤）法式焗鳗鱼    ",
    "desc": "",
    "matchId": "B4",
    "playerId": "L13"
  },
  {
    "_id": "L13（素）",
    "name": "（素）宫廷仿膳豌豆黄",
    "desc": "",
    "matchId": "B4",
    "playerId": "L13"
  },
  {
    "_id": "L14（素）",
    "name": "（素）养生海菜墩",
    "desc": "",
    "matchId": "B4",
    "playerId": "L14"
  },
  {
    "_id": "L14（荤）",
    "name": "（荤）老虎菜拌海参",
    "desc": "",
    "matchId": "B4",
    "playerId": "L14"
  },
  {
    "_id": "L15（荤）",
    "name": "（荤）鲜麻汁捞拌牛头肉",
    "desc": "",
    "matchId": "B4",
    "playerId": "L15"
  },
  {
    "_id": "L15（素）",
    "name": "（素）记忆中的味道",
    "desc": "",
    "matchId": "B4",
    "playerId": "L15"
  },
  {
    "_id": "L17（荤）",
    "name": "（荤）芪术天麻老汤炆吊片",
    "desc": "",
    "matchId": "B4",
    "playerId": "L17"
  },
  {
    "_id": "L17（素）",
    "name": "（素）养身紫薯淮山药",
    "desc": "",
    "matchId": "B4",
    "playerId": "L17"
  },
  {
    "_id": "L19（素）",
    "name": "（素）养生山药",
    "desc": "",
    "matchId": "B4",
    "playerId": "L19"
  },
  {
    "_id": "L18（荤）",
    "name": "（荤）脆椒牛腩",
    "desc": "",
    "matchId": "B4",
    "playerId": "L18"
  },
  {
    "_id": "L19（荤）",
    "name": "（荤）脆皮手撕鸡",
    "desc": "",
    "matchId": "B4",
    "playerId": "L19"
  },
  {
    "_id": "L20（荤）",
    "name": "（荤）吐司泡菜鸡丝卷",
    "desc": "",
    "matchId": "B4",
    "playerId": "L20"
  },
  {
    "_id": "L18（素）",
    "name": "（素）酱佛手瓜",
    "desc": "",
    "matchId": "B4",
    "playerId": "L18"
  },
  {
    "_id": "L20（素）",
    "name": "（素）巧手农家白菜",
    "desc": "",
    "matchId": "B4",
    "playerId": "L20"
  },
  {
    "_id": "L21（素）",
    "name": "（素）一品蛋酥",
    "desc": "",
    "matchId": "B4",
    "playerId": "L21"
  },
  {
    "_id": "L22（荤）",
    "name": "（荤）熟拌大连鲍",
    "desc": "",
    "matchId": "B4",
    "playerId": "L22"
  },
  {
    "_id": "L22（素）",
    "name": "（素）爽口菜根香",
    "desc": "",
    "matchId": "B4",
    "playerId": "L22"
  },
  {
    "_id": "L21（荤）",
    "name": "（荤）私房豆豉富贵鱼",
    "desc": "",
    "matchId": "B4",
    "playerId": "L21"
  },
  {
    "_id": "L23（荤）",
    "name": "（荤）竹林手撕鸡",
    "desc": "",
    "matchId": "B4",
    "playerId": "L23"
  },
  {
    "_id": "L24（素）",
    "name": "（素）香醋菊花海蜇头",
    "desc": "",
    "matchId": "B4",
    "playerId": "L24"
  },
  {
    "_id": "L25（荤）",
    "name": "（荤）麻婆婆秘制鸭",
    "desc": "",
    "matchId": "B4",
    "playerId": "L25"
  },
  {
    "_id": "L24（荤）",
    "name": "（荤）一绝牛肚",
    "desc": "",
    "matchId": "B4",
    "playerId": "L24"
  },
  {
    "_id": "L23（素）",
    "name": "（素）农家纸片笋",
    "desc": "",
    "matchId": "B4",
    "playerId": "L23"
  },
  {
    "_id": "L25（素）",
    "name": "（素）红糖山药",
    "desc": "",
    "matchId": "B4",
    "playerId": "L25"
  },
  {
    "_id": "L26（素）",
    "name": "（素）草原风情",
    "desc": "",
    "matchId": "B4",
    "playerId": "L26"
  },
  {
    "_id": "L27（荤）",
    "name": "（荤）麻辣味汁淋蟹钳",
    "desc": "",
    "matchId": "B4",
    "playerId": "L27"
  },
  {
    "_id": "L26（荤）",
    "name": "（荤）蒙太爷牛肉",
    "desc": "",
    "matchId": "B4",
    "playerId": "L26"
  },
  {
    "_id": "L27（素）",
    "name": "（素）捞汁养生牛蒡丝",
    "desc": "",
    "matchId": "B4",
    "playerId": "L27"
  },
  {
    "_id": "L29（荤）",
    "name": "（荤）芥蓝海螺",
    "desc": "",
    "matchId": "B4",
    "playerId": "L29"
  },
  {
    "_id": "L29（素）",
    "name": "（素）香椿苗拌鲜桃仁",
    "desc": "",
    "matchId": "B4",
    "playerId": "L29"
  },
  {
    "_id": "L30（荤）",
    "name": "（荤）迷宗鲜鲍",
    "desc": "",
    "matchId": "B4",
    "playerId": "L30"
  },
  {
    "_id": "L30（素）",
    "name": "（素）满园春色 ",
    "desc": "",
    "matchId": "B4",
    "playerId": "L30"
  },
  {
    "_id": "L31（荤）",
    "name": "（荤）冰封捞汁海参",
    "desc": "",
    "matchId": "B4",
    "playerId": "L31"
  },
  {
    "_id": "L31（素）",
    "name": "（素）厨邦巧拌面  ",
    "desc": "",
    "matchId": "B4",
    "playerId": "L31"
  },
  {
    "_id": "L32（荤）",
    "name": "（荤）木瓜沙拉虾仁卷",
    "desc": "",
    "matchId": "B4",
    "playerId": "L32"
  },
  {
    "_id": "L32（素）",
    "name": "（素）养生蔬菜墩",
    "desc": "",
    "matchId": "B4",
    "playerId": "L32"
  },
  {
    "_id": "L34（素）",
    "name": "（素）牛油果沙拉",
    "desc": "",
    "matchId": "B4",
    "playerId": "L34"
  },
  {
    "_id": "L35（荤）",
    "name": "（荤）张飞牛肉",
    "desc": "",
    "matchId": "B4",
    "playerId": "L35"
  },
  {
    "_id": "L33（荤）",
    "name": "（荤）江风鱼火",
    "desc": "",
    "matchId": "B4",
    "playerId": "L33"
  },
  {
    "_id": "L33（素）",
    "name": "（素）不时不食",
    "desc": "",
    "matchId": "B4",
    "playerId": "L33"
  },
  {
    "_id": "L35（素）",
    "name": "（素）轻食水果沙拉",
    "desc": "",
    "matchId": "B4",
    "playerId": "L35"
  },
  {
    "_id": "L34（荤）",
    "name": "（荤）真贝农土鸡",
    "desc": "",
    "matchId": "B4",
    "playerId": "L34"
  },
  {
    "_id": "L37（荤）",
    "name": "（荤）松茸福袋布盅",
    "desc": "",
    "matchId": "B4",
    "playerId": "L37"
  },
  {
    "_id": "L37（素）",
    "name": "（素）冰沙圣女果",
    "desc": "",
    "matchId": "B4",
    "playerId": "L37"
  },
  {
    "_id": "L36（荤）",
    "name": "（荤）时令菜墩鲜蛏子",
    "desc": "",
    "matchId": "B4",
    "playerId": "L36"
  },
  {
    "_id": "L36（素）",
    "name": "（素）许沟缠丝蛋汇红娘",
    "desc": "",
    "matchId": "B4",
    "playerId": "L36"
  },
  {
    "_id": "L39（素）",
    "name": "（素）巧拌枸杞苗",
    "desc": "",
    "matchId": "B4",
    "playerId": "L39"
  },
  {
    "_id": "L38（荤）",
    "name": "（荤）莲城藕鱼",
    "desc": "",
    "matchId": "B4",
    "playerId": "L38"
  },
  {
    "_id": "L40（荤）",
    "name": "（荤）神笔鳝丝",
    "desc": "",
    "matchId": "B4",
    "playerId": "L40"
  },
  {
    "_id": "L39（荤）",
    "name": "（荤）香酥带鱼卷",
    "desc": "",
    "matchId": "B4",
    "playerId": "L39"
  },
  {
    "_id": "L38（素）",
    "name": "（素）莲城豆黄",
    "desc": "",
    "matchId": "B4",
    "playerId": "L38"
  },
  {
    "_id": "L42（荤）",
    "name": "（荤）古法烤肉配盘龙苤蓝",
    "desc": "",
    "matchId": "B4",
    "playerId": "L42"
  },
  {
    "_id": "L40（素）",
    "name": "（素）春天来了",
    "desc": "",
    "matchId": "B4",
    "playerId": "L40"
  },
  {
    "_id": "L42（素）",
    "name": "（素）富贵口袋松露珍菌",
    "desc": "",
    "matchId": "B4",
    "playerId": "L42"
  },
  {
    "_id": "L41（素）",
    "name": "（素）三味野锦荟",
    "desc": "",
    "matchId": "B4",
    "playerId": "L41"
  },
  {
    "_id": "L41（荤）",
    "name": "（荤）深海虾配鲜姬松茸",
    "desc": "",
    "matchId": "B4",
    "playerId": "L41"
  },
  {
    "_id": "L44（素）",
    "name": "（素）柠檬小西瓜",
    "desc": "",
    "matchId": "B4",
    "playerId": "L44"
  },
  {
    "_id": "L45（荤）",
    "name": "（荤）大荔水磨丝",
    "desc": "",
    "matchId": "B4",
    "playerId": "L45"
  },
  {
    "_id": "L43（荤）",
    "name": "（荤）新派黑叉烧",
    "desc": "",
    "matchId": "B4",
    "playerId": "L43"
  },
  {
    "_id": "L43（素）",
    "name": "（素）腌制安歌红",
    "desc": "",
    "matchId": "B4",
    "playerId": "L43"
  },
  {
    "_id": "L44（荤）",
    "name": "（荤）蒜香小黄鱼",
    "desc": "",
    "matchId": "B4",
    "playerId": "L44"
  },
  {
    "_id": "L47（荤）",
    "name": "（荤）青春尖叫焐鸡",
    "desc": "",
    "matchId": "B4",
    "playerId": "L47"
  },
  {
    "_id": "L47（素）",
    "name": "（素）青粉世家配君上",
    "desc": "",
    "matchId": "B4",
    "playerId": "L47"
  },
  {
    "_id": "L46（荤）",
    "name": "（荤）青花椒白切羊脖",
    "desc": "",
    "matchId": "B4",
    "playerId": "L46"
  },
  {
    "_id": "L46（素）",
    "name": "（素）生态野菜双拼",
    "desc": "",
    "matchId": "B4",
    "playerId": "L46"
  },
  {
    "_id": "L45（素）",
    "name": "（素）荞面煎饼时蔬卷",
    "desc": "",
    "matchId": "B4",
    "playerId": "L45"
  },
  {
    "_id": "L49（素）",
    "name": "（素）透亮滑溜苦荞凉粉",
    "desc": "",
    "matchId": "B4",
    "playerId": "L49"
  },
  {
    "_id": "L48（素）",
    "name": "（素）厨邦风味捞拌荞面",
    "desc": "",
    "matchId": "B4",
    "playerId": "L48"
  },
  {
    "_id": "L50（荤）",
    "name": "（荤）草原阿希泰",
    "desc": "",
    "matchId": "B4",
    "playerId": "L50"
  },
  {
    "_id": "L48（荤）",
    "name": "（荤）五味",
    "desc": "",
    "matchId": "B4",
    "playerId": "L48"
  },
  {
    "_id": "L52（荤）",
    "name": "（荤）米辣柠檬牦牛干巴",
    "desc": "",
    "matchId": "B4",
    "playerId": "L52"
  },
  {
    "_id": "L49（荤）",
    "name": "（荤）红松塔熏羔羊排",
    "desc": "",
    "matchId": "B4",
    "playerId": "L49"
  },
  {
    "_id": "L51（荤）",
    "name": "（荤）岭南卤味老鸡",
    "desc": "",
    "matchId": "B4",
    "playerId": "L51"
  },
  {
    "_id": "L52（素）",
    "name": "（素）油鸡土从（拼字）菌配金雀花",
    "desc": "",
    "matchId": "B4",
    "playerId": "L52"
  },
  {
    "_id": "L50（素）",
    "name": "（素）厨邦美味哈拉海",
    "desc": "",
    "matchId": "B4",
    "playerId": "L50"
  },
  {
    "_id": "L54（素）",
    "name": "（素）青葱芥末酱拌藕牙 ",
    "desc": "",
    "matchId": "B4",
    "playerId": "L54"
  },
  {
    "_id": "L53（素）",
    "name": "（素）橄榄油虫草花拼美味鲜牛肝菌",
    "desc": "",
    "matchId": "B4",
    "playerId": "L53"
  },
  {
    "_id": "L51（素）",
    "name": "（素）老味扒糕",
    "desc": "",
    "matchId": "B4",
    "playerId": "L51"
  },
  {
    "_id": "L55（荤）",
    "name": "（荤）烧椒小海鲜",
    "desc": "",
    "matchId": "B4",
    "playerId": "L55"
  },
  {
    "_id": "L53（荤）",
    "name": "（荤）黑松露酱荔枝拌龙虾仔",
    "desc": "",
    "matchId": "B4",
    "playerId": "L53"
  },
  {
    "_id": "L55（素）",
    "name": "（素）椒麻脆笋",
    "desc": "",
    "matchId": "B4",
    "playerId": "L55"
  },
  {
    "_id": "L54（荤）",
    "name": "（荤）柠香酸辣野生鱼",
    "desc": "",
    "matchId": "B4",
    "playerId": "L54"
  }
]