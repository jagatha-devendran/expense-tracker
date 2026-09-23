<script>
// @ts-nocheck
  import { onMount } from "svelte";
  import ProfileDropdown from "./ProfileDropdown.svelte";
  import { handleLogout } from "$lib/utils/logout";

  
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
        <img src="" alt="">
        <h3>Expense Tracker</h3>
    </div>

    <div class="profile-container" bind:this={profileContainer}>
        <button class="profile" onclick={toggleProfile} type="button" aria-expanded={showProfile} aria-haspopup="true">
            <div class="circle-container">
                <h3 class="text">{username?.charAt(0).toUpperCase()}</h3>
            </div>
            <h4>{username}</h4>
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
    padding-bottom: 20px;
    
}

.profile-container {
    position: relative;
}

.title-icon{
    display: flex;
    justify-content: space-between;
}
.profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
.circle-container {
  width: 30px;
  height: 30px;
  background-color: #7f5ef7;
  border-radius: 50%; 
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text{
    color: aliceblue;
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