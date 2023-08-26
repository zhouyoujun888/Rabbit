import { createApp } from 'vue'
//引入初始化样式文件
import '@/styles/common.scss'

import ElementPlus from 'element-plus'
// import './assets/main.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import { lazyPlugin } from "@/directives/index";


const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(lazyPlugin)




app.mount('#app')
