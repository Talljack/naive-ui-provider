import { createApp } from 'vue'
import naiveUI from 'naive-ui'
import router from './router/router'
import App from './App.vue'

createApp(App).use(router).use(naiveUI).mount('#app')
