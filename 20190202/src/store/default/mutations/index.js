import { STATE } from '@/config/constant/store_type'

export default {
  [STATE] (store, parameter) {
    store.user = parameter
  }
}
