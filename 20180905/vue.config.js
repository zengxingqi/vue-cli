// vue.config.js  详细配置信息  https://cli.vuejs.org/zh/config/
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    // 开发代理转发
    proxy: {
      '/api': {
        target: 'http://m.vanke.com/'
      }
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: process.env.VUE_APP_SOURCE_MAP === 'test'
}
