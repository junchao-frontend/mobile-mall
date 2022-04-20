import request from '../http/index'
// 获取首页轮播图, 新品等数据
export const getHome = (params: any) => {
    return request({
        url: '/index-infos',
        method: 'GET',
        params
    })
}