<script lang="ts">
	import ProfileDropdown from './ProfileDropdown.svelte';
	import { handleLogout } from '$lib/utils/clientApi';
	import logo from '$lib/assets/logo.png';
	import { goto } from '$app/navigation';

	let username = $state(
		typeof window !== 'undefined' ? localStorage.getItem('username') || 'User' : 'User'
	);
	let showProfile = $state(false);
	let profileContainer = $state<HTMLElement | null>(null);

	function toggleProfile() {
		showProfile = !showProfile;
	}

	function handleClickOutside(event: MouseEvent) {
		if (showProfile && profileContainer && !profileContainer.contains(event.target as Node)) {
			showProfile = false;
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			showProfile = false;
		}
	}
</script>

<svelte:window onclick={handleClickOutside} onkeydown={handleKeydown} />

<header>
	<div class="title-icon">
		<img src={logo} alt="expense_tracker" class="img-align" />
		<h3>Expense Tracker</h3>
	</div>

	<div class="profile-container" bind:this={profileContainer}>
		<button
			class="profile"
			onclick={toggleProfile}
			type="button"
			aria-expanded={showProfile}
			aria-haspopup="true"
		>
			<div class="circle-container">
				<h3 class="text">{username?.charAt(0).toUpperCase()}</h3>
			</div>
			<p>{username}</p>
			<span class="material-symbols-outlined">stat_minus_1</span>
		</button>

		{#if showProfile}
		<ProfileDropdown
		name={username}
		onSettings={() => {
			showProfile = false;
			goto('/settings');
		}}
		onLogout={async () => {
			showProfile = false;
			await handleLogout();
		}}
	/>
		{/if}
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-right: 20px;
		/* position: absolute;
    z-index: 1;
    width: 100%;
    left: 0px;
    top: 0px; */
	}
	.img-align {
		width: 90px;
		height: 90px;
		object-fit: contain;
		/* margin: 0px;
  padding: 0px;
  height: 100px;
  width: 100px; */
	}
	/* .color{
  color: #6349C0
} */
	.profile-container {
		position: relative;
	}

	.title-icon {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* gap: 5px; */
	}
	.profile {
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
	}
	.circle-container {
		width: 37px;
		height: 37px;
		background-color: #7f5ef7;
		border-radius: 50%;
		margin-right: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.text {
		color: aliceblue;
		font-size: 16px;
	}
	p {
		font-size: 14px;
		font-weight: 600;
	}
	.material-symbols-outlined {
		font-variation-settings:
			'FILL' 0,
			'wght' 400,
			'GRAD' 0,
			'opsz' 24;
	}
	button {
		border: none;
		background-color: aliceblue;
	}
</style>
