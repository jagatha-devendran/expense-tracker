<script lang="ts">
	import { onMount } from 'svelte';
	import { BalanceCard, MonthlyBudgetCard, SavingCard, RecentExpenseCard } from '$lib/components';
	import petrol_bunk from '$lib/assets/petrol_bunk.png';
	import { expenses } from '$lib/store';
	import { getDetails, getHomeData } from '$lib/utils/clientApi';
	import { getThisMonthSpending } from '$lib/services/expenses';
	

	let showWelcome = $state(false);
	let savingGoal = $state(0);
	let income = $state(0)
	let incomeSpent : number = $state(0)
	let balance = $state(0)
	let available = $state(0)
	let remaining = $state(0)
	let percent = $state(0)

	function calculateBalance(){
		balance = income - incomeSpent
		available = income - savingGoal
		remaining = available - incomeSpent

		percent = Math.round((incomeSpent/available)*100)
	}


	onMount(async () => {
		try {
			await getHomeData();
			incomeSpent = await getThisMonthSpending() ?? 0;
			const details = await getDetails();
			if (details) {
				savingGoal = details.savings ?? 0;
				income = details.income ?? 0;
			}
			calculateBalance()
		} catch (error) {
			console.error('Failed to load dashboard data:', error);
		}

		if (sessionStorage.getItem('justLoggedIn') === 'true') {
			showWelcome = true;
			sessionStorage.removeItem('justLoggedIn');

			setTimeout(() => {
				showWelcome = false;
			}, 3500);
		}
	});
</script>

<main>
	<BalanceCard balance={balance.toLocaleString()}/>

	<div class="section-spacer"></div>

	<div class="stats-grid">
		<MonthlyBudgetCard spent_amount={incomeSpent} percent_used={percent} remaining_amt={remaining}/>
		<SavingCard save_amt={savingGoal} />
	</div>

	<div class="section-spacer"></div>

	<div class="section-header">
		<h2 class="section-title">Today's Expenses</h2>
		<a href="/history" class="see-all-link">See All</a>
	</div>

	{#if $expenses.length > 0}
		<div class="expense-list">
			{#each $expenses as expense, i (expense.id ?? i)}
				<RecentExpenseCard
					icon={petrol_bunk}
					spent_for={expense.name}
					day_date="Today"
					place={expense.description || 'No description'}
					amt_spent={expense.price}
					category={expense.category || 'OTHER'}
				/>
			{/each}
		</div>
	{:else}
		<div class="empty-state">
			<p>No expenses recorded for today.</p>
			<a href="/add-expense" class="add-btn">Add Your First Expense</a>
		</div>
	{/if}
</main>

{#if showWelcome}
	<div class="welcome-popup">👋 You have logged in, welcome aboard!</div>
{/if}

<!-- </div> -->

<style>
	.welcome-popup {
		position: fixed;
		top: 24px;
		right: 24px;
		background-color: #6349c0;
		color: #ffffff;
		padding: 14px 24px;
		border-radius: 12px;
		font-weight: 600;
		box-shadow: 0 4px 16px rgba(99, 73, 192, 0.3);
		z-index: 9999;
	}
	main {
		width: 100%;
		margin-right: 30px;
	}

	.section-spacer {
		height: 32px;
	}

	.stats-grid {
		display: flex;
		gap: 20px;
	}

	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 16px;
	}

	.section-title {
		font-size: 20px;
		font-weight: 800;
		color: #181c20;
		margin: 0;
	}

	.see-all-link {
		color: #6349c0;
		font-size: 14px;
		font-weight: 700;
		text-decoration: none;
	}

	.empty-state {
		background-color: #fff;
		padding: 40px;
		border-radius: 16px;
		text-align: center;
		color: #797584;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
	}

	.add-btn {
		display: inline-block;
		margin-top: 12px;
		color: #6349c0;
		font-weight: 700;
		text-decoration: none;
		border: 2px solid #6349c0;
		padding: 8px 16px;
		border-radius: 9999px;
		transition: all 0.2s;
	}

	.add-btn:hover {
		background-color: #6349c0;
		color: #fff;
	}

	@media (max-width: 768px) {
		.stats-grid {
			flex-direction: column;
		}
	}
</style>
