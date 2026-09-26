<script lang="ts">

  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  import { apiData, expenses } from '$lib/store';

  import DateHeader from '$lib/components/DateHeader.svelte';
  import ExpenseCard from '$lib/components/ExpenseCard.svelte';
  import DeleteExpenseModal from '$lib/components/DeleteExpenseModal.svelte';
  import { getAllExpense } from '$lib/utils/server';


  let showDeleteModal = $state(false);
  let selectedExpense = $state<any>(null);

    onMount(async () => {
    try {
      getAllExpense()
    } catch (error) {
      console.error('Error:', error);
    }
  });


  // -----------------------------
  // GET HISTORY
  // -----------------------------

  // onMount(async () => {

  //     try {

  //         const response = await fetch(
  //             'http://localhost:8080/history',
  //             {
  //                 method: 'GET',
  //                 credentials: 'include',

  //                 headers: {
  //                     'Content-Type': 'application/json'
  //                 }
  //             }
  //         );


  //         if (response.status === 401) {

  //             goto('/login');

  //             return;
  //         }


  //         const data = await response.json();


  //         if (response.ok) {

  //             apiData.set(data);

  //         } else {

  //             console.error(
  //                 'Failed to fetch history:',
  //                 data
  //             );

  //         }

  //     } catch (error) {

  //         console.error('Error:', error);

  //     }

  // });


  // // -----------------------------
  // // EDIT
  // // -----------------------------

  function editExpense(id: number) {

      // goto(`/addexpense?editId=${id}`);

  }


  // // -----------------------------
  // // OPEN DELETE POPUP
  // // -----------------------------

  function openDeleteModal(expense: any) {

      selectedExpense = expense;

      showDeleteModal = true;

  }


  // // -----------------------------
  // // CLOSE DELETE POPUP
  // // -----------------------------

  function closeDeleteModal() {

      showDeleteModal = false;

      selectedExpense = null;

  }


  // // -----------------------------
  // // DELETE
  // // -----------------------------

  async function deleteExpense() {

  //     if (!selectedExpense) return;


  //     try {

  //         const response = await fetch(
  //             `http://localhost:8080/expense/${selectedExpense.id}`,
  //             {
  //                 method: 'DELETE',
  //                 credentials: 'include'
  //             }
  //         );


  //         if (response.ok) {

  //             expenses.update((currentExpenses) =>
  //                 currentExpenses.filter(
  //                     (expense) =>
  //                         expense.id !== selectedExpense.id
  //                 )
  //             );


  //             closeDeleteModal();

  //         } else {

  //             console.error(
  //                 'Failed to delete expense'
  //             );

  //         }

  //     } catch (error) {

  //         console.error(
  //             'Error deleting expense:',
  //             error
  //         );

  //     }

  }

</script>


<main>

  <!-- HEADER -->

  <div class="page-header">

      <div class="history-icon">

          <span class="material-symbols-outlined">
              history
          </span>

      </div>


      <div>

          <h1>History</h1>

          <h4 class="description">
              Tracking your spending across all accounts.
              Review past logs and manage your budget efficiently.
          </h4>

      </div>

  </div>


  <!-- EXPENSES -->

  <div class="history-list">

      {#each $expenses as expense, i}

          {#if i === 0 || $expenses[i - 1].date !== expense.date}

              <DateHeader date={expense.date} />

          {/if}


          <ExpenseCard
              {expense}
              onEdit={editExpense}
              onDelete={openDeleteModal}
          />

      {/each}

  </div>

</main>


<!-- DELETE POPUP -->

{#if showDeleteModal}

  <DeleteExpenseModal
      expense={selectedExpense}
      onCancel={closeDeleteModal}
      onConfirm={deleteExpense}
  />

{/if}


<style>

  main {
      width: 100%;
      margin-left: 20px;
      margin-right: 20px;
      padding-bottom: 40px;
  }


  .page-header {
      display: flex;
      align-items: center;
      gap: 18px;
      margin-bottom: 32px;
  }


  .history-icon {
      width: 72px;
      height: 72px;

      border-radius: 20px;
      background: #f0ebff;

      display: flex;
      align-items: center;
      justify-content: center;
  }


  .history-icon .material-symbols-outlined {
      font-size: 40px;
      color: #6349c0;
  }


  h1 {
      font-size: 40px;
      font-weight: 800;

      margin: 0 0 5px;

      color: #18144a;
  }


  .description {
      font-size: 16px;
      color: #7180a5;

      font-weight: 400;

      margin: 0;

      line-height: 1.5;
  }


  .history-list {
      background: #f8f7ff;

      border: 1px solid #e8e3ff;

      border-radius: 14px;

      padding: 15px;
  }

</style>

<!-- <script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { apiData, expenses } from '$lib/store';
  import { getAllExpense } from '$lib/utils/server';

  onMount(async () => {
    try {
      getAllExpense()
    } catch (error) {
      console.error('Error:', error);
    }
  });
  
function formatPrice(price: any) {
    const num = typeof price === 'number' ? price : parseFloat(price);
    return isNaN(num) ? '0.00' : num.toFixed(2);
  }
</script>

<main>
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
</main>

<style>
    main{
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
}

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
</style> -->
