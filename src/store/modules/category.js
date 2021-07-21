import { getAllCategories } from '@/api/category'
// 分类模块
export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合
      list: []
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
