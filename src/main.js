import App from './App.vue'

import { createApp } from 'vue'
import pinia from "./store/index"

import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.use(pinia)

registerPlugins(app)

app.mount('#app')