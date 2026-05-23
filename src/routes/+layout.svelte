<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import BottomNavBar from '$lib/components/BottomNavBar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
	{@render children()}
</main>
<BottomNavBar />

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
</style>
