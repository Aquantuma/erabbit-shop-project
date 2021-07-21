// 解构出创建路由的函数
// createRouter           -   用于创建路由的
// createWebHashHistory   -   哈希路由模式
// createWebHistory       -   History模式
import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/views/Layout'
import Home from '@/views/Home'
import TopCategory from '@/views/Category/index'
import SubCategory from '@/views/Category/sub'
// 路由配置 - 映射关系表
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: 'category/:id',
        component: TopCategory
      },
      {
        path: 'category/sub/:id',
        component: SubCategory
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
