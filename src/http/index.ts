import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosResponse } from "axios";
import { Toast } from 'vant'
import router from '../router/index'
// const request = axios.create({
//     baseURL: 'http://backend-api-01.newbee.ltd/api/v1/',
//     timeout: 2000
// })
const config = {
    devApiBaseUrl: 'http://backend-api-01.newbee.ltd/api/v1/',
    proApiBaseUrl: ''
}
class HttpRequest {// 定义一个接口请求类，用于创建一个axios请求实例
    baseUrl: string;
    constructor(baseUrl: string = config.devApiBaseUrl) {// 这个类接收一个字符串参数，是接口请求的基本路径
        this.baseUrl = baseUrl;
    }
    public request(options: AxiosRequestConfig): AxiosPromise {// 我们实际调用接口的时候调用实例的这个方法，他返回一个AxiosPromise
        const instance: AxiosInstance = axios.create() // 这里使用axios.create方法创建一个axios实例，他是一个函数，同时这个函数包含多个属性
        options = this.mergeConfig(options) // 合并基础路径和每个接口单独传入的配置，比如url、参数等
        this.interceptors(instance, options.url) // 调用interceptors方法使拦截器生效
        return instance(options)  // 最后返回AxiosPromise
    }
    private interceptors(instance: AxiosInstance, url?: string) { // 定义这个函数用于添加全局请求和响应拦截逻辑
        // 在这里添加请求和响应拦截

        instance.interceptors.request.use((config: AxiosRequestConfig) => {
            // 接口请求的所有配置，都在这个config对象中，他的类型是AxiosRequestConfig，你可以看到他有哪些字段
            // 如果你要修改接口请求配置，需要修改 axios.defaults 上的字段值
            config.headers = config.headers || {}
            config.headers.token = sessionStorage.getItem('token') || ''
            return config
        },
            (error) => {
                return Promise.reject(error)
            })
        instance.interceptors.response.use((res: AxiosResponse) => {
            const { data } = res // res的类型是AxiosResponse<any>，包含六个字段，其中data是服务端返回的数据
            const { resultCode, message } = data // 通常服务端会将响应状态码、提示信息、数据等放到返回的数据中
            if (resultCode != 200) {
                if (message) Toast.fail(res.data.message)
                if (resultCode == 416) {
                    router.push({ path: '/login' })
                }
                return Promise.reject(res.data)
            }
            return res // 返回数据
        },
            (error) => { // 这里是遇到报错的回调
                return Promise.reject(error)
            })
    }
    private mergeConfig(options: AxiosRequestConfig): AxiosRequestConfig { // 这个方法用于合并基础路径配置和接口单独配置
        return Object.assign({ baseURL: this.baseUrl }, options);
    }

}
export default new HttpRequest()
// request.interceptors.request.use(config => {
//     config.headers = config.headers || {}
//     config.headers.token = sessionStorage.getItem('token') || ''
//     return config
// })
// request.interceptors.response.use((res) => {
//     if (typeof res.data !== 'object') {
//         Toast.fail('服务端异常！')
//         return Promise.reject(res)
//     }
//     if (res.data.resultCode != 200) {
//         if (res.data.message) Toast.fail(res.data.message)
//         if (res.data.resultCode == 416) {
//             router.push({ path: '/login' })
//         }
//         return Promise.reject(res.data)
//     }

//     return res.data
// }, (error) => {
//     // return Promise.reject(new Error('faile'))
// })
// export default request