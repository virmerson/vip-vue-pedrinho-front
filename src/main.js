import App from './App.vue'
import { createApp } from 'vue'
import pinia from "./store"
import router from './router'
import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.use(pinia)
app.use(router)

registerPlugins(app)

app.mount('#app')