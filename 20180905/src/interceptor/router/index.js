export default (router, store) => {
  console.log(store)
  router.beforeEach((to, from, next) => {
    console.log('=> beforeEach route invoked')
    console.log(to)
    console.log(from)
    next()
  })
  // 路由守卫
  router.beforeResolve((to, from, next) => {
    console.log('=> beforeResolve route invoked')
    next()
  })
  // 路由守卫 导航全部完成钩子，包含父子层级组件
  router.afterEach((to, from) => {
    console.log('=> afterEach route invoked')
  })
}
