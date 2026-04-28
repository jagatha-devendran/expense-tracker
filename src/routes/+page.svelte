<script>
	import BalanceCard from "./../components/BalanceCard.svelte";
	import MonthlyBudgetCard from "./../components/MonthlyBudgetCard.svelte";
	import SavingCard from "./../components/SavingCard.svelte";
	import RecentExpenseCard from "./../components/RecentExpenseCard.svelte";
	import BottomNavBar from "./../components/BottomNavBar.svelte";
</script>

<BalanceCard />
<div class="pad"></div>
<div class="flex-card">
	<MonthlyBudgetCard />
	<SavingCard />
</div>
<div class="pad"></div>
<div class="flex-text">
	<div class="recent">Recent Expenses</div>
	<div class="see-all">See All</div>
</div>
<RecentExpenseCard icon="src/lib/assets/petrol_bunk.png" spent_for="Fuel & Gas" day_date="Yesterday" place="Shell Station" amt_spent = 65.00 category="UTILITY"/>
<BottomNavBar />

<style>
	.pad{
		padding: 15px;
	}
	.flex-card{
		display: flex;
		justify-content: space-around;
	}
	.flex-text{
		font-family: "Plus Jakarta Sans";
		display: flex;
		justify-content: space-between;
		margin: 10px;
	}
	.recent{
		font-size: 20px;
		font-weight: 800;
	}
	.see-all{
		color: #6349C0;
		font-size: 14px;
		font-weight: 600;
	}
</style>