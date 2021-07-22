<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory></HomeCategory>
        <!-- 轮播图 -->
        <HomeBanner></HomeBanner>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBanner from './components/home-banner.vue'
import HomeCategory from './components/home-category.vue'
export default {
  name: 'PageHome',
  components: { HomeCategory, HomeBanner }
}
</script>

<style lang="less" scoped>
</style>
