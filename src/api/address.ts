import axios from '../http/index'
import { AxiosPromise } from 'axios'
import {ResponseData} from './config'
export const addAddress = (params: any):AxiosPromise<ResponseData> => {
    return axios.request({
        url: '/address',
        method: 'POST',
        params
    })
}
// export function EditAddress(params) {
//     return axios.put('/address', params);
//   }
  
//   export function DeleteAddress(id) {
//     return axios.delete(`/address/${id}`);
//   }
  
//   export function getDefaultAddress() {
//     return axios.get('/address/default');
//   }
  
//   export function getAddressList() {
//     return axios.get('/address', { pageNumber: 1, pageSize: 1000 })
//   }
  
//   export function getAddressDetail(id) {
//     return axios.get(`/address/${id}`)
//   }
  