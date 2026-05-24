<script lang="ts">
  import { page } from '$app/stores';
  import add_icon from "$lib/assets/add.png";
  import history_icon from "$lib/assets/history.png";
  import dashboard_icon_clicked from "$lib/assets/dashboard_onclicked.png";
</script>

<nav class="bottom-nav-bar">
  <a href="/" class="nav-item" class:active={$page.url.pathname === '/'}>
    <img src={dashboard_icon_clicked} class="icon" alt="Dashboard" />
    <span>DASHBOARD</span>
  </a>
  
  <a href="/addExpense" class="nav-item" class:active={$page.url.pathname === '/addExpense'}>
    <img src={add_icon} class="icon" alt="Add Expense" />
    <span>NEW EXPENSE</span>
  </a>

  <a href="/history" class="nav-item" class:active={$page.url.pathname === '/history'}>
    <img src={history_icon} class="icon" alt="History" />
    <span>HISTORY</span>
  </a>
</nav>

<style>
  .bottom-nav-bar {
    box-sizing: border-box;
    padding: 10px 32px;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
    z-index: 100;
  }
  
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    text-decoration: none;
    padding: 10px;
    border-radius: 12px;
    transition: background-color 0.2s;
    flex: 1;
  }

  .nav-item span {
    font-size: 11px;
    font-weight: 600;
    color: #797584;
  }

  .nav-item.active span {
    color: #6349c0;
  }

  .nav-item:hover {
    background-color: #f1f4f9;
  }

  .nav-item.active {
    background-color: #f1edff;
  }

  .icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
</style>
