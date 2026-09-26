<script lang="ts">
    interface Props {
        icon: string;
        spent_for: string;
        day_date: string;
        place: string;
        amt_spent: string | number;
        category: string;
    }

    let { 
        icon, 
        spent_for, 
        day_date, 
        place, 
        amt_spent, 
        category 
    }: Props = $props();
</script>

<div class="recent-expense-container">
    <div class="left-section">
        <div class="img-container">
            <!-- Ensure icon path is correct. If it's a relative path from the assets folder, it might need adjustment -->
            <img class="expense-icon" src={icon} alt={spent_for}>
        </div>
        
        <div class="text-container">
            <div class="expense-title">{spent_for}</div>
            <div class="description">{day_date} • {place}</div>
        </div>
    </div>
    <div class="right-section">
        <div class="amount">-₹{typeof amt_spent === 'number' ? amt_spent.toFixed(2) : amt_spent}</div>
        <div class="category">{category}</div>
    </div>
</div>

<style>
    .recent-expense-container {
        background-color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        border-radius: 12px;
        margin-bottom: 12px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    }

    .left-section {
        display: flex;
        align-items: center;
    }

    .img-container {
        background-color: #F1F4F9;
        height: 48px;
        width: 48px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .expense-icon {
        width: 24px;
        height: 24px;
        object-fit: contain;
    }

    .text-container {
        margin-left: 16px;
    }

    .expense-title {
        font-size: 16px;
        font-weight: 700;
        color: #181C20;
        margin-bottom: 4px;
    }

    .description {
        color: #797584;
        font-size: 12px;
    }

    .right-section {
        text-align: right;
    }

    .amount {
        font-size: 16px;
        font-weight: 700;
        color: #181C20;
        margin-bottom: 4px;
    }

    .category {
        font-size: 10px;
        font-weight: 700;
        color: #797584;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
</style>
