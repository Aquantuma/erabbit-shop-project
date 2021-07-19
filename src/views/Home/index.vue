<template>
  <div class="xtx-home-page">
      <h1>主页的内容</h1>
  </div>
</template>

<script>
export default {
  name: 'xtx-home-page'
}
</script>

<style lang="less" scoped>
h1{
  background-color: @xtxColor;
  // 鼠标移入添加阴影
  .hoverShadow();
}
</style>
