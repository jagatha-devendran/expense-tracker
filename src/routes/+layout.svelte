<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';
	import SideNavBar from '$lib/components/SideNavBar.svelte';
	import TopBar from '$lib/components/TopBar.svelte';

	let { children } = $props();

	let isAuthPage = $derived(
		$page.url.pathname.startsWith('/login') || $page.url.pathname.startsWith('/signup')
	);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if !isAuthPage}
	<TopBar />
{/if}

<main class={isAuthPage ? 'auth-layout' : 'content'}>
	{#if !isAuthPage}
		<SideNavBar />
	{/if}
	{@render children()}
</main>


<style>
	:global(body) {
		background-color: #F7F9FE;
		font-family: 'Plus Jakarta Sans', sans-serif;
		margin: 0;
		padding: 0;
	}

	main {
		/* padding: 20px; */
		/* padding-bottom: 100px; Space for BottomNavBar */
		/* max-width: 800px; */
		margin-right: 20px;
		/* margin-top: 100px; */
	}
	.content{
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: row;
		gap: 20px;    
  }
	main.auth-layout {
		padding-bottom: 40px;
	}
</style>
