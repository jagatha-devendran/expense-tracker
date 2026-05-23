<script lang="ts">
  import { getAllExpense } from "$lib/services/expenses";
  import { onMount } from 'svelte';
  import type { Expense } from "$lib/models/Expense";

  let getAllExpenseMap = $state(new Map<string, Expense[]>());

  onMount(async () => {
    getAllExpenseMap = await getAllExpense();		        
  });

  function formatPrice(price: any) {
    const num = typeof price === 'number' ? price : parseFloat(price);
    return isNaN(num) ? '0.00' : num.toFixed(2);
  }
</script>

<h1>History</h1>
<h4 class="description">
  Tracking your spending across all accounts. Review past logs and manage your budget efficiently.
</h4>

<div class="history-list">
    {#each Array.from(getAllExpenseMap.entries()) as [date, expenses]}
        <h5 class="date-header">{date}</h5>
        {#each expenses as item}
            <div class="expense-card">
                <div class="expense-info">            
                    <h3>{item.name}</h3>
                    {#if item.description}
                        <p>{item.description}</p>
                    {/if}
                </div>
                <div class="expense-amount">
                    <h4>-${formatPrice(item.price)}</h4>
                </div>
            </div>
        {/each}
    {/each}
</div>

<style>
    h1 {
        font-size: 40px;
        font-weight: 800;
        margin-bottom: 8px;
        color: #181C20;
    }

    .description {
        font-size: 16px;
        color: #30628C;
        opacity: 0.7;
        font-weight: 400;
        margin-bottom: 32px;
        line-height: 1.5;
    }

    .date-header {
        color: #797584;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        margin: 24px 0 12px;
        letter-spacing: 0.5px;
    }

    .expense-card {
        background-color: #fff;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    }

    .expense-info h3 {
        font-size: 16px;
        font-weight: 700;
        color: #181C20;
        margin-bottom: 4px;
    }

    .expense-info p {
        font-size: 14px;
        color: #797584;
    }

    .expense-amount h4 {
        color: #6349C0;
        font-size: 18px;
        font-weight: 800;
    }
</style>
