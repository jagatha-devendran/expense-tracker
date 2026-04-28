<script>
    let src = "src/lib/assets/cart.png";
    let spent_amount =  2140.50;
    let remaining_amt = 859.50;
    let percent_used = 71;
</script>

<div class="budget-container font-fam">
    <div class="align-first-row">
        <div class="layer">
            <div class="shopping-cart font-fam">
            <img {src} alt="Shopping_cart">
            </div>
        </div>
        
        <div class="budget-text">
            MONTHLY BUDGET
        </div>
        
    </div>
    
    <div class="spent-text">Spent This Month</div>
    <div class="spent-amount">${spent_amount}</div>
    <div class="remain-layer">
        <div class="remain-text">Remaining: ${remaining_amt}</div>
        <div class="used-text">{percent_used}% used</div>
    </div>
    <div class="progress-bar">
        <div class="progress"></div>
    </div>
</div>

<style>
    
    .budget-container{
        background-color: #FFFFFF;
        padding: 24px;
        border-radius: 12px;
    }
    .align-first-row{
        display: flex;
        justify-content: space-between;
        
    }
    .font-fam{
		font-family: 'Plus Jakarta Sans';
	}
    .layer{
        height: 36px;
        width: 35.98px;
        background-color: #9FCEFE;
        border-radius: 8px;
        /* align-items: center; */
    }
    .shopping-cart{
        /* padding: 8px; */
        margin: 8px;
    }
    .budget-text{
        font-size: 12px;
        font-weight: 600;
    }
    .spent-text{
        color: #797584;
        font-size: 14px;
        margin-top: 12px;
        margin-bottom: 4px;
    }
    .spent-amount{
        font-size: 30px;
        font-weight: 800;
        color: #181C20;
        margin-bottom: 12px;
    }
    .remain-layer{
        display: flex;
        justify-content: space-between;
    }
    .remain-text{
        color: #30628C;
        font-size: 12px;
        font-weight: 600;
    }
    .used-text{
        color: #797584;
        font-size: 10px;
        font-weight: 600;
    }
    .progress-bar{
        height: 8px;
        width: 256px;
        background-color: #ECEEF3;
        margin: 8px 0px;
        border-radius: 9999px;
    }
    .progress{
        height: 8px;
        width: 181.75px;
        background-color: #30628C;
        border-radius: 9999px;
    }

</style>