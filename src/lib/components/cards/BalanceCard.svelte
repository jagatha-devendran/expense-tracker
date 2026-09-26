<script lang="ts">
    import trending_up from "$lib/assets/trending_up.png";

    interface Props {
        balance?: string;
        percent?: number;
    }

    let { balance = "0.00", percent = 2 }: Props = $props();
</script>

<div class="container">
    <div class="title">
        TOTAL BALANCE
    </div>
    <div class="balance">
        ₹{balance}
    </div>
    <div class="chip">
        <div class="trending-up">
            <img src={trending_up} alt="Trending Up">
        </div>
        <div class="chip-text">{percent}% vs last month</div>
    </div>
</div>

<style>

    .container {
        background-color: #6349C0;
        border-radius: 12px;
        padding: 32px;
        color: #fff;
    }
    
    .title {        
        font-size: 14px;
        font-weight: 400;
        opacity: 0.8;
    }
    
    .balance {
        font-size: 48px;
        font-weight: 800; 
        margin-top: 8px;       
        margin-bottom: 8px;       
    }
    
    .chip {
        height: 28px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 9999px;
        display: inline-flex;
        align-items: center;
        margin-top: 12px;
        padding-right: 12px;
    }
    
    .trending-up {
        padding: 4px 8px;
        display: flex;
        align-items: center;
    }
    
    .chip-text {
        font-size: 12px;
        font-weight: 600;
    }
</style>
