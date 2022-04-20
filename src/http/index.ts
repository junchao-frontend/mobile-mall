import axios from "axios";
import { Toast } from 'vant'
import router from '../router/index'
const request = axios.create({
    baseURL: 'http://backend-api-01.newbee.ltd/api/v1/',
    timeout: 2000
})

request.interceptors.request.use(config => {
    config.headers = config.headers || {}
    config.headers.token = sessionStorage.getItem('token') || ''
    return config
})
request.interceptors.response.use((res) => {
    if (typeof res.data !== 'object') {
        Toast.fail('服务端异常！')
        return Promise.reject(res)
    }
    if (res.data.resultCode != 200) {
        if (res.data.message) Toast.fail(res.data.message)
        if (res.data.resultCode == 416) {
            router.push({ path: '/login' })
        }
        return Promise.reject(res.data)
    }

    return res.data
}, (error) => {
    // return Promise.reject(new Error('faile'))
})
export default request