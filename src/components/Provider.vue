<template>
  <n-config-provider
    class="demo"
    :locale="lang"
    :theme="theme"
    :theme-overrides="themeOverrides"
  >
    <n-dialog-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-loading-bar-provider>
            <App />
          </n-loading-bar-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
	NConfigProvider,
	NMessageProvider,
	NDialogProvider,
	NNotificationProvider,
	NLoadingBarProvider,
	GlobalThemeOverrides
} from 'naive-ui'
import App from '../App.vue'
import useConfig from '@/hooks/useConfig'

const themeOverrides: GlobalThemeOverrides = {
	common: {
		primaryColor: '#4fb233',
		primaryColorHover: '#4fb233',
		fontSize: '16px',
		borderRadius: '16px',
	},

}

export default defineComponent({
	name: 'Provider',
	components: { App, NConfigProvider, NMessageProvider, NDialogProvider, NNotificationProvider, NLoadingBarProvider, },
	setup () {
		const { theme, lang, } = useConfig()
		return {
			theme,
			lang,
			themeOverrides,
		}
	},
})
</script>
