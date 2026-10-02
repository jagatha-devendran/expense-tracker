<script lang="ts">
	import { goto } from '$app/navigation';
	import { handleLogout } from '$lib/utils/clientApi';
	import { onMount } from 'svelte';

	let email = $state(typeof window !== 'undefined' ? localStorage.getItem('email') || '' : '');
	

	onMount(() => {
		email = localStorage.getItem('email') || '';
	});

	interface Props {
		name?: string;
		onLogout?: () => void;
		onSettings?: () => void;
	}

	let {
		name = 'User',
		onLogout = () => handleLogout(),
		onSettings = () => {
			goto('/settings');
		}
	}: Props = $props();
</script>

<div class="profile-dropdown">
	<div class="profile-header">
		<div class="avatar">
			{name.charAt(0).toUpperCase()}
		</div>

		<div class="user-info">
			<div class="name">{name}</div>
			<div class="email">{email}</div>
		</div>
	</div>

	<div class="divider"></div>

	<button class="menu-item" onclick={onSettings}>
		<span class="material-symbols-outlined">settings</span>
		<span>Settings</span>
	</button>

	<div class="divider"></div>

	<button onclick={onLogout} class="menu-item logout">
		<span class="material-symbols-outlined">logout</span>
		<span>Logout</span>
	</button>
</div>

<style>
	@keyframes dropdownFadeIn {
		from {
			opacity: 0;
			transform: translateY(-8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.profile-dropdown {
		position: absolute;
		top: calc(100% + 8px);
		right: 0;
		width: 280px;
		padding: 12px;
		background: white;
		border-radius: 16px;
		box-shadow: 0 10px 35px rgba(0, 0, 0, 0.12);
		z-index: 1000;
		animation: dropdownFadeIn 0.15s ease-out;
	}

	.profile-header {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 10px;
	}

	.avatar {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		background: #e9ddff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		font-size: 18px;
	}

	.user-info {
		min-width: 0;
	}

	.name {
		font-weight: 600;
	}

	.email {
		font-size: 13px;
		color: #777;
		overflow: hidden;
		/* text-overflow: ellipsis; */
	}

	.divider {
		height: 1px;
		background: #eee;
		margin: 8px 0;
	}

	.menu-item {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 11px 10px;
		border: none;
		background: transparent;
		border-radius: 10px;
		cursor: pointer;
		text-align: left;
		font-size: 14px;
	}

	.menu-item:hover {
		background: #f3edff;
	}

	.logout {
		color: #e53935;
	}

	.logout:hover {
		background: #fff0f0;
	}
</style>
