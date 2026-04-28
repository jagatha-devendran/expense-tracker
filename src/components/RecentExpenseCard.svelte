<script>
let props = $props();
</script>

<div class="recent-expense-container">
    <div class="join">
        <div class="img-container">
            <img class="petrol-bunk-img" src={props.icon} alt="">
        </div>
        
        <div class="text">
            <div class="expense-text">{props.spent_for}</div>
            <div class="description">{props.day_date} • {props.place}</div>
        </div>
    </div>
    <div class="align-category-amt">
        <div class="amount"> - ${props.amt_spent}</div>
        <div class="category">{props.category}</div>
    </div>
</div>


<style>
    .recent-expense-container{
        font-family: "Plus Jakarta Sans";
        background-color: #FFFFFF;
        display: flex;
        justify-content: space-between;
        padding: 16px;
    }
    .join{
        display: flex;
    }
    .img-container{
        background-color: #F1F4F9;
        height: 48px;
        width: 48px;
        border-radius: 8px;
    }
    .petrol-bunk-img{
        margin: 15px 15.75px;
    }
    .text{
        margin-left: 16px;
        
    }
    .expense-text{
        font-size: 16px;
        margin-bottom: 5px;
        font-weight: bold;
    }
    .description{
        color: #797584;
        font-size: 12px;
    }
    .align-category-amt{
        direction:rtl;
    }
    .amount{
        font-size: 16px;
        margin-bottom: 5px;
        font-weight: bold;
        direction:ltr;
    }
    .category{
        font-size: 10px;
        font-weight: bold;
        color: #797584;
    }
</style>