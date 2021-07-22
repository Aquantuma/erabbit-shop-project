import request from '@/utils/request'

// 获取全部分类
export const getAllCategories = () => {
  return request('/home/category/head', 'get')
}

// 获取热门品牌数据
export const getHotBrands = (limit) => {
  return request('/home/brand', 'get', { limit })
}
