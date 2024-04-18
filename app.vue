<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
	useSeoMeta({
		title: '个人博客',
		ogTitle: '我的神奇网站',
		description: '这是我的神奇网站，让我告诉你关于它的一切。',
		ogDescription: '这是我的神奇网站，让我告诉你关于它的一切。',
		ogImage: './public/img/网站log.jpg',
		twitterCard: 'player',
		keywords: '个人博客'
	})
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		color: black;
	}

	a:hover {
		color: black
	}
</style>