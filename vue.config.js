const path = require('path')
const mockMiddleware = require('./mock.config');
const isDev = process.env.NODE_ENV === 'development';
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  outputDir: __dirname + '/../server/dist',
  devServer: {
    // proxy: 'http://localhost:3000',
    before(app) {
      isDev && app.use(mockMiddleware)
    }
  },
  chainWebpack: (config) => {
    config.module.rule('svg').exclude.add(resolve('src/assets/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
      .before('svg-sprite-loader')
      .use('svgo-loader')
      .loader('svgo-loader')
      .options({
        // plugins: [{ removeAttrs: { attrs: 'path:fill' } }],
      })
      .end()
    // .......
  },
}
