import { createApp } from 'vue'
import naiveUI from 'naive-ui'
import router from './router/router'
import Provider from './components/Provider.vue'

createApp(Provider).use(router).use(naiveUI).mount('#app')
