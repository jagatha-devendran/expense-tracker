<script lang="ts">
  
  import { collection, FieldValue, getDocs, getFirestore, Timestamp } from "firebase/firestore";
  import {app} from "../configs/FirebaseConfig"
  import {Expenses} from "../model/Expenses"
  import { doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore"; 
  // import { arrayUnion } from "firebase/firestore/lite";

  const db = getFirestore(app);

  let expenseList: Array<Expenses> = $state([]);


  async function readDb(){
	
	const querySnapshot = await getDocs(collection(db, "expenses"));
  	querySnapshot.forEach((doc) => {
      for (let i = 0; i < doc.data().expense.length; i++) {  
        console.log(doc.data().expense[i])
      }
      doc.data().expense.forEach((expense: Expenses) => {
        let expenseItem = new Expenses(expense.icon, expense.name, expense.price)
        expenseList.push(expenseItem);
        console.log(expenseItem.name);
      });      
      console.log(expenseList);
      });    
  }
  
  async function addData(expense: Expenses){
    // let { expense }: Props = $props();
    const ref = doc(db, "expenses", "eg")  
    await setDoc(ref, {expense:   arrayUnion({icon: expense.icon, name: expense.name, price: expense.price})})
    .then(() => {
      console.log("Data added successfully")
    })
    .catch(error => {
      console.log(error)
    });
  }


</script>

<button onclick={readDb}>get Data</button> 
 <h1>{expenseList[0]}</h1> 
{#each expenseList as expense }
  <div class="img"> 
    <img src={expense.icon} alt="no_img">
  </div>  
  <tr>
  <td><img src={expense.icon} alt="no_img"> </td> 
  <td>{expense.name}</td>
  <td>{expense.price}</td>
  <!-- <td>{country.code}</td>  -->
  </tr>
  {/each}

<button onclick={() => addData(new Expenses("jk", "jkhd", 10))}>set Data</button>


