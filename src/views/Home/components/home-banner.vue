<template>
  <div class="home-banner">
    <XtxCarousel :banners="sliders" autoplay/>
  </div>
</template>
<script>
import { getBanners } from '@/api/home'
import { ref } from 'vue'
export default {
  name: 'HomeBanner',
  setup () {
    const sliders = ref([])
    getBanners().then((res) => {
      sliders.value = res.result
    })
    return { sliders }
  }
}
</script>
<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  .xtx-carousel {
    ::v-deep .carousel-btn.prev {
      left: 270px;
    }
    ::v-deep .carousel-indicator {
      padding-left: 250px;
    }
  }
}
</style>
