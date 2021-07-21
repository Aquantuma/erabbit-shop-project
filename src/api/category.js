import request from '@/utils/request'

export const getAllCategories = () => {
  return request('/home/category/head', 'get')
}

export const getHotBrands = (limit) => {
  return request('/home/brand', 'get', { limit })
}
