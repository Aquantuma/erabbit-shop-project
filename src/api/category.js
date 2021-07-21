import request from '@/utils/request'

export const getAllCategories = () => {
  return request('/home/category/head', 'get')
}
