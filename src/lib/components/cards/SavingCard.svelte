<script lang="ts">
    import pig from "$lib/assets/pig.png";

    interface Props {
        save_amt?: number;
    }

    let { save_amt = 0.00 }: Props = $props();
</script>

<div class="save-container">
    <div class="save-text">
        Saving Goal
    </div>
    <div class="layer">
        <div class="save-amount">₹{save_amt.toLocaleString()}</div>
        <div class="pig-container">
            <img src={pig} alt="Piggy Bank">
        </div>
    </div>
    <div class="message">
        You're ₹50 ahead of last month's pace. Great job, Dad!
    </div>
</div>

<style>
    .save-container {
        background-color: #30628C;
        padding: 24px;
        border-radius: 12px;
        color: #fff;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .save-text {
        font-size: 14px;
        color: #CEE5FF;
        margin-bottom: 8px;
    }

    .layer {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
    }

    .save-amount {
        font-size: 28px;
        font-weight: 800;
        color: #fff;
    }

    .pig-container {
        margin-left: 12px;
    }

    .message {
        font-size: 12px;
        color: #CEE5FF;
        line-height: 1.4;
    }
</style>
