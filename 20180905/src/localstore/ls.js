import Vue from 'vue'
import Storage from 'vue-ls'

let options = {
  namespace: '__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local' // storage name session, local, memory
}
console.log('ls.js 执行了一次')
Vue.use(Storage, options)
export default Vue.ls
