import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/container/home/Home.vue'
import Request from '@/container/request/Request.vue'
import Message from '@/container/message/Message.vue'
import Dialog from '@/container/dialog/Dialog.vue'
import Notification from '@/container/notification/Notification.vue'
import LoadingBar from '@/container/loadingBar/LoadingBar.vue'

const router = createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home,
		},
		{
			path: '/request',
			component: Request,
		},
		{
			path: '/message',
			component: Message,
		},
		{
			path: '/dialog',
			component: Dialog,
		},
		{
			path: '/notification',
			component: Notification,
		},
		{
			path: '/loadingBar',
			component: LoadingBar,
		},
	],
})

export default router
