import { goto } from "$app/navigation";
import type { Expense } from "$lib/models/Expense";
import { apiData } from "$lib/store";

    export async function handleLogout() {                                                                                                                                  
      // let response = await fetch(targetUrl);
                                                                                                                                                               
      let response = await fetch('http://localhost:8080/auth/logout', {                                                                                                        
        method: 'POST',                                                                                                                                                         
        headers: { 'Content-Type': 'application/json'},
        credentials: 'include'                                                                                                                                     
      });                                                                                                                                                                       
      let data = await response.text(); 
                                                                                                                                                                      
      if (response.ok) {    
        console.log(data);           
        goto("/login")                                                                                                                                                                                                                                               
      }                                                                                                                                                                         
    }  

    export async function handleLogin(email: any, password: any) {                                                                                                                                              
      const loginData = { email, password };                                                                                                                                    
                                                                                                                                                                                
      const response = await fetch('http://localhost:8080/auth/login', {                                                                                                        
        method: 'POST',                                                                                                                                                         
        headers: { 'Content-Type': 'application/json' },                                                                                                                        
        credentials: 'include', // <--- Sends and receives cookies                                                                                                              
        body: JSON.stringify(loginData)                                                                                                                                         
      });                                                                                                                                                                       
                                                                                                                                                                                
      if (response.ok) {    
        await response.json().then((data) => {
          localStorage.setItem('username', data.username);
          localStorage.setItem('email', data.email);
        });        
        // console.log(json.username)
        console.log('Login successful! Cookie stored by browser.');  
        // alert("You have logged in, welcome aboard!"); 
        sessionStorage.setItem('justLoggedIn', 'true');                                                                                                                           
        goto("/")                                                                                                                                                                                                                                               
      }                                                                                                                                                                         
    }  

    // Function to send signup data to your Spring Boot backend
  export async function handleSignup(name: any, email: any, password: any) {
    const signupData = { name, email, password };
    console.log('Signing up with:', signupData);

    // Connect to your Spring Boot endpoint:
    const response = await fetch('http://localhost:8080/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signupData)
    });
    const data = response.json();
    console.log('Signup Response:', data);
    handleLogin
    // goto("/")
  }

  export async function addData(values: { name: string; price: number | ""; description: string; category: string; date: string; }) {     
    const expense: Expense = {
      name: values.name.trim() || values.category || 'Expense',
      price: typeof values.price === 'number' ? values.price : (parseFloat(values.price as string) || 0),
      category: values.category,
      description: values.description,
      date: values.date
    };

    console.log("Adding Expense:", expense);
    // await addExpense(expense);
    const response = await fetch('http://localhost:8080/addExpense', {
      method: 'POST',
      body: JSON.stringify(expense),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("Added Expense");
  }

  export async function getAllExpense() {
    const response = await fetch('http://localhost:8080/history', {
      method: 'GET',
      credentials: 'include', // Sends the jwt_token cookie
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 401) {
      console.warn('Unauthorized access. Redirecting to login...');
      goto('/login');
      return;
    }

    const data = await response.json();
    if (response.ok) {
      apiData.set(data);
    } else {
      console.error('Failed to fetch history:', data);
    }    
  }

  export async function home(){
    fetch("http://localhost:8080/home", {
      credentials: "include"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        apiData.set(data);        
      }).catch(error => {
        console.log(error);
        return [];
      });
  }

  export async function getDetails(){
    fetch("http://localhost:8080/getDetails", {
      credentials: "include"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.income);
        // income = data.
                
      }).catch(error => {
        console.log(error);
        return [];
      });
  }

  export async function saveSettings(income:number, saving_goal:number) {     

    console.log("Saving Settings:", income, saving_goal);
    // await addExpense(expense);
    const response = await fetch('http://localhost:8080/saveSettings', {
      method: 'POST',
      body: JSON.stringify({"monthly_income":income, 
                            "savings_goal":saving_goal}),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }