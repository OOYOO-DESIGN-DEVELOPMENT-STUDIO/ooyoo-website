// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	modules: ['nuxt-icon', '@nuxt/content'],
	content: {
		// https://content.nuxtjs.org/api/configuration
		highlight: {
			theme: 'nord',
			preload: ['ts', 'js', 'css', 'java', 'bash', 'vue'],
		},
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
