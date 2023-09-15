<script setup>
const { data: posts } = await useAsyncData('latest-posts', () =>
	queryContent('/blog').sort({ data: 1 }).limit(3).find()
);
</script>

<template>
	<section>
		<h1 class="text-5xl font-bold mt-20">👋🏻 Hello, I'm Dan Vegas!</h1>
		<p class="text-base text-gray-900 p-2 italic">
			Spring Developer Advocate at VMware
		</p>
	</section>
	<section class="flex flex-col md:flex-row">
		<div class="md:w-3/4">
			<h2 class="text-3xl font-bold mt-8">My Story</h2>
			<p class="text-lg py-2">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui fugiat
				iusto maiores. Rem debitis fuga natus adipisci ab magnam maiores labore
				mollitia deleniti quae?
			</p>
			<p class="text-lg py-2">
				Lorizzle ipsum dolizzle sit tellivizzle, consectetizzle adipiscing elit.
				Crackalackin dang velizzle, aliquet volutpizzle, suscipizzle uhuh ...
				yih!, boofron vizzle, mah nizzle. Pellentesque mammasay mammasa mamma oo
				sa tortor. Sizzle erizzle. Go to hizzle izzle dolizzle ma nizzle turpis
				tempizzle away. Maurizzle pellentesque nibh fo shizzle shizzlin dizzle.
				.
			</p>
			<p class="text-lg py-2">
				Etiam a magna sed augue gizzle accumsizzle. Aenizzle owned est. Vivamus
				ass dolizzle, viverra vitae, shizzlin dizzle fo shizzle, dawg izzle,
				owned. Dope sheezy ipsum ghetto izzle faucibus orci luctus izzle rizzle
				posuere break it down Curae; Donec dolor. Dang sheezy. Maecenizzle
				gangsta blandizzle quam. Crazy rutrizzle owned ghetto. Sizzle
				facilisizzle. Shizzlin dizzle sem nulla, venenatizzle eu, we gonna chung
				vel, blandizzle bizzle, magna
			</p>
		</div>
		<img
			src="~/assets/images/danvega-avatar.png"
			class="w-1/2 md:max-w-sm p-8 mx-auto"
		/>
	</section>
	<section>
		<h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
		<div class="grid md:grid-cols-3 pt-8 gap-5">
			<Post :posts="posts" />
		</div>
	</section>
	<button class="btn flex">
		<i class="material-icons mr-2">add_shopping_cart</i>
		<span>Add to cart</span>
	</button>
</template>
