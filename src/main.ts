import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './images/reset.css' // 全局样式
import {createPinia} from 'pinia'
import Vant from 'vant';
import 'vant/lib/index.css'

const store = createPinia()
const app = createApp(App)
// 全局过滤器
app.config.globalProperties.$filters = {
    prefix(url: string) {
      if (url && url.startsWith('http')) {
        return url
      } else {
        url = `http://backend-api-01.newbee.ltd${url}`
        return url
      }
    }
  }
app
.use(Vant)
.use(router)
.use(store)
.mount('#app')

