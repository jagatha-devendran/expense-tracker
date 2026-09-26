<script lang="ts">
  import { addData } from "$lib/utils/server";
  
  const valueDefaults = {
        name: '',
        price: <number | ''>(''),
        description: '',
        category:'',
        date : new Date().toISOString().split('T')[0]
    };
  let values = $state({ ...valueDefaults });
  let showSuccess = $state(false);

  let box:any;
	
    function onAddClick(){
      addData(values);
      values = { ...valueDefaults };
      scrollToTop();
      showSuccess = true;
      setTimeout(() => {                                                                                                                                                      
          showSuccess = false;                                                                                                                                                  
        }, 3000);  
    }

	function scrollToTop() {
		box.scrollIntoView();
	}

  function selectCategory(category_name: string) {
    values.category = category_name;
    console.log("Selected category:", values.category);
  }

  
</script>
<main bind:this={box}>
<h1 class="font">Add New</h1>
<h4 class="font head-description">Track your spending quickly and easily.</h4>

<!-- 1. Title Field (Equal size, separate card with clear gap) -->
<div class="field-card">
  <h5 class="field-label">TITLE</h5>
  <input 
    type="text" 
    bind:value={values.name} 
    class="big-input" 
    placeholder="e.g. Coffee" 
  />
</div>

<!-- 2. Amount Field (Equal size, separate card with clear gap) -->
<div class="field-card">
  <h5 class="field-label">AMOUNT</h5>
  <div class="align">
    <span class="rs-symbol">$</span>
    <input 
      type="number" 
      bind:value={values.price} 
      class="big-input" 
      placeholder="0.00" 
    />
  </div>
</div>

<!-- 3. Category Card -->
<div class="card">
  <h5 class="category">CATEGORY</h5>
  <div class="category-grid">
      <button onclick={() => selectCategory("Grocery")} class={values.category === "Grocery" ? 'selected' : 'category-item'}>
        <div class="align-category">
          <span class="material-symbols-outlined">shopping_cart</span>
          <p>Grocery</p>
        </div>
      </button>
  
      <button onclick={() => selectCategory("Restaurant")} class={values.category === "Restaurant" ? 'selected' : 'category-item'}>
        <span class="material-symbols-outlined">restaurant</span>
        <p>Restaurant</p>
      </button>
  
      <button onclick={() => selectCategory("Petrol")} class={values.category === "Petrol" ? 'selected' : 'category-item'}>
        <span class="material-symbols-outlined">local_gas_station</span>
        <p>Petrol</p>
      </button>
  
      <button onclick={() => selectCategory("Health")} class={values.category === "Health" ? 'selected' : 'category-item'}>
        <span class="material-symbols-outlined">medical_services</span>
        <p>Health</p>
      </button>
  
      <button onclick={() => selectCategory("Iyarkai Foods")} class={values.category === "Iyarkai Foods" ? 'selected' : 'category-item'}>
        <span class="material-symbols-outlined">eco</span>
        <p>Iyarkai</p>
      </button>
  
      <button onclick={() => selectCategory("Bus Travel")} class={values.category === "Bus Travel" ? 'selected' : 'category-item'}>
        <span class="material-symbols-outlined">directions_bus</span>
        <p>Bus Travel</p>
      </button>
  
      <button onclick={() => selectCategory("Gifts")} class={values.category === "Gifts" ? 'selected' : 'category-item'}>
        <span class="material-symbols-outlined">featured_seasonal_and_gifts</span>
        <p>Gifts</p>
      </button>
      
      <button onclick={() => selectCategory("Dress Purchase")} class={values.category === "Dress Purchase" ? 'selected' : 'category-item'}>
        <span class="material-symbols-outlined">apparel</span>
        <p>Dress</p>
      </button>
  
      <button onclick={() => selectCategory("Other")} class={values.category === "Other" ? 'selected' : 'category-item'}>
        <span class="material-symbols-outlined">more_horiz</span>
        <p>Other</p>
      </button>
  </div>
</div>

<!-- 4. Description Card -->
<div class="notes-card">
  <h5 class="field-label">DESCRIPTION</h5>
  <input 
    bind:value={values.description}
    type="text" 
    class="note-input" 
    placeholder="What was this for? (e.g. Morning coffee)" 
  />
</div>

<button onclick={onAddClick} class="save-btn">Save Expense</button>
<div style="height:100px"></div>

{#if showSuccess}                                                                                                                                                           
      <div class="toast-popup">                                                                                                                                                 
        ✓ Expense added successfully!                                                                                                                                           
      </div>                                                                                                                                                                    
{/if} 

</main>

<style>
main{
  width: 100%;
  margin-left: 20px;
  margin-right: 30px;
}
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
.field-card {
  background-color: #fff;
  padding: 24px 32px;
  border-radius: 16px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}
.field-label {
  color: #6349C0;
  font-size: 13px;
  font-weight: 700;
  margin: 0 0 12px 0;
  letter-spacing: 0.5px;
}
.align {
  display: flex;
  align-items: center;
}
.rs-symbol {
  font-size: 28px;
  margin-right: 8px;
  color: #181C20;
  font-weight: 700;
  line-height: 1;
}
.big-input {
  width: 100%;
  font-size: 28px;
  font-weight: 700;
  border: none;
  outline: none;
  color: #181C20;
  font-family: inherit;
  background: transparent;
  padding: 0;
}
.big-input::placeholder {
  color: #D8DADF;
  font-weight: 500;
}
.card {
  padding: 24px;
  background-color: #F1F4F9;
  margin-bottom: 20px;
  border-radius: 16px;
}
.category {
  color: #6349C0;
  font-size: 13px;
  font-weight: 700;
  margin: 0 0 12px 0;
  letter-spacing: 0.5px;
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
  padding: 24px 32px;
  background-color: #fff;
  border-radius: 16px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}
.note-input {
  width: 100%;
  border: none;
  outline: none;
  padding: 0;
  font-size: 16px;
  color: #181C20;
  font-family: inherit;
  background: transparent;
}
.note-input::placeholder {
  color: #D8DADF;
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
  font-family: inherit;
}
.save-btn:active {
  transform: scale(0.98);
}

.toast-popup {                                                                                                                                                              
      position: fixed;                                                                                                                                                          
      top: 24px;                                                                                                                                                                
      right: 24px;                                                                                                                                                              
      background-color: #6349C0;                                                                                                                                                
      color: #ffffff;                                                                                                                                                           
      padding: 14px 24px;                                                                                                                                                       
      border-radius: 12px;                                                                                                                                                      
      font-weight: 600;                                                                                                                                                         
      box-shadow: 0 4px 16px rgba(99, 73, 192, 0.3);                                                                                                                            
      z-index: 9999;                                                                                                                                                            
      animation: fadeIn 0.3s ease-out;                                                                                                                                          
    }                                                                                                                                                                           
                                                                                                                                                                                
    /* @keyframes fadeIn {                                                                                                                                                         
      from { opacity: 0; transform: translateY(-10px); }                                                                                                                        
      to { opacity: 1; transform: translateY(0); }                                                                                                                              
    }       */
</style>
