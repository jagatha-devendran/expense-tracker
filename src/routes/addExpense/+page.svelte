<script lang="ts">
  import { addExpense } from "$lib/services/expenses";
  import type { Expense } from "$lib/models/Expense";

	let name = $state('');
  let price = $state(0);
  let current = $state(false);
  let description = $state('');

  function getName(category_name: string){
    current = true;
    name = category_name;
    console.log(name);
  }

  async function addData() {        
    const expense: Expense = { name, price, description };
    console.log("Adding Expense:", expense);
    await addExpense(expense);
    console.log("Added Expense");
  }
</script>

<h1 class="font">Add New</h1>
<h4 class="font head-description">Track your spending quickly and easily. </h4>
<div class="amt-input-container">
  <h5 class="font">AMOUNT</h5>
  <div class="align">
    <h3 class="rs-symbol">$</h3>
    <input type="number" bind:value={price} class="amt-input" placeholder="0.00"/>
  </div>
</div>

<div class="card">
  <h5 class="category">CATEGORY</h5>
  <div class="category-grid">
      <button onclick={() => getName("Grocery")} class={name == "Grocery" ? 'selected' : 'category-item'}>
        <div class="align-category">
          <span class="material-symbols-outlined">shopping_cart</span>
          <p>Grocery</p>
        </div>
      </button>
  
      <button onclick={()=>getName("Restaurant")} class={name == "Restaurant" ? 'selected' : 'category-item'}>
        <span class="material-symbols-outlined">restaurant</span>
        <p>Restaurant</p>
      </button>
  
      <button onclick={()=>getName("Petrol")} class={name == "Petrol" ? 'selected' : 'category-item'}>
        <span class="material-symbols-outlined">local_gas_station</span>
        <p>Petrol</p>
      </button>
  
      <button onclick={()=>getName("Health")} class={name == "Health" ? 'selected' : 'category-item'}>
        <span class="material-symbols-outlined">medical_services</span>
        <p>Health</p>
      </button>
  
      <button onclick={()=>getName("Iyarkai Foods")} class={name == "Iyarkai Foods" ? 'selected' : 'category-item'}>
        <span class="material-symbols-outlined">eco</span>
        <p>Iyarkai</p>
      </button>
  
      <button onclick={()=>getName("Bus Travel")} class={name == "Bus Travel" ? 'selected' : 'category-item'}>
        <span class="material-symbols-outlined">directions_bus</span>
        <p>Bus Travel</p>
      </button>
  
      <button onclick={()=>getName("Gifts")} class={name == "Gifts" ? 'selected' : 'category-item'}>
        <span class="material-symbols-outlined">featured_seasonal_and_gifts</span>
        <p>Gifts</p>
      </button>
      
      <button onclick={()=>getName("Dress Purchase")} class={name == "Dress Purchase" ? 'selected' : 'category-item'}>
        <span class="material-symbols-outlined">apparel</span>
        <p>Dress</p>
      </button>
  
      <button onclick={()=>getName("Other")} class={name == "Other" ? 'selected' : 'category-item'}>
        <span class="material-symbols-outlined">more_horiz</span>
        <p>Other</p>
      </button>
  </div>
</div>

<div class="notes-card">
  <h5>DESCRIPTION</h5>
  <input 
    bind:value={description}
    type="text" 
    class="note-input" 
    placeholder="What was this for?" 
  />
</div>
<button onclick={addData} class="save-btn">Save Expense</button>
<div style="height:100px"></div>
<style>
h1 {
  font-size: 48px;
  color: #6349C0;
  margin-bottom: 8px;
  font-weight: 800;
}
.head-description {
  font-size: 16px;
  color: #30628C;
  opacity: 0.7;
  font-weight: 400;
  margin-bottom: 32px;
}
h5 {
  color: #6349C0;
  font-size: 14px;
  margin-bottom: 12px;
  font-weight: 700;
}
.amt-input-container {
  background-color: #fff;
  padding: 32px;
  border-radius: 12px;
  margin-bottom: 32px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}
.align {
  display: flex;
  align-items: center;
}
.rs-symbol {
  font-size: 34px;
  margin-right: 8px;
  color: #181C20;
}
.amt-input {
  width: 100%;
  font-size: 36px;
  font-weight: 700;
  border: none;
  outline: none;
  color: #181C20;
}
.amt-input::placeholder {
  color: #D8DADF;
}
.card {
  padding: 24px;
  background-color: #F1F4F9;
  margin-bottom: 16px;
  border-radius: 16px;
}
.category-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.material-symbols-outlined {
  color: #6349C0;
  font-size: 24px;
}
.category-item, .selected {
  height: 80px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid transparent;
}
.category-item p, .selected p {
  font-size: 12px;
  margin-top: 4px;
  font-weight: 600;
}
.category-item:hover {
  border-color: #6349C0;
}
.selected {
  border-color: #6349C0;
  background: #f1edff;
}
.notes-card {
  padding: 24px;
  background-color: #fff;
  border-radius: 16px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}
.note-input {
  width: 100%;
  border: none;
  outline: none;
  padding: 8px 0;
  font-size: 16px;
  color: #181C20;
}
.save-btn {
  width: 100%;
  background: #6349C0;
  color: #fff;
  border: none;
  padding: 20px;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.1s;
}
.save-btn:active {
  transform: scale(0.98);
}
</style>

