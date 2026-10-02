<script lang="ts">
	import type { Expense } from '$lib/types/expense';

	interface Props {
		expense: Expense | null;
		onSave?: (expense: Expense) => void;
		onCancel?: () => void;
	}

	let { expense, onSave, onCancel }: Props = $props();

	let title = $state(expense?.name ?? '');
	let amount = $state(expense?.price ?? 0);
	let category = $state(expense?.category ?? '');
	let description = $state(expense?.description ?? '');

	function saveExpense() {
		if (!expense) return;

		const editedExpense: Expense = {
			...expense, // keeps id AND original date
			name: title,
			price: amount,
			category,
			description
		};

		onSave?.(editedExpense);
	}
</script>

<div class="dialog-overlay">
	<div class="edit-dialog">
		<!-- Header -->
		<div class="dialog-header">
			<div class="edit-icon">
				<span class="material-symbols-outlined">edit</span>
			</div>

			<h2>Edit Expense</h2>

			<button class="close-btn" onclick={onCancel}>
				<span class="material-symbols-outlined">close</span>
			</button>
		</div>

		<!-- Title -->
		<div class="field">
			<label>Title</label>

			<div class="input-box">
				<span class="material-symbols-outlined">edit</span>

				<input type="text" bind:value={title} placeholder="Expense title" />
			</div>
		</div>

		<!-- Amount -->
		<div class="field">
			<label>Amount</label>

			<div class="input-box">
				<span class="material-symbols-outlined">currency_rupee</span>

				<input type="number" bind:value={amount} placeholder="0.00" />
			</div>
		</div>

		<!-- Category -->
		<div class="field">
			<label>Category</label>

			<div class="input-box">
				<span class="material-symbols-outlined">category</span>

				<select bind:value={category}>
					<option value="Food">Food</option>
					<option value="Shopping">Shopping</option>
					<option value="Transport">Transport</option>
					<option value="Education">Education</option>
					<option value="Bills">Bills</option>
					<option value="Entertainment">Entertainment</option>
					<option value="Other">Other</option>
				</select>
			</div>
		</div>

		<!-- Description -->
		<div class="field">
			<label>Description</label>

			<div class="input-box textarea-box">
				<span class="material-symbols-outlined">description</span>

				<textarea bind:value={description} placeholder="What was this for?"></textarea>
			</div>
		</div>

		<!-- Buttons -->
		<div class="dialog-actions">
			<button class="cancel-btn" onclick={onCancel}> Cancel </button>

			<button class="save-btn" onclick={saveExpense}> Save Changes </button>
		</div>
	</div>
</div>

<style>
	.dialog-overlay {
		position: fixed;
		inset: 0;
		background: rgba(30, 25, 60, 0.25);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}

	.edit-dialog {
		width: 450px;
		max-width: 90%;
		background: #fff;
		border-radius: 20px;
		padding: 28px;
		box-shadow: 0 15px 45px rgba(50, 40, 100, 0.18);
	}

	.dialog-header {
		display: flex;
		align-items: center;
		margin-bottom: 25px;
	}

	.edit-icon {
		width: 48px;
		height: 48px;
		border-radius: 14px;
		background: #f0ebff;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 14px;
	}

	.edit-icon span {
		color: #6349c0;
		font-size: 25px;
	}

	h2 {
		margin: 0;
		color: #181c4a;
		font-size: 23px;
	}

	.close-btn {
		margin-left: auto;
		border: none;
		background: transparent;
		color: #9295a8;
		cursor: pointer;
	}

	.close-btn span {
		font-size: 22px;
	}

	.field {
		margin-bottom: 18px;
	}

	.field label {
		display: block;
		color: #6349c0;
		font-size: 14px;
		font-weight: 700;
		margin-bottom: 8px;
	}

	.input-box {
		height: 50px;
		display: flex;
		align-items: center;
		background: #faf9ff;
		border: 1px solid #e4def7;
		border-radius: 12px;
		padding: 0 14px;
	}

	.input-box:focus-within {
		border-color: #8b72df;
		background: #fff;
	}

	.input-box > span {
		color: #8b72df;
		font-size: 21px;
		margin-right: 10px;
	}

	.input-box input,
	.input-box select,
	.input-box textarea {
		width: 100%;
		border: none;
		outline: none;
		background: transparent;
		color: #181c4a;
		font-family: inherit;
		font-size: 15px;
	}

	.input-box input::placeholder,
	.input-box textarea::placeholder {
		color: #a8aabd;
	}

	select {
		cursor: pointer;
	}

	.textarea-box {
		height: 85px;
		align-items: flex-start;
		padding-top: 13px;
	}

	.textarea-box textarea {
		height: 60px;
		resize: none;
	}

	.dialog-actions {
		display: flex;
		justify-content: flex-end;
		gap: 12px;
		margin-top: 25px;
	}

	.cancel-btn,
	.save-btn {
		height: 42px;
		padding: 0 22px;
		border-radius: 10px;
		font-weight: 700;
		font-size: 14px;
		cursor: pointer;
	}

	.cancel-btn {
		background: white;
		border: 1px solid #d8cff5;
		color: #6349c0;
	}

	.save-btn {
		border: none;
		background: #6349c0;
		color: white;
	}

	.save-btn:hover {
		background: #563db0;
	}
</style>
