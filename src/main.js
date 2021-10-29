import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/reset.sass'
import '@/style/common.sass'

createApp(App).use(store).use(router).mount('#app')
