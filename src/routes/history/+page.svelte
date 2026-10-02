<script lang="ts">
	import { onMount } from 'svelte';
	import { expenses } from '$lib/store';
	import type { Expense } from '$lib/types/expense';
	import { DateHeader, ExpenseCard, DeleteExpenseModal } from '$lib/components';
	import { getAllExpense } from '$lib/utils/clientApi';
	import { EditExpense } from '$lib/components'; //src/lib/components/common/EditExpense.svelte';
	import { addData, deleteById, updateData } from '$lib/services/expenses';
	import { goto } from '$app/navigation';
	import { get } from 'svelte/store';

	let showDeleteModal = $state(false);
	let showEditModal = $state(false);
	let selectedExpense = $state<Expense | null>(null);

	// let valueDefaults: {
	//         name?: string;
	//         price?: number;
	//         description?: string;
	//         category?: string;
	//         date: string | undefined;
	//     };

	let values = $state({
		name: '',
		price: 0,
		description: '',
		category: '',
		date: ''
	});

	onMount(async () => {
		getAll();
	});

	async function getAll() {
		try {
			await getAllExpense();
		} catch (error) {
			console.error('Error fetching expenses:', error);
		}
	}

	function openEdit(expense: Expense) {
		selectedExpense = expense;
		showEditModal = true;
	}

	function openDeleteModal(expense: Expense) {
		selectedExpense = expense;
		showDeleteModal = true;
	}

	async function onAddClick() {
		let errorMessage = '';
		try {
			await addData(values);
		} catch (err: unknown) {
			const error = err as Error;
			errorMessage = error?.message || 'Failed to add expense.';
		}
	}
	async function onSubmit(editedExpense: Expense) {
		console.log(editedExpense);
		try {
			await updateData(editedExpense.id, editedExpense);
			await getAll(); // refresh AFTER update finishes

			closeEditModal();
		} catch (error) {
			console.error('Failed to update expense:', error);
		}
	}

	function closeDeleteModal() {
		showDeleteModal = false;
		selectedExpense = null;
	}
	function closeEditModal() {
		showEditModal = false;
		selectedExpense = null;
	}

	async function deleteExpense(expense: Expense | null) {
		if (!selectedExpense?.id) return;
		// Call delete API when backend endpoint is ready
		try {
			await deleteById(expense?.id ?? 0);
			await getAll(); // refresh UI
			closeDeleteModal();
		} catch (error) {
			console.error(error);
		}
	}
</script>

<main>
	<!-- HEADER -->

	<div class="page-header">
		<div class="history-icon">
			<span class="material-symbols-outlined"> history </span>
		</div>

		<div>
			<h1>History</h1>

			<h4 class="description">
				Tracking your spending across all accounts. Review past logs and manage your budget
				efficiently.
			</h4>
		</div>
	</div>

	<!-- EXPENSES -->

	<div class="history-list">
		{#each $expenses as expense, i (expense.id ?? i)}
			{#if i === 0 || $expenses[i - 1].date !== expense.date}
				<DateHeader date={expense.date} />
			{/if}

			<ExpenseCard {expense} onEdit={openEdit} onDelete={openDeleteModal} />
		{/each}
	</div>
</main>

<!-- DELETE POPUP -->

{#if showDeleteModal}
	<DeleteExpenseModal
		expense={selectedExpense}
		onCancel={closeDeleteModal}
		onConfirm={() => deleteExpense(selectedExpense)}
	/>
{/if}

{#if showEditModal}
	<EditExpense expense={selectedExpense} onCancel={closeEditModal} onSave={onSubmit} />
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
