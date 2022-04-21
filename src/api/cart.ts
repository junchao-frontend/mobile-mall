import axios from '../http/index'
import { AxiosPromise } from 'axios'
import {ResponseData} from './config'
export const addCart = (data: any): AxiosPromise<ResponseData> => {
    return axios.request({
        url: '/shop-cart',
        method: 'POST',
        data
    })
}
export const modifyCart = (data: any): AxiosPromise<ResponseData> => {
    return axios.request({
        url: '/shop-cart',
        method: 'PUT',
        data
    })
}
export const getCart = (params: any): AxiosPromise<ResponseData> => {
    return axios.request({
        url: '/shop-cart',
        method: 'GET',
        params
    })
}
export const deleteCartItem = (id: any): AxiosPromise<ResponseData> => {
    return axios.request({
        url: `/shop-cart/${id}`,
        method: 'delete',
    })
}
// export function addCart(params) {
//   return axios.post('/shop-cart', params);
// }

// export function modifyCart(params) {
//   return axios.put('/shop-cart', params);
// }

// export function getCart(params) {
//   return axios.get('/shop-cart', { params });
// }

// export function deleteCartItem(id) {
//   return axios.delete(`/shop-cart/${id}`);
// }

// export function getByCartItemIds(params) {
//   return axios.get('/shop-cart/settle', { params });
// }