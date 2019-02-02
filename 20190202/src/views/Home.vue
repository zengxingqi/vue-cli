<template>
  <div :class="$style.home">
    <p>api: {{api}}</p>
    <p>user-state: {{userState}}</p>
    <p>user-getter: {{userGetter}}</p>
    <p @click.stop="actionUser">点我设置actionUser</p>
    <p @click.stop="mutationsUser">点我设置mutationsUser</p>
    <p @click.stop="goAbout">点我前往about页面</p>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
import { STATE } from '@/config/constant/store_type'
import api from '@/config/api/'
import { Get } from '@/request/'
import con from '_com/rendering'
export default {
  name: 'home',
  props: {},
  components: {},
  data () {
    return {
      api: api.api
    }
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next(vm => {
      // 因为当钩子执行前，组件实例还没被创建
      // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
      console.group('Home beforeRouteEnter')
      console.log('to, from => ', to, from)
      console.log('vm => ', vm) // 当前组件的实例
      console.groupEnd()
    })
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 对于一个带有动态参数的路径 /good/:id，在 /good/1 和 /good/2 之间跳转的时候，
    // 由于会渲染同样的good组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log('beforeRouteUpdate ', this) // 当前组件实例
    next()
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log('beforeRouteLeave ', this) // 当前组件实例
    next()
  },
  methods: {
    ...mapActions({
      getUserAciton: STATE
    }),
    ...mapMutations({
      getUserMutations: STATE
    }),
    goAbout () {
      this.$router.push({ name: 'about' })
    },
    actionUser () {
      this.getUserAciton('action user')
    },
    mutationsUser () {
      this.getUserMutations('mutations user')
    }
  },
  created () {
    con()
    Get().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  filters: {},
  computed: {
    ...mapState({
      userState: state => state.user
    }),
    ...mapGetters({
      userGetter: 'user'
    })
  },
  watch: {},
  destroyed () {}
}
</script>
<style module>
.home {
  width: 300px;
}
.img {
  width: 30px;
}
</style>
