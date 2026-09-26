<script lang="ts">
  import { handleLogin } from "$lib/utils/server";

  let email = $state('');
  let password = $state('');
</script>

<svelte:head>
  <title>Sign In - ExpenseTracker</title>
</svelte:head>

<div class="container">
  <h1>Sign In</h1>
  <p class="description">Welcome back! Please enter your details.</p>

  <!-- Login Form Card -->
  <div class="card">
    <div class="input-group">
      <label for="email">EMAIL</label>
      <input 
        id="email" 
        type="email" 
        bind:value={email} 
        placeholder="you@example.com" 
      />
    </div>

    <div class="input-group">
      <label for="password">PASSWORD</label>
      <input 
        id="password" 
        type="password" 
        bind:value={password} 
        placeholder="••••••••" 
      />
    </div>

    <button onclick={()=>handleLogin(email, password)} class="submit-btn">
      Sign In
    </button>
  </div>

  <!-- Link to Sign Up page -->
  <p class="footer-text">
    Don't have an account?
    <a href="/signup" class="link">Sign Up</a>
  </p>
</div>


<style>


  .container {
    max-width: 440px;
    margin: 40px auto;
  }

  h1 {
    font-size: 36px;
    font-weight: 800;
    color: #6349C0;
    margin-bottom: 8px;
  }

  .description {
    font-size: 16px;
    color: #30628C;
    opacity: 0.7;
    margin-bottom: 28px;
  }

  .card {
    background-color: white;
    padding: 28px;
    border-radius: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  }

  .input-group {
    margin-bottom: 20px;
  }

  label {
    display: block;
    font-size: 13px;
    font-weight: 700;
    color: #6349C0;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 14px 16px;
    font-size: 15px;
    border-radius: 10px;
    border: 1px solid #E2E8F0;
    background-color: #F1F4F9;
    outline: none;
    color: #181C20;
    font-family: inherit;
  }

  input:focus {
    border-color: #6349C0;
    background-color: white;
  }

  .submit-btn {
    width: 100%;
    background-color: #6349C0;
    color: white;
    border: none;
    padding: 16px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    margin-top: 10px;
    font-family: inherit;
    transition: background-color 0.2s;
  }

  .submit-btn:hover {
    background-color: #553bb3;
  }

  .footer-text {
    text-align: center;
    color: #797584;
    font-size: 14px;
    margin-top: 24px;
  }

  .link {
    color: #6349C0;
    font-weight: 700;
    text-decoration: none;
    margin-left: 4px;
  }

  .link:hover {
    text-decoration: underline;
  }
</style>
