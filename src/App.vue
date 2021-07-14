<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useMessage, useDialog, useNotification, useLoadingBar, LoadingBarProviderInst } from 'naive-ui'

export default defineComponent({
	name: 'App',
	setup () {
		// mount on window
		window.$message = useMessage()
		window.$dialog = useDialog()
		window.$notification = useNotification()
		window.$loadingBar = useLoadingBar() as LoadingBarProviderInst
	},
})
</script>
