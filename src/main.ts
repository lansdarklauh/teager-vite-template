import 'normalize.css/normalize.css'
import '@/assets/css/main.scss'
import { initSocket } from './socketio'
import "@/mock/index"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// app.config.globalProperties.$socket = initSocket()

app.use(createPinia())
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
