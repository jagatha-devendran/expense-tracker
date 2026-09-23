<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { apiData, expenses } from '$lib/store';

  onMount(async () => {
    try {
      const response = await fetch('http://localhost:8080/history', {
        method: 'GET',
        credentials: 'include', // Sends the jwt_token cookie
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 401) {
        console.warn('Unauthorized access. Redirecting to login...');
        goto('/login');
        return;
      }

      const data = await response.json();
      if (response.ok) {
        apiData.set(data);
      } else {
        console.error('Failed to fetch history:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
    {#each $expenses as expense, i}
        {#if (i == 0) || ($expenses[i-1].date != expense.date)}
        <h5 class="date-header">{expense.date}</h5>
        {/if }
            <div class="expense-card">
                <div class="expense-info">            
                    <h3>{expense.name}</h3>
                    {#if expense.description}
                        <p>{expense.description}</p>
                    {/if}
                </div>
                <div class="expense-amount">
                    <h4>-${formatPrice(expense.price)}</h4>
                </div>
            </div>

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
