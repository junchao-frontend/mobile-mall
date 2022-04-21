import axios from '../http/index'
import { AxiosPromise } from 'axios'
import {ResponseData} from './config'
interface loginInt{
    loginName: string,
    passwordMd5: string
}
export const login = (data: loginInt): AxiosPromise<ResponseData> => {
    return axios.request({
        url: '/user/login',
        method: 'POST',
        data
    })
}
// export function getUserInfo() {
//     return axios.get('/user/info');
//   }
  
//   export function EditUserInfo(params) {
//     return axios.put('/user/info', params);
//   }
  
//   export function login(params) {
//     return axios.post('/user/login', params);
//   }
  
//   export function logout() {
//     return axios.post('/user/logout')
//   }
  
//   export function register(params) {
//     return axios.post('/user/register', params);
//   }