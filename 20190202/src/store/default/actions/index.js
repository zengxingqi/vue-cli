import { STATE } from '@/config/constant/store_type'

export default {
  [STATE] ({ commit, state }, user) {
    // 如果异步获取，则需要
    // return new Promise((resolve, reject) => {})
    commit(STATE, user)
  }
}
