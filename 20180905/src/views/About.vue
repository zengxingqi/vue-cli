<template>
  <div class="about">
    <a href="javascript:void(0);" @click="up">This is an about page</a>
  </div>
</template>
<script>
import localstore from '@/localstore'
import { Get } from '@/request'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created () {
    Get('#/about').then((res) => {
      console.log(res)
    })
    console.log(localstore)
  },
  methods: {
    up () {
      localstore.removeLs('token')
    }
  }
}
</script>
