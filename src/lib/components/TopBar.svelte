<script>
// @ts-nocheck
  import { onMount } from "svelte";
  import ProfileDropdown from "./ProfileDropdown.svelte";
  import { handleLogout } from "$lib/utils/server";

  
  // let username = localStorage.getItem("username") // [500] GET /
  // TypeError: localStorage.getItem is not a function This error occurs when there is no user and in the localStorage there is no item 
  // so to handle that we use the below line
  let username = $state(typeof window !== "undefined" ? (localStorage.getItem("username") || "User") : "User");
  // Check if running in the browser before accessing localStorage if it is not browser then undef so username bcomes User 
  // !== refers to "not strictly equal to"
  // window is a browser object; typeof window returns "object" in the browser and "undefined" on the server.
  // When your website runs in a browser like Chrome, the browser creates a window object automatically. 
  // It represents the browser window/tab where your webpage is running.
  // It contains things provided by the browser, for example:window.localStorage
  let showProfile = $state(false);
  let profileContainer = $state(null);

  onMount(() => {
    // username = localStorage.getItem("username") || "User";
  });

  function toggleProfile() {
    showProfile = !showProfile;
  }

  function handleClickOutside(event) {
    if (showProfile && profileContainer && !profileContainer.contains(event.target)) {
      showProfile = false;
    }
    
  }

  function handleKeydown(event) {
    if (event.key === "Escape") {
      showProfile = false;
    }
  }
</script>

<svelte:window onclick={handleClickOutside} onkeydown={handleKeydown} />

<header>
    <div class="title-icon">
        <img src="src/lib/assets/logo.png" alt="expense_tracker" class="img-align">
        <!-- <span class="material-symbols-outlined color">
        account_balance_wallet
        </span> -->
        <h3>Expense Tracker</h3>
    </div>

    <div class="profile-container" bind:this={profileContainer}>
        <button class="profile" onclick={toggleProfile} type="button" aria-expanded={showProfile} aria-haspopup="true">
            <div class="circle-container">
                <h3 class="text">{username?.charAt(0).toUpperCase()}</h3>
            </div>
            <p>{username}</p>
            <span class="material-symbols-outlined">stat_minus_1</span>       
        </button>

        {#if showProfile}
            <ProfileDropdown name={username} onLogout={handleLogout} />
        {/if}
    </div>
    
</header>
<style>

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    /* position: absolute;
    z-index: 1;
    width: 100%;
    left: 0px;
    top: 0px; */
}
.img-align{
  width: 90px;
  height: 90px;
  object-fit: contain;
  /* margin: 0px;
  padding: 0px;
  height: 100px;
  width: 100px; */
}
/* .color{
  color: #6349C0
} */
.profile-container {
    position: relative;
}

.title-icon{
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 5px; */
}
.profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
.circle-container {
  width: 37px;
  height: 37px;
  background-color: #7f5ef7;
  border-radius: 50%; 
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text{
    color: aliceblue;
    font-size: 16px;
}
p{
  font-size: 14px;
  font-weight: 600;
}
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
button{
    border: none;
    background-color: aliceblue;
}

</style>