<template>
  <!-- 顶部通栏布局 -->
  <AppTopnav></AppTopnav>
  <!-- 公共头部 -->
  <AppHeader></AppHeader>
  <div>
    main 主体 - 可以替换为首页，分类页，详情页
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
export default {
  components: { AppHeader, AppTopnav, AppFooter },
  name: 'xtx-layout'
}
</script>

<style>
</style>
