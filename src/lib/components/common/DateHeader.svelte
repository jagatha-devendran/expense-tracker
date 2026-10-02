<script lang="ts">
	interface Props {
		date: string | undefined;
	}

	let { date }: Props = $props();
</script>

<div class="date-header">
	<span class="material-symbols-outlined"> calendar_month </span>

	<span>{date}</span>
</div>

<style>
	.date-header {
		display: flex;
		align-items: center;
		gap: 12px;

		color: #45358d;
		font-size: 17px;
		font-weight: 700;

		padding: 4px 10px 15px;
	}

	.date-header .material-symbols-outlined {
		color: #6349c0;
		font-size: 27px;
	}
</style>
