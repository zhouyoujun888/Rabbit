import httpInstance from '@/utils/http.js'
export function getBannerAPI () {
  return httpInstance({
    url:'/home/banner'
  })
}

export const getNewApi = () => {
  return httpInstance({
    url:'/home/new'
  })
}


export const getHotApi = () => {
  return httpInstance({
    url:'/home/hot'
  })
}