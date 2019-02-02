import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import App from './App.vue'
import CreateRouter from '@/router/'
import CreateStore from '@/store/'
import RouterInterceptor from '@/interceptor/router/'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(Vuex)

const router = CreateRouter()
const store = CreateStore()
RouterInterceptor(router, store)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
