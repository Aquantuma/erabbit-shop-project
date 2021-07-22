// 定义vue全局插件（组件插件化）
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展

import XtxSkeleton from './xtx-skeleton'
import XtxCarousel from './xtx-carousel'
import XtxMore from './xtx-more'

export default {
  install (app) {
    // 在app上进行扩展，app提供component directive函数
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
  }
}
