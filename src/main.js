import router from './router'
import { createApp } from 'vue'
import App from './App.vue'


import './app.module.css'

createApp(App).use(router).mount('#app')
