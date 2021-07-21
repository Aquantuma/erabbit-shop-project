<template>
  <div class="xtx-home-page">
    <h1>主页的内容<i class="iconfont icon-backtop"></i></h1>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'xtx-home-page',
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style lang="less" scoped>
h1 {
  background-color: @xtxColor;
  // 鼠标移入添加阴影
  .hoverShadow();
}
</style>
