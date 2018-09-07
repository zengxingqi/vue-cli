import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import App from './App.vue'
import CreateRouter from '@/router'
import CreateStore from '@/store'
import RouterInterceptor from '@/interceptor/router'
import '@/assets/style/reset.css'
Vue.config.productionTip = false
Vue.use(Router)
Vue.use(Vuex)
let router = CreateRouter()
let store = CreateStore()
RouterInterceptor(router, store)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
