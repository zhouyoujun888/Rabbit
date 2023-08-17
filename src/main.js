import { createApp } from 'vue'
import './styles/element/index.scss'
import ElementPlus from 'element-plus'
import './assets/main.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//测试接口函数
import { getCategory } from '@/apis/testAPI.js'
getCategory().then(res => {
  console.log(res);
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)


app.mount('#app')
