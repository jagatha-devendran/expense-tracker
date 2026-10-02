<script lang="ts">
	import { saveSettings } from '$lib/utils/clientApi';
	import { onMount } from 'svelte';
	import MonthlyIncomeCard from './MonthlyIncomeCard.svelte';
	import MonthlyPlan from './MonthlyPlan.svelte';
	import { getDetails } from '$lib/services/expenses';

	let income = $state(0);
	let saving = $state(0);
	let isSaving = $state(false);
	let feedbackMessage = $state('');
	let feedbackType = $state<'success' | 'error' | ''>('');

	onMount(async () => {
		const userDetails = await getDetails();
		income = userDetails?.income ?? 0;
		saving = userDetails?.savings ?? 0;
	});

	function onIncomeChange(value: string) {
		income = Number(value);
	}

	function onSavingChange(value: string) {
		saving = Number(value);
	}

	async function onSave() {
		isSaving = true;
		feedbackMessage = '';
		feedbackType = '';
		try {
			await saveSettings(income, saving);
			feedbackType = 'success';
			feedbackMessage = 'Settings saved successfully!';
			setTimeout(() => {
				feedbackMessage = '';
			}, 3000);
		} catch (err: unknown) {
			feedbackType = 'error';
			const error = err as Error;
			feedbackMessage = error?.message || 'Failed to save settings.';
		} finally {
			isSaving = false;
		}
	}
</script>

<main>
	<div class="heading">
		<div class="left-header-content">
			<div class="align">
				<div class="img-container">
					<span class="material-symbols-outlined">Settings</span>
				</div>
				<h1>Set up your monthly plan</h1>
			</div>
			<h4 class="font head-description">
				These values will be used to calculate your dashboard and help you
				<br />track your spending, savings and balance.
			</h4>
		</div>

		<!-- <div class="right-container">
        <span class="material-symbols-outlined">calendar_today</span>
        <h6>September 2026</h6>
        <span class="material-symbols-outlined">
            arrow_drop_down
            </span>
    </div> -->
	</div>
	<div class="cards">
		<MonthlyIncomeCard
			onValueChange={onIncomeChange}
			icon_name="account_balance_wallet"
			title="Monthly Income"
			label="Enter your monthly salary"
			description="Your monthly income"
		/>
		<MonthlyIncomeCard
			onValueChange={onSavingChange}
			icon_name="savings"
			title="Monthly Saving Goal"
			label="Set how much you want to save"
			description="Amount you want to save each month"
		/>
	</div>
	<br /><br />
	<MonthlyPlan {income} savingGoal={saving} available={income - saving} />
	<div class="save-section">
		{#if feedbackMessage}
			<div class="feedback {feedbackType}">
				{feedbackMessage}
			</div>
		{/if}
		<button class="save-button" onclick={onSave} disabled={isSaving}>
			<span class="material-symbols-outlined">{isSaving ? 'sync' : 'save'}</span>
			{isSaving ? 'Saving...' : 'Save Settings'}
		</button>

		<div class="note">
			<span class="material-symbols-outlined">info</span>
			<span>You can change these any time in Settings</span>
		</div>
	</div>
</main>

<style>
	.save-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 30px;
	}

	.feedback {
		width: 465px;
		padding: 12px 16px;
		border-radius: 8px;
		font-size: 14px;
		font-weight: 600;
		margin-bottom: 12px;
		box-sizing: border-box;
		text-align: center;
	}

	.feedback.success {
		background-color: #e6f4ea;
		color: #137333;
		border: 1px solid #ceead6;
	}

	.feedback.error {
		background-color: #fce8e6;
		color: #c5221f;
		border: 1px solid #fad2cf;
	}

	.save-button {
		width: 465px;
		height: 54px;
		border: none;
		border-radius: 8px;
		background: #6349c0;
		color: white;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;

		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
	}

	.save-button:hover {
		background: #553db0;
	}

	.save-button .material-symbols-outlined {
		color: white;
		font-size: 22px;
	}

	.note {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-top: 12px;

		color: #8a91a5;
		font-size: 13px;
	}

	.note .material-symbols-outlined {
		font-size: 18px;
		color: #8a91a5;
	}

	main {
		/* padding-top: 10px; */
		padding-left: 30px;
		padding-right: 50px;
		width: 100%;
		background-color: #f7f8fc;
	}
	.heading {
		display: flex;
		justify-content: space-between;
		width: 100%;
		/* align-items: center; */
	}
	.align {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 0px;
	}
	h1 {
		font-size: 30px;
		margin-top: 0px;
		margin-bottom: 0px;
	}
	h4 {
		font-size: 16px;
		color: #30628c;
		opacity: 0.7;
		font-weight: 400;
		margin-top: 10px;
	}

	.material-symbols-outlined {
		font-variation-settings:
			'FILL' 0,
			'wght' 400,
			'GRAD' 0,
			'opsz' 24;
		color: #6349c0;
	}
	.img-container {
		background-color: #f1f4f9;
		height: 48px;
		width: 48px;
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* .right-container{
        width: 190px;
        height: 38px;
        padding: 10px 16px;
        border-radius: 9999px;
        display: flex;
        background-color:  #ffffff;
        box-shadow: inset 0 -3em 3em rgb(235 240 249 / 90%);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    } */

	.cards {
		display: flex;
		gap: 20px;
	}
</style>
