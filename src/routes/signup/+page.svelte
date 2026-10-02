<script lang="ts">
	import { handleLogin, handleSignup } from '$lib/utils/clientApi';

	// Form variables for Sign Up
	let name = $state('');
	let email = $state('');
	let password = $state('');
	let isLoading = $state(false);
	let errorMessage = $state('');

	async function onSignup() {
		if (!name || !email || !password) {
			errorMessage = 'Please fill in all fields.';
			return;
		}
		errorMessage = '';
		isLoading = true;
		try {
			await handleSignup(name, email, password);
			await handleLogin(email, password);
		} catch (err: unknown) {
			const error = err as Error;
			errorMessage = error?.message || 'Failed to create account. Please try again.';
		} finally {
			isLoading = false;
		}
	}
</script>

<svelte:head>
	<title>Create Account - ExpenseTracker</title>
</svelte:head>

<div class="container">
	<h1>Create Account</h1>
	<p class="description">Start tracking your spending quickly and easily.</p>

	<!-- Sign Up Form Card -->
	<div class="card">
		{#if errorMessage}
			<div class="error-banner">
				{errorMessage}
			</div>
		{/if}

		<div class="input-group">
			<label for="name">NAME</label>
			<input id="name" type="text" bind:value={name} placeholder="Your full name" />
		</div>

		<div class="input-group">
			<label for="email">EMAIL</label>
			<input id="email" type="email" bind:value={email} placeholder="you@example.com" />
		</div>

		<div class="input-group">
			<label for="password">PASSWORD</label>
			<input id="password" type="password" bind:value={password} placeholder="••••••••" />
		</div>

		<button onclick={onSignup} class="submit-btn" disabled={isLoading}>
			{isLoading ? 'Creating Account...' : 'Create Account'}
		</button>
	</div>

	<!-- Link to Sign In page -->
	<p class="footer-text">
		Already have an account?
		<a href="/login" class="link">Sign In</a>
	</p>
</div>

<style>
	.container {
		max-width: 440px;
		margin: 40px auto;
	}

	h1 {
		font-size: 36px;
		font-weight: 800;
		color: #6349c0;
		margin-bottom: 8px;
	}

	.description {
		font-size: 16px;
		color: #30628c;
		opacity: 0.7;
		margin-bottom: 28px;
	}

	.error-banner {
		background-color: #ffeef0;
		color: #e03137;
		border: 1px solid #ffd1d5;
		padding: 10px 14px;
		border-radius: 8px;
		font-size: 14px;
		margin-bottom: 16px;
	}

	.card {
		background-color: white;
		padding: 28px;
		border-radius: 16px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
	}

	.input-group {
		margin-bottom: 20px;
	}

	label {
		display: block;
		font-size: 13px;
		font-weight: 700;
		color: #6349c0;
		margin-bottom: 8px;
	}

	input {
		width: 100%;
		box-sizing: border-box;
		padding: 14px 16px;
		font-size: 15px;
		border-radius: 10px;
		border: 1px solid #e2e8f0;
		background-color: #f1f4f9;
		outline: none;
		color: #181c20;
		font-family: inherit;
	}

	input:focus {
		border-color: #6349c0;
		background-color: white;
	}

	.submit-btn {
		width: 100%;
		background-color: #6349c0;
		color: white;
		border: none;
		padding: 16px;
		border-radius: 12px;
		font-size: 16px;
		font-weight: 800;
		cursor: pointer;
		margin-top: 10px;
		font-family: inherit;
		transition: background-color 0.2s;
	}

	.submit-btn:hover {
		background-color: #553bb3;
	}

	.footer-text {
		text-align: center;
		color: #797584;
		font-size: 14px;
		margin-top: 24px;
	}

	.link {
		color: #6349c0;
		font-weight: 700;
		text-decoration: none;
		margin-left: 4px;
	}

	.link:hover {
		text-decoration: underline;
	}
</style>
