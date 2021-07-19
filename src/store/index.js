// 同理，解构出创建Vuex仓库的函数
import { createStore } from 'vuex'

// 引入vuex子模块
import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'

export default createStore({
  // 存放数据的
  state: {
  },
  // 修改数据
  mutations: {
  },
  // 异步修改数据
  actions: {
  },
  // 模块
  modules: {
    user,
    cart,
    category
  },
  // Vuex的计算属性
  getters: {
  }
})
