<template>
  <h3>hello vue</h3>
  <button @click="setUserProfile">设置用户信息</button>
  <router-view></router-view>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const setUserProfile = () => {
      store.commit('user/setUser', { nickname: 'maohepeng' })
    }
    return { setUserProfile }
  }
}
</script>

<style>
</style>
