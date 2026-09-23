<script lang="ts">
  import { onMount } from "svelte";
  import BalanceCard from "$lib/components/BalanceCard.svelte";
  import MonthlyBudgetCard from "$lib/components/MonthlyBudgetCard.svelte";
  import SavingCard from "$lib/components/SavingCard.svelte";
  import RecentExpenseCard from "$lib/components/RecentExpenseCard.svelte";
  import petrol_bunk from "$lib/assets/petrol_bunk.png";
  import { apiData, expenses } from "$lib/store";
  import TopBar from "$lib/components/TopBar.svelte";

  onMount(async () => {
    fetch("http://localhost:8080/home", {
      credentials: "include"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        apiData.set(data);        
      }).catch(error => {
        console.log(error);
        return [];
      });
  });

</script>

<TopBar />

<BalanceCard />

<div class="section-spacer"></div>

<div class="stats-grid">
  <MonthlyBudgetCard />
  <SavingCard />
</div>

<div class="section-spacer"></div>

<div class="section-header">
  <h2 class="section-title">Today's Expenses</h2>
  <a href="/history" class="see-all-link">See All</a>
</div>

{#if $expenses.length > 0}
  <div class="expense-list">
    {#each $expenses as expense}
      <RecentExpenseCard
        icon={petrol_bunk} 
        spent_for={expense.name}
        day_date="Today"
        place={expense.description || "No description"}
        amt_spent={expense.price}
        category={expense.category || "OTHER"}
      />
    {/each}
  </div>
{:else}
  <div class="empty-state">
    <p>No expenses recorded for today.</p>
    <a href="/addExpense" class="add-btn">Add Your First Expense</a>
  </div>
{/if}

<style>
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
    color: #181C20;
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
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
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

