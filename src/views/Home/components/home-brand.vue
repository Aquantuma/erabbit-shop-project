<template>
  <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
    <template v-slot:right>
      <a
        href="javascript:;"
        class="iconfont icon-angle-left prev"
        :class="{ disabled: currIdx === 0 ? true : false }"
        @click="currIdx = 0"
      ></a>
      <a
        href="javascript:;"
        class="iconfont icon-angle-right next"
        :class="{ disabled: currIdx === 1 ? true : false }"
        @click="currIdx = 1"
      ></a>
    </template>
    <div class="box" ref="target">
      <Transition name="fade">
        <ul
          class="list"
          :style="{ transform: `translateX(${currIdx === 1 ? '-50%' : 0})` }"
          v-if="result.length"
        >
          <li v-for="item in result" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="" />
            </RouterLink>
          </li>
        </ul>
        <div v-else class="skeleton">
          <XtxSkeleton
            class="item"
            v-for="i in 5"
            :key="i"
            animated
            bg="#e4e4e4"
            width="240px"
            height="305px"
          ></XtxSkeleton>
        </div>
      </Transition>
    </div>
  </HomePanel>
</template>

<script>
import { ref } from 'vue'
import HomePanel from './home-panel'
import { findBrand } from '@/api/home'
import { lazyLoadFn } from '@/hooks/index'
export default {
  name: 'HomeBrand',
  components: { HomePanel },
  setup () {
    const currIdx = ref(0)
    const { result, target } = lazyLoadFn(findBrand)
    return { result, target, currIdx }
  }
}
</script>

<style scoped lang='less'>
.home-panel {
  background: #f5f5f5;
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px;
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
  .skeleton {
    width: 100%;
    display: flex;
    .item {
      margin-right: 10px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}
</style>
