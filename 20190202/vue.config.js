// vue.config.js  详细配置信息  https://cli.vuejs.org/zh/config/
var path = require('path')
var prod = process.env.NODE_ENV === 'production'
// var test = process.env.VUE_APP_ENV === 'test'
var isProd = process.env.VUE_APP_ENV === 'prod'


var resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: prod ? './' : '/',
  // publicpath: prod ? './' : '/',
  // outputDir: 'dist',
  devServer: {
    port: 9999,
    overlay: {
      warnings: true,
      errors: true
    }
    // 开发代理转发
    // proxy: {
    //   '/api': {
    //     target: 'http://m.vanke.com/'
    //   }
    // }
  },
  chainWebpack: config => {
    // 设置全局别名
    // .set('@', resolve('src'))
    config.resolve.alias
      .set('_com', resolve('src/components'))
  },
  // config 参数为已经解析好的 webpack 配置
  configureWebpack: config => {
    // config.plugins = []; // 这样会直接将 plugins 置空
    // 使用 return 一个对象会通过 webpack-merge 进行合并，plugins 不会置空
    return {
      plugins: []
    }
  },
  // css module 用法
  // https://vue-loader.vuejs.org/zh/guide/css-modules.html#%E7%94%A8%E6%B3%95
  css: {
    loaderOptions: {
      css: {
        localIdentName: isProd
          ? '[hash:base64:8]'
          : '[path]-[name]-[hash:5]',
        camelCase: 'only'
      }
    },
    sourceMap: !isProd
  },
  // runtimeCompiler: !prod,
  lintOnSave: !prod,
  productionSourceMap: !isProd
}
