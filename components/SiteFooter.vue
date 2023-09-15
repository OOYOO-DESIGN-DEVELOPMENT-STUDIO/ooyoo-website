<script setup>
const currentYear = new Date().getFullYear();

const links = [
	{
		name: 'GitHub',
		href: 'https://github.com',
		icon: 'entypo-social:github-with-circle',
	},
	{
		name: 'Twitter',
		href: 'https://twitter.com',
		icon: 'entypo-social:twitter',
	},
	{
		name: 'Facebook',
		href: 'https://facebook.com',
		icon: 'entypo-social:facebook',
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com',
		icon: 'entypo-social:linkedin-with-circle',
	},
	{
		name: 'Instagram',
		href: 'https://instagram.com',
		icon: 'entypo-social:instagram',
	},
];
</script>

<template>
	<footer class="bg-gray-800">
		<section
			class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-6 text-gray-300 flex flex-row justify-between"
		>
			<p class="flex items-center">
				&copy; OOYOO, LLC {{ currentYear }} | All Rights Reserved
			</p>
			<div class="flex flex-row justify-center gap-4 m-4">
				<a v-for="link in links" :key="link.name" :href="link.href">
					<Icon :name="link.icon" size="1.5rem" class="text-gray-300" />
				</a>
			</div>
		</section>
	</footer>
</template>
