import axios from '../http/index'
import { AxiosPromise } from 'axios'
import {ResponseData} from './config'
// 获取首页轮播图, 新品等数据
export const getHome = (params: any) :AxiosPromise<ResponseData> => {
    return axios.request({
        url: '/index-infos',
        method: 'GET',
        params
    })
}