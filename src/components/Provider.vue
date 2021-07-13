<template>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NConfigProvider, NMessageProvider, NDialogProvider, NNotificationProvider, NLoadingBarProvider } from 'naive-ui'

export default defineComponent({
  name: 'App',
  components: { NConfigProvider, NMessageProvider, NDialogProvider, NNotificationProvider, NLoadingBarProvider }
})
</script>
