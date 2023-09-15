// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	modules: ['nuxt-icon', '@nuxt/content', '@nuxtjs/apollo'],
	content: {
		// https://content.nuxtjs.org/api/configuration
		highlight: {
			theme: 'nord',
			preload: ['ts', 'js', 'css', 'java', 'bash', 'vue'],
		},
	},
	apollo: {
		clients: {
			default: {
				httpEndpoint: 'https://api.spacex.land/graphql',
			},
		},
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
