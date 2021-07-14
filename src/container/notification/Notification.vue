<template>
  <div>
    <n-h3>Nofitication</n-h3>
    <n-button type="primary" @click="handleShowNotification">
      useNotification
    </n-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNotification } from 'naive-ui'

export default defineComponent({
	name: 'Message',
	setup () {
		const notification = useNotification()
		const handleShowNotification = () => {
			notification.success({
				content: 'Will be success',
				meta: 'I think so',
			})
		}
		return {
			handleShowNotification,
		}
	},
})
</script>
