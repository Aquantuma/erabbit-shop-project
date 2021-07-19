// 解构出创建路由的函数
// createRouter           -   用于创建路由的
// createWebHashHistory   -   哈希路由模式
// createWebHistory       -   History模式
import { createRouter, createWebHashHistory } from 'vue-router'

// 路由配置 - 映射关系表
const routes = [
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
