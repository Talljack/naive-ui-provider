<template>
  <n-layout has-sider class="app-layout" position="absolute">
    <n-layout-sider
      position="absolute"
      collapse-mode="transform"
      :collapsed-width="0"
      :width="280"
      :collapsed="collapsed"
      class="app-layout-sider"
      show-trigger="bar"
      style="border-top-right-radius: 16px;"
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <span class="app-layout-sider__title">
        How to use provider
      </span>
      <n-menu
        :value="activeName"
        :options="layoutOptions"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        @update:value="handleMenuSelect"
      />
    </n-layout-sider>
    <n-layout
      position="absolute"
      style="min-width:1080px; transition: all 0.3s;"
      :style="{ left: collapsed ? '10px' : '280px' }"
    >
      <n-layout-header bordered>
        <div style="padding-right: 40px;">
          <span style="margin-right: 20px;" @click="changeTheme">{{ theme === null ? '浅色' : '深色' }}</span>
          <span @click="changeLang">{{ showLang }}</span>
        </div>
      </n-layout-header>
      <n-layout-content
        class="layout-content"
        style="border-radius: 0 16px 16px;"
      >
        <div style="padding: 20px 40px;">
          <router-view v-slot="{ Component }">
            <component :is="Component" :key="$route.path" />
          </router-view>
        </div>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import {
	useMessage,
	useDialog,
	useNotification,
	useLoadingBar,
	MenuOption
} from 'naive-ui'
import { LAYOUT_ITEMS } from '@/constant/constant'
import { useRouter } from 'vue-router'
import useConfig from '@/hooks/useConfig'

export default defineComponent({
	name: 'App',
	setup () {
		const router = useRouter()
		// mount on window
		window.$message = useMessage()
		window.$dialog = useDialog()
		window.$notification = useNotification()
		window.$loadingBar = useLoadingBar()
		const layoutOptions = ref<MenuOption[]>(LAYOUT_ITEMS)
		const collapsed = ref(false)
		const activeName = ref('/')
		const handleMenuSelect = (value: string) => {
			activeName.value = value
			router.push({
				path: value,
			})
		}

		// config
		const { theme, lang, changeTheme, changeLang, } = useConfig()
		const showLang = computed(() => {
			return lang.value.name === 'zh-CN' ? '中文' : 'English'
		})
		return {
			layoutOptions,
			collapsed,
			activeName,
			theme,
			lang,
			showLang,
			changeTheme,
			changeLang,
			handleMenuSelect,
		}
	},
})
</script>

<style scoped>
.app-layout-sider__title {
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
  padding-left: 20px;
  height: 28px;
  color: #333;
  font-weight: 500;
  font-size: 20px;
}
.n-layout-header {
  padding: 24px;
  display: flex;
  justify-content: flex-end;
}
.n-layout-header span {
  cursor: pointer;
}
</style>
