
// 引入 Mock
const Mock = require('mockjs')

// 定义数据类型
module.exports = function () {
  return Mock.mock({
    'code': 0,
    'msg': 'success',
    'data': {
      'pageNo': 1,
      'pageSize': 10,
      'total': 14,
      'list|10': [{
        'id': '@integer',
        'userName': '@ctitle(3)',
        'userAccount': '@email',
        'userRole|1': ['超级管理员', '护士', '医生'],
        'userPhone': /^1[3-9]\d{9}$/,
        'isUsing|1': [true, false],
        'createTime': '@datetime'
      }]
    },
  }) 
}