// process.env.VUE_APP_ENV
// test  测试环境
// prod  生产环境
// dev   开发环境
// local 本地环境，适用于前后端的代码都跑在本地
// 根据不同环境，自定义设置
const url = {
  dev: {
    api: 'dev'
  },
  test: {
    api: 'test'
  },
  prod: {
    api: 'prod'
  },
  local: {
    api: 'local'
  }
}

export default url[process.env.VUE_APP_ENV]
