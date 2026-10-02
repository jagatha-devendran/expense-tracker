<script lang="ts">
	interface Props {
		income?: number;
		savingGoal?: number;
		available?: number;
	}

	let { income = 0, savingGoal = 0, available = 0 }: Props = $props();
</script>

<div class="plan-container">
	<!-- LEFT: Monthly Plan -->
	<div class="plan-title">
		<div class="icon-container">
			<span class="material-symbols-outlined"> calendar_month </span>
		</div>

		<div>
			<h3>Your monthly plan</h3>

			<p>
				Here's a quick preview of how your money will be<br />
				allocated based on your settings.
			</p>
		</div>
	</div>

	<!-- INCOME -->
	<div class="plan-item">
		<div class="icon-container">
			<span class="material-symbols-outlined"> north </span>
		</div>

		<div>
			<span>Income</span>

			<strong>
				₹{income.toLocaleString()}
			</strong>
		</div>
	</div>

	<!-- SAVING GOAL -->
	<div class="plan-item">
		<div class="icon-container">
			<span class="material-symbols-outlined"> savings </span>
		</div>

		<div>
			<span>Saving goal</span>

			<strong>
				₹{savingGoal.toLocaleString()}
			</strong>
		</div>
	</div>

	<!-- AVAILABLE -->
	<div class="plan-item available">
		<div class="icon-container">
			<span class="material-symbols-outlined"> shopping_cart </span>
		</div>

		<div>
			<span>Available for spending</span>

			<strong>
				₹{available.toLocaleString()}
			</strong>
		</div>
	</div>
</div>

<style>
	.plan-container {
		background: #f8f6ff;
		border: 1px solid #e5dfff;
		border-radius: 12px;

		padding: 24px 28px;

		display: flex;
		align-items: center;

		gap: 35px;
	}

	/* LEFT SECTION */

	.plan-title {
		display: flex;
		align-items: center;

		gap: 18px;

		flex: 1.5;
	}

	.plan-title h3 {
		margin: 0;

		font-size: 18px;
		color: #17174a;
	}

	.plan-title p {
		margin: 8px 0 0;

		color: #8a91a5;

		font-size: 14px;

		line-height: 1.5;
	}

	/* ICON */

	.icon-container {
		width: 48px;
		height: 48px;

		min-width: 48px;
		min-height: 48px;

		border-radius: 12px;

		background: #f0ebff;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.plan-item .material-symbols-outlined {
		font-size: 28px;
		color: #6349c0;
	}

	.material-symbols-outlined {
		color: #6349c0;
		font-size: 27px;

		font-variation-settings:
			'FILL' 0,
			'wght' 400,
			'GRAD' 0,
			'opsz' 24;
	}

	/* INCOME / SAVING / AVAILABLE */

	.plan-item {
		display: flex;
		align-items: center;

		gap: 14px;

		padding-left: 35px;

		border-left: 1px solid #e3dff2;

		min-width: 150px;
	}

	.plan-item span {
		display: block;

		color: #8a91a5;

		font-size: 14px;

		margin-bottom: 5px;
	}

	.plan-item strong {
		display: block;

		font-size: 21px;

		color: #17174a;
	}

	/* AVAILABLE AMOUNT */

	.available strong {
		color: #6349c0;
	}
</style>
