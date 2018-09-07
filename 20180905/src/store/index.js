import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import actions from './default/actions'
import getters from './default/getters'
import mutations from './default/mutations'
import state from './default/state'

const debug = process.env.NODE_ENV !== 'production'

export default () => {
  const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    strict: debug,
    plugins: debug ? [createLogger()] : []
  })
  // vuex 热更替
  if (module.hot) {
    module.hot.accept([
      './default/state',
      './default/mutations',
      './default/actions',
      './default/getters'
    ], () => {
      const newStore = require('./default/state').default
      const newActions = require('./default/actions').default
      const newGetters = require('./default/getters').default
      const newMutations = require('./default/mutations').default
      store.hotUpdate({
        state: newStore,
        mutations: newMutations,
        actions: newActions,
        getters: newGetters,
        strict: debug,
        plugins: debug ? [createLogger()] : []
      })
    })
  }
  return store
}
