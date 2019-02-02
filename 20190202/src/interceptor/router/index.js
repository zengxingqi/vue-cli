
export default (router, store) => {
  console.group('interceptor store')
  console.log('store => ', store)
  console.groupEnd()
  // 钩子函数 - 路由守卫
  router.beforeEach((to, from, next) => {
    console.group('interceptor router')
    console.log('beforeEach to => ', to)
    console.log('beforeEach from => ', from)
    console.groupEnd()

    next()
  })

  router.beforeResolve((to, from, next) => {
    console.log('=> beforeResolve route invoked')
    next()
  })

  router.afterEach((to, from) => {
    console.log('=> afterEach route invoked')
  })
}
