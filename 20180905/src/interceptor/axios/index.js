// 开发文档  https://www.kancloud.cn/yunye/axios/234845
import axios from 'axios'
import domain from '@/config/origin.js'
const service = axios.create({
  baseURL: domain[process.env.VUE_APP_SOURCE_MAP], // api的base_url
  timeout: 20000 // request timeout
})
// axios请求拦截器
service.interceptors.request.use((config) => {
  return config
}, function (error) {
  return Promise.reject(error)
})
// axios响应拦截器
service.interceptors.response.use((response) => {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default service
