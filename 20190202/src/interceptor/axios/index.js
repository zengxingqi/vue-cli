import axios from 'axios'

const service = axios.create({
  baseURL: '' // request base url
  // timeout: 200000 // request timeout
})
// axios请求拦截器
service.interceptors.request.use((config) => {
  console.log('http request sending', config)
  return config
}, function (error) {
  console.log('http request fail', error)
  return Promise.reject(error)
})

// axios响应拦截器
service.interceptors.response.use((response) => {
  console.log('http response success', response)
  return response
}, function (error) {
  console.log('http response error', error)
  return Promise.reject(error)
})

export default service
