import regular from '@/utils/regular'
export const tableHeader = [
  {
    prop: 'userName',
    label: '用户名',
    width: 160
  },
  {
    prop: 'userAccount',
    label: '账号',
    width: 160
  },
  {
    prop: 'userRole',
    label: '角色',
    width: 120,
  },
  {
    prop: 'userPhone',
    label: '手机号',
    width: 160
  },
  {
    prop: 'isUsing',
    label: '是否启用',
    width: 100,
  },
  {
    prop: 'createTime',
    label: '创建时间',
    width: 160
  },
]

export const formItem = [
  {
    label: '用户名',
    type: 'input',
    value: 'userName',
    default: '',
    placeHolder: '请选择用户名',
  },
  {
    label: '账号',
    type: 'input',
    value: 'userAccount',
    default: '',
    placeHolder: '请选择账号',
  },
  {
    label: '选择角色',
    type: 'select',
    value: 'userRole',
    placeHolder: '请选择角色',
    default: '',
    options: [
      {
        label: '超级管理员',
        value: 'ADMIN',
      },
      {
        label: '医生',
        value: 'DOCTOR',
      },
      {
        label: '护士',
        value: 'NURSE',
      },
    ],
  },
  {
    label: '手机号',
    type: 'input',
    value: 'userPhone',
    default: '',
    placeHolder: '请选择手机号',
  },
  {
    label: '密码',
    type: 'password',
    value: 'password',
    default: '',
    placeHolder: '请选择密码',
  },
  {
    label: '确认密码',
    type: 'password',
    value: 'password2',
    default: '',
    placeHolder: '请选择密码',
  },
  {
    label: '是否启用',
    type: 'switch',
    value: 'isUsing',
    default: true,
  },
]

export const formSetting = {
  label: '100px',
}

export const formRule = {
  userName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 30, message: '请输入2-30字符', trigger: 'blur' },
  ],
  userAccount: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    {
      type: 'email',
      message: '请输入正确的邮箱地址',
      trigger: ['blur', 'change'],
    },
  ],
  role: [{ required: true, message: '请选择角色', trigger: 'change' }],
  userPhone: [
    {
      pattern: regular.phone,
      message: '请输入正确的手机号',
      trigger: 'blur',
    },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
  ],
  password2: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' },
  ],
}

export const searchFormItem = [
  {
    label: '用户名',
    type: 'input',
    value: 'userName',
    default: '',
    placeHolder: '请选择用户名',
    size: 'small'
  },
  {
    label: '账号',
    type: 'input',
    value: 'userAccount',
    default: '',
    placeHolder: '请选择账号',
    size: 'small',
  },

  // {
  //   label: '是否启用',
  //   type: 'select',
  //   value: 'isUsing',
  //   default: '',
  //   size: 'small',
  //   options: [
  //     {
  //       label: '全部',
  //       value: '',
  //     },
  //     {
  //       label: '已启用',
  //       value: true,
  //     },
  //     {
  //       label: '未启用',
  //       value: false,
  //     },
  //   ],
  // }
]

