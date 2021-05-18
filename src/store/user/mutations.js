export default {
  updateUser(state, { key, val }) {
    console.log(key, val, '9999999')
    state[key] = val
  },
  TOGGLESIDEBAR(state) {
    state.isCollaps = !state.isCollaps;
  }
}
