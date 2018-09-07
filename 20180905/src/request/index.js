import request from '@/interceptor/axios'
// get
export const Get = (url = '/', data = {}) => {
  return request({
    url: url,
    method: 'GET',
    params: data
  })
}
// post
export const Post = (url = '/', data = {}) => {
  return request({
    url: url,
    method: 'POST',
    data
  })
}
// all  若无强烈需求，不建议使用
// export const All = (parms = Get('/', {})) => {
//   return axios.all([...parms])
//     .then(axios.spread((...res) => {
//       // 两个请求现在都执行完成
//       console.log(...res)
//       return res
//     })).catch((err) => {
//       return err
//     })
// }
