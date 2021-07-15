import {
	enUS,
	zhCN,
	darkTheme,
	GlobalTheme
} from 'naive-ui'
import { ref } from 'vue'

const theme = ref<GlobalTheme | null>(null)
const lang = ref(zhCN)
export default () => {
	const changeTheme = () => {
		if (theme.value === null) {
			theme.value = darkTheme as GlobalTheme
		} else {
			theme.value = null
		}
	}
	const changeLang = () => {
		console.log('lang', lang.value)
		if (lang.value.name === 'zh-CN') {
			lang.value = enUS
		} else {
			lang.value = zhCN
		}
	}
	return {
		theme,
		lang,
		changeTheme,
		changeLang,
	}
}
