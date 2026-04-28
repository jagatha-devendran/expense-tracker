<script>
    let save_amt = 450.00;
    let src = "src/lib/assets/pig.png";
</script>
<div class="save-container font-fam">
    <div class="save-text">
        Saving Goal
    </div>
    <div class="layer">
        <div class="save-amount">${save_amt}</div>
        <div class="pig-container"><img {src} alt="Pig"></div>
    </div>
    <div class="text">You're $50 ahead of last month's pace. Great
        job, Dad!</div>

</div>
<style>
    .save-container{
        background-color: #30628C;
        padding: 55px 24px;
        border-radius: 12px;
    }
    .font-fam{
        font-family: "Plus Jakarta Sans";
    }
    .save-text{
        font-size: 14px;
        color: #CEE5FF;
    }
    .layer{
        display: flex;
        align-items: center;
    }
    .save-amount{
        font-size: 30px;
        font-weight: 800;
        color: #fff;
        margin: 8px 0px 12px;
        /* margin: 36px 0px; */
    }
    .pig-container{
        padding: 8px;
    }
    .text{
        font-size: 12px;
        color: #CEE5FF;
    }
</style>