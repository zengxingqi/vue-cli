<template>
  <div class="home">
    {{usr}}
    <a href="javascript:void(0);" @click="up">{{msg}}</a>
    <HelloWorld :msg="msg"/>
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
import { Get } from '@/request'
import localstore from '@/localstore'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: process.env.VUE_APP_SOURCE_MAP
    }
  },
  created () {
    console.log(localstore, this.$ls)
    Get().then((res) => {
      console.log(res)
    })
  },
  methods: {
    up () {
      localstore.setLs('token', 'kdhdwasdvsdw')
      this.uptate('你好世界')
    },
    ...mapMutations({ uptate: 'uptate' }),
    ...mapActions({})
  },
  computed: {
    ...mapState({ usr: 'usr' }),
    ...mapGetters({})
  }
}
</script>
