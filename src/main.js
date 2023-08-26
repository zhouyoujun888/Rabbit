import { createApp } from 'vue'
//引入初始化样式文件
import '@/styles/common.scss'

import ElementPlus from 'element-plus'
// import './assets/main.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import { useIntersectionObserver } from '@vueuse/core'


const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.directive("lazy-img", {
  mounted(el, binding) {
   useIntersectionObserver(
      el,
     ([{isIntersecting}]) => {
       if (isIntersecting) {
         el.src=binding.value
       }
      },
    )
  },
})


app.mount('#app')
