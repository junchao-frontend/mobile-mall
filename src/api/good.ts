import axios from '../http/index'
import { AxiosPromise } from 'axios'
import {ResponseData} from './config'
export const getDetail = (id: any): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `/goods/detail/${id}`,
        method: 'GET',
    })
}
// export function getDetail(id) {
//     return axios.get(`/goods/detail/${id}`);
//   }
  
//   export function getCategory() {
//     return axios.get('/categories');
//   }
  
//   export function search(params) {
//     return axios.get('/search', { params });
//   }