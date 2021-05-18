export default {
  isLogin: localStorage.getItem('isLogin') || true, // 是否登录
  token: localStorage.getItem('token'),
  isCollaps: false
}
