// http请求接口地址
import domain from '@/config/origin.js'
// 根据打包环境：test/prod/dev/local，默认配置
const env = domain[process.env.VUE_APP_SOURCE_MAP]
export default {
  api: `${env}api`
}
