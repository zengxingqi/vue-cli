import Router from 'vue-router'
import routes from './routes.js'

export default () => new Router({
  routes,
  mode: 'hash',
  scrollBehavior (to, from, savedPositon) {
    return {
      x: 0,
      y: 0
    }
    // if (savedPositon) {
    //   return savedPositon
    // } else {
    //   return {
    //     x: 0,
    //     y: 0
    //   }
    // }
  }
})
