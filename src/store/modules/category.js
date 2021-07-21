import { getAllCategories } from '@/api/category'
import { topCategory } from '@/api/constants'
// 分类模块
export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合
      list: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    setList (state, data) {
      state.list = data
    }
  },
  actions: {
    async getList (store) {
      const { result } = await getAllCategories()
      store.commit('setList', result)
    }
  }
}
