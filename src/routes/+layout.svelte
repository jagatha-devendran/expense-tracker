<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import BottomNavBar from '$lib/components/BottomNavBar.svelte';
	import { page } from '$app/stores';

	let { children } = $props();

	let isAuthPage = $derived(
		$page.url.pathname.startsWith('/login') || $page.url.pathname.startsWith('/signup')
	);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- <main class:auth-layout={isAuthPage}> -->
 <main class={isAuthPage ? 'auth-layout' : ''}>
	{@render children()}
</main>

{#if !isAuthPage}
	<BottomNavBar />
{/if}

<style>
	:global(body) {
		background-color: #F7F9FE;
		font-family: 'Plus Jakarta Sans', sans-serif;
		margin: 0;
		padding: 0;
	}

	main {
		padding: 20px;
		padding-bottom: 100px; /* Space for BottomNavBar */
		max-width: 800px;
		margin: 0 auto;
	}

	main.auth-layout {
		padding-bottom: 40px;
	}
</style>
