const req = require.context('@/assets/icons/svg', false, /\.svg$/)
console.log(req, 'req')
const requireAll = (requireContext) => requireContext.keys()
const re = /\.\/(.*)\.svg/
const icons = requireAll(req).map((item) => {
  console.log(item, '88')
  return item.match(re)[1]
})
console.log(icons, 'icons')
export default icons
