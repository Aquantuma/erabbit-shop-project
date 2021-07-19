<template>
  <nav>公共顶部通栏</nav>
  <header>公共头部</header>
  <div>
      main 主体 - 可以替换为首页，分类页，详情页
      <!-- 二级路由显示区域 -->
      <router-view></router-view>
  </div>
  <footer></footer>
</template>

<script>
export default {
  name: 'xtx-layout'
}
</script>

<style>

</style>
