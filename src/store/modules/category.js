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
    },
    show (state, id) {
      const category = state.list.find(cate => cate.id === id)
      category.open = true
    },
    hide (state, id) {
      const category = state.list.find(cate => cate.id === id)
      category.open = false
    }
  },
  actions: {
    async getList (store) {
      let { result } = await getAllCategories()
      result = result.map(item => ({ ...item, open: false }))
      store.commit('setList', result)
    }
  }
}
