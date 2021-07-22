<template>
  <!-- 顶部通栏布局 -->
  <AppTopnav></AppTopnav>
  <!-- 公共头部 -->
  <AppHeader></AppHeader>
  <!-- 公共头部 - 吸顶 -->
  <AppHeaderSticky></AppHeaderSticky>
  <div class="main">
    <!-- 二级路由显示区域 -->
    <router-view></router-view>
  </div>
  <!-- 公共底部 -->
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from '@/components/app-header.vue'
import AppTopnav from '@/components/app-topnav.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  components: { AppHeader, AppTopnav, AppFooter, AppHeaderSticky },
  name: 'xtx-layout',
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style lang="less" scoped>
// .main{
//   height: 500px;
// }
</style>
