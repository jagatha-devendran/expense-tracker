<script lang="ts">
    import cart from "$lib/assets/cart.png";

    interface Props {
        spent_amount?: number;
        remaining_amt?: number;
        percent_used?: number;
    }

    let { 
        spent_amount = 2140.50, 
        remaining_amt = 859.50, 
        percent_used = 71 
    }: Props = $props();
</script>

<div class="budget-container">
    <div class="align-first-row">
        <div class="icon-layer">
            <img src={cart} alt="Shopping cart">
        </div>
        <div class="budget-text">
            MONTHLY BUDGET
        </div>
    </div>
    
    <div class="spent-label">Spent This Month</div>
    <div class="spent-amount">${spent_amount.toLocaleString()}</div>
    
    <div class="remain-layer">
        <div class="remain-text">Remaining: ${remaining_amt.toLocaleString()}</div>
        <div class="used-text">{percent_used}% used</div>
    </div>
    
    <div class="progress-bar">
        <div class="progress" style="width: {percent_used}%"></div>
    </div>
</div>

<style>
    .budget-container {
        background-color: #FFFFFF;
        padding: 24px;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.02);
        flex: 1;
    }
    
    .align-first-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
    }
    
    .icon-layer {
        height: 36px;
        width: 36px;
        background-color: #9FCEFE;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .budget-text {
        font-size: 12px;
        font-weight: 700;
        color: #181C20;
    }
    
    .spent-label {
        color: #797584;
        font-size: 14px;
        margin-bottom: 4px;
    }
    
    .spent-amount {
        font-size: 28px;
        font-weight: 800;
        color: #181C20;
        margin-bottom: 12px;
    }
    
    .remain-layer {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
    }
    
    .remain-text {
        color: #30628C;
        font-size: 12px;
        font-weight: 600;
    }
    
    .used-text {
        color: #797584;
        font-size: 10px;
        font-weight: 600;
    }
    
    .progress-bar {
        height: 8px;
        background-color: #ECEEF3;
        border-radius: 9999px;
        overflow: hidden;
    }
    
    .progress {
        height: 100%;
        background-color: #30628C;
        border-radius: 9999px;
        transition: width 0.3s ease;
    }
</style>
