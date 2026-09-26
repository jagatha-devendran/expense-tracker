<script lang="ts">
  import { saveSettings } from "$lib/utils/server";
  import MonthlyIncomeCard from "./MonthlyIncomeCard.svelte";
  import MonthlyPlan from "./MonthlyPlan.svelte";

  let income = $state(0);
  let saving = $state(0);

  function onIncomeChange(value: string) {
    income = Number(value);
  }

  function onSavingChange(value: string) {
    saving = Number(value);
  }
</script>

<main>
    <div class="heading">
    <div class="left-header-content">
    <div class="align">
        <div class="img-container">
            <span class="material-symbols-outlined ">Settings</span>       
        </div>
        <h1>Set up your monthly plan</h1>
    </div>
    <h4 class="font head-description">These values will be used to calculate your dashboard and help you
        <br>track your spending, savings and balance.</h4>    
        
    </div>

    <!-- <div class="right-container">
        <span class="material-symbols-outlined">calendar_today</span>
        <h6>September 2026</h6>
        <span class="material-symbols-outlined">
            arrow_drop_down
            </span>
    </div> -->
        
    </div>
    <div class="cards">
        <MonthlyIncomeCard onValueChange={onIncomeChange} icon_name="account_balance_wallet" title="Monthly Income" label="Enter your monthly salary" description="Your monthly income"/>
        <MonthlyIncomeCard onValueChange={onSavingChange} icon_name="savings" title="Monthly Saving Goal" label="Set how much you want to save" description="Amount you want to save each month"/>
    </div>
    <br><br>
    <MonthlyPlan
    income={income}
    savingGoal={saving}
    available={income-saving}
/>
<div class="save-section">
    <button class="save-button" onclick={()=>{saveSettings(income, saving)}}>
        <span class="material-symbols-outlined">save</span>
        Save Settings
    </button>

    <div class="note">
        <span class="material-symbols-outlined">info</span>
        <span>You can change these any time in Settings</span>
    </div>
</div>
    
</main>

<style>
.save-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
    }

    .save-button {
        width: 465px;
        height: 54px;
        border: none;
        border-radius: 8px;
        background: #6349C0;
        color: white;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }

    .save-button:hover {
        background: #553db0;
    }

    .save-button .material-symbols-outlined {
        color: white;
        font-size: 22px;
    }

    .note {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 12px;

        color: #8A91A5;
        font-size: 13px;
    }

    .note .material-symbols-outlined {
        font-size: 18px;
        color: #8A91A5;
    }

    main{
        /* padding-top: 10px; */
        padding-left: 30px;
        padding-right: 50px;
        width: 100%;
        background-color: #F7F8FC;
    }
    .heading{
        display: flex;
        justify-content: space-between;
        width: 100%;
        /* align-items: center; */
    }
    .align{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 0px;

    }
    h1{
        font-size: 30px;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    h4{
        font-size: 16px;
        color: #30628C;
        opacity: 0.7;
        font-weight: 400;
        margin-top: 10px;
    }
    
    .material-symbols-outlined {
        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
        color: #6349C0;
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

    /* .right-container{
        width: 190px;
        height: 38px;
        padding: 10px 16px;
        border-radius: 9999px;
        display: flex;
        background-color:  #ffffff;
        box-shadow: inset 0 -3em 3em rgb(235 240 249 / 90%);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    } */

    .cards {
        display: flex;
        gap: 20px;
    }
    
</style>