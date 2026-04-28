<script>
    let src = "src/lib/assets/trending_up.png"
    let percent = 2.4;
</script>
<div class="container">
<div class="title font-fam-color">
    TOTAL BALANCE
</div>
<div class="balance font-fam-color">
    $12,450.00
</div>
<div class="chip">
    <div class="trending-up"><img {src} alt="Trending_Up"></div>
    <div class="chip-text font-fam-color">{percent}% vs last month</div>
</div>

</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
    .container{
        background-color: #6349C0;
        /* height: 184px;
        width: 624px; */
        border-radius: 12px;
        padding: 32px;
    }
    .font-fam-color{
        font-family: 'Plus Jakarta Sans';
        color: #fff;
    }
    .title{        
        font-size: 14;
        font-weight: 400;
    }
    .balance{
        font-size: 48px;
        font-weight: 800; 
        margin-top: 8px;       
        margin-bottom: 8px;       
    }
    .chip{
        height: 28px;
        width: 154.36px;
        background-color: rgb(255 255 255 / 0.1);
        border-radius: 9999pt;
        display: flex;
        margin-top: 12px;
    }
    .trending-up{
        padding: 4px 4px 10.5px 12px;
    }
    .chip-text{
        font-size: 12px;
        font-weight: 600;
        padding: 6px 12px 6px 4px;
    }

</style>