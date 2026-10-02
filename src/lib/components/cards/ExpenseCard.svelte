<script lang="ts">
	import type { Expense } from '$lib/types/expense';
	import { CATEGORY_ICONS } from '$lib/utils/categoryIcons';

	interface Props {
		expense: Expense;
		onEdit: (expense: Expense) => void;
		onDelete: (expense: Expense) => void;
	}

	let { expense, onEdit, onDelete }: Props = $props();

	function formatPrice(price: number | string | undefined) {
		if (price === undefined || price === null) return '0.00';
		const num = typeof price === 'number' ? price : parseFloat(price);

		return isNaN(num) ? '0.00' : num.toFixed(2);
	}

	function getCategoryIcon(category?: string) {
		switch (category?.toLowerCase()) {
			case 'food':
			case 'food & dining':
				return 'restaurant';

			case 'shopping':
				return 'shopping_cart';

			case 'travel':
				return 'directions_car';

			case 'groceries':
				return 'local_grocery_store';

			case 'bills':
				return 'receipt_long';

			case 'entertainment':
				return 'movie';

			case 'health':
				return 'medical_services';

			default:
				return 'receipt_long';
		}
	}
</script>

<div class="expense-card">
	<!-- LEFT SIDE -->

	<div class="expense-left">
		<div class="category-icon">
			<span class="material-symbols-outlined">
				<!-- {getCategoryIcon(expense.category)} -->
				 {CATEGORY_ICONS[expense.category ?? 'Other'] ?? 'receipt_long'}
			</span>
		</div>

		<div class="expense-info">
			<h3>
				{expense.name}
			</h3>

			<div class="expense-details">
				<!-- <span class="material-symbols-outlined small-icon">
					{CATEGORY_ICONS[expense.category ?? 'Other'] ?? 'receipt_long'}
				</span> -->
				<span>
					{expense.category}
				</span>

				<span class="separator">|</span>

				<span>
					{expense.description}
				</span>

				<!-- <span class="material-symbols-outlined small-icon"> calendar_month </span> -->

				<!-- <span>
					{expense.date}
				</span> -->
			</div>
		</div>
	</div>

	<!-- RIGHT SIDE -->

	<div class="expense-right">
		<h4>
			-₹{formatPrice(expense.price)}
		</h4>

		<!-- EDIT -->

		<button class="action-button edit-button" onclick={() => onEdit(expense)} title="Edit">
			<span class="material-symbols-outlined"> edit </span>
		</button>

		<!-- DELETE -->

		<button class="action-button delete-button" onclick={() => onDelete(expense)} title="Delete">
			<span class="material-symbols-outlined"> delete </span>
		</button>
	</div>
</div>

<style>
	.expense-card {
		background: #ffffff;
		border-radius: 13px;

		padding: 18px 20px;
		margin-bottom: 12px;

		display: flex;
		justify-content: space-between;
		align-items: center;

		box-shadow: 0 2px 8px rgba(80, 70, 130, 0.06);

		border: 1px solid #eeeef7;
	}

	.expense-left {
		display: flex;
		align-items: center;
		gap: 18px;
	}

	.category-icon {
		width: 54px;
		height: 54px;

		border-radius: 14px;
		background: #f0ebff;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.category-icon .material-symbols-outlined {
		color: #6349c0;
		font-size: 29px;
	}

	.expense-info h3 {
		margin: 0 0 7px;

		font-size: 16px;
		font-weight: 700;

		color: #17174a;
	}

	.expense-details {
		display: flex;
		align-items: center;
		gap: 7px;

		color: #8790ad;
		font-size: 14px;
	}

	.small-icon {
		font-size: 17px;
	}

	.separator {
		color: #b6b9c8;
		margin: 0 3px;
	}

	.expense-right {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.expense-right h4 {
		color: #6349c0;
		font-size: 18px;
		font-weight: 800;

		margin: 0 25px 0 0;
	}

	.action-button {
		width: 54px;
		height: 54px;

		border: none;
		border-radius: 13px;

		display: flex;
		align-items: center;
		justify-content: center;

		cursor: pointer;
	}

	.action-button .material-symbols-outlined {
		font-size: 25px;
	}

	.edit-button {
		background: #f1edff;
	}

	.edit-button .material-symbols-outlined {
		color: #6349c0;
	}

	.delete-button {
		background: #fff0f2;
	}

	.delete-button .material-symbols-outlined {
		color: #f05c6c;
	}
</style>
