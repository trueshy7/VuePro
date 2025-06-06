import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import axios from 'axios';
import App from './App.vue'
import router from './router/index.js'




const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

axios.defaults.baseURL = 'http://localhost:80'
app.config.globalProperties.$axios = axios

app.use(ElementPlus)
app.use(router)
app.mount('#app')