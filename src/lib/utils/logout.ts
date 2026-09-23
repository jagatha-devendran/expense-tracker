import { goto } from "$app/navigation";

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
