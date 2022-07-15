import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

// 获取轮播图
// 0: pc(默认) / 1: android / 2: iphone / 3: ipad
export function getBanner(type) {
  return axios.get(`/banner?type=${type}`)
}