// process.env.VUE_APP_SOURCE_MAP
// test  测试环境
// prod  生产环境
// dev   开发环境
// local 本地环境，适用于前后端的代码都跑在本地
// 根据不同环境，自定义设置url域名地址，如上传文件服务器地址
const domain = {
  dev: 'http://47.106.94.82:8080/',
  test: '',
  prod: '',
  local: ''
}
export default domain
