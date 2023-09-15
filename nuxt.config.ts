// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	modules: ['nuxt-icon', '@nuxt/content', '@nuxtjs/apollo'],
	runtimeConfig: {
		githubToken: process.env.GITHUB_TOKEN,
	},
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
				tokenName: 'github-token',
				httpEndpoint: 'https://api.github.com/graphql',
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
