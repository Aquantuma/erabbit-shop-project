import request from '@/utils/request'

// 获取首页轮播banner图
export const getBanners = () => {
  return request('/home/banner', 'get')
}

// 首页-新鲜好物
export const findNew = () => {
  return request('/home/new', 'get')
}

// 首页-人气推荐
export const findHot = () => {
  return request('home/hot', 'get')
}
