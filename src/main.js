// 解构出创建Vue应用的函数
import { createApp } from 'vue'
// 导入根组件
import App from './App.vue'
// import App from '@/test/01-测试动画效果'
// import App from '@/test/02-检测目标元素的可见性'

// 导入路由
import router from './router'
// 导入Vuex
import store from './store'

// 导入normalize.css和公用样式
import 'normalize.css'
import '@/assets/styles/common.less'

// 导入封装的插件库
import plugins from './components/library'

// 创建Vue应用并使用Vuex和路由，然后挂载到#app中
createApp(App).use(store).use(router).use(plugins).mount('#app')
