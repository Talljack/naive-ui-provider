<template>
  <div>
    <n-h3>LoadingBar</n-h3>
    <n-button type="primary" @click="handleShowLoadingBar">
      useLoadingBar
    </n-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { LoadingBarProviderInst, useLoadingBar } from 'naive-ui'

export default defineComponent({
	name: 'Message',
	setup () {
		const loadingBar = useLoadingBar() as LoadingBarProviderInst
		const handleShowLoadingBar = () => {
			loadingBar.start()
		}
		return {
			handleShowLoadingBar,
		}
	},
})
</script>
