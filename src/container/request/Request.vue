<template>
  <div>
    <n-h3>
      Maybe you want use message in request
    </n-h3>
    <n-button type="primary" @click="handleRequest">
      request
    </n-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getMockInfo } from '../../Api/request'

export default defineComponent({
	name: 'Home',
	setup () {
		const handleRequest = async () => {
			await getMockInfo()
		}
		return {
			handleRequest,
		}
	},
})
</script>
