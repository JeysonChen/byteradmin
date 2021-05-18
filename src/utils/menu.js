let menu = [
  {
    index: 'home',
    icon: 'el-icon-s-home',
    label: '首页',
    path: 'home',
  },
  {
    index: 'appoint',
    icon: 'el-icon-s-order',
    label: '预约管理',
    path: '',
    children: [
      {
        index: 'appointRegister',
        icon: 'el-icon-message',
        label: '预约挂号',
        path: 'appointRegister',
      },
      {
        index: 'appointNucleic',
        icon: 'el-icon-message',
        label: '预约核酸检测',
        path: 'appointNucleic',
      },
      {
        index: 'doctorSchedule',
        icon: 'el-icon-message',
        label: '医生排班',
        path: 'doctorSchedule',
      },
    ],
  },
  {
    index: 'fee',
    icon: 'el-icon-s-finance',
    label: '费用管理',
    path: 'fee',
    children: [
      {
        index: 'outpatientConsumption',
        icon: 'el-icon-message',
        label: '门诊消费记录',
        path: 'outpatientConsumption',
      },
      {
        index: 'outpatientRecharge',
        icon: 'el-icon-message',
        label: '门诊充值记录',
        path: 'outpatientRecharge',
      },
      {
        index: 'doctorSchedule',
        icon: 'el-icon-message',
        label: 'refundList',
        path: 'doctorSchedule',
      },
    ],
  },
  {
    index: 'hospital',
    icon: 'el-icon-s-cooperation',
    label: '医院信息',
    path: 'hospital',
    children: [
      {
        index: 'doctorManage',
        icon: 'el-icon-message',
        label: '医生管理',
        path: 'doctorManage',
      },
      {
        index: 'departmentManage',
        icon: 'el-icon-message',
        label: '科室管理',
        path: 'departmentManage',
      },
      {
        index: 'healthEncyclopedia',
        icon: 'el-icon-message',
        label: '健康百科',
        path: 'healthEncyclopedia',
      },
      {
        index: 'hospitalNavigator',
        icon: 'el-icon-message',
        label: '医院导航',
        path: 'hospitalNavigator',
      },
      {
        index: 'hospitalIntroduction',
        icon: 'el-icon-message',
        label: '医院简介',
        path: 'hospitalIntroduction',
      },
      {
        index: 'appointNotice',
        icon: 'el-icon-message',
        label: '预约须知',
        path: 'appointNotice',
      },
    ],
  },
  {
    index: 'systemSettings',
    icon: 'el-icon-setting',
    label: '系统设置',
    path: 'systemSettings',
    children: [
      {
        index: 'adminManage',
        icon: 'el-icon-message',
        label: '管理员管理',
        path: 'adminManage',
      },
      {
        index: 'roleManage',
        icon: 'el-icon-message',
        label: '角色管理',
        path: 'roleManage',
      },
      {
        index: 'menuManage',
        icon: 'el-icon-message',
        label: '菜单管理',
        path: 'menuManage',
      },
      {
        index: 'professionManage',
        icon: 'el-icon-message',
        label: '职称管理',
        path: 'professionManage',
      },
      {
        index: 'noticeManage',
        icon: 'el-icon-message',
        label: '消息公告',
        path: 'noticeManage',
      },
      {
        index: 'passwordManage',
        icon: 'el-icon-message',
        label: '修改密码',
        path: 'passwordManage',
      },
    ],
  },
]
export default menu
