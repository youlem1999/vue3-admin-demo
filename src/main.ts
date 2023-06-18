import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import naive from 'naive-ui'
import router from "@/router";
import '@/styles/index.scss'
import pinia from './store/index.ts'



const app = createApp(App)
app.use(naive)
app.use(pinia)
app.use(router)
app.mount('#app')


