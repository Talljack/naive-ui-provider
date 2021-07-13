import { createRouter, createWebHistory } from 'vue-router'
import Home from '../container/home/Home.vue'

const router = createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home,
		}
	]
})

export default router