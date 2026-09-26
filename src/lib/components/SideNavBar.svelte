<script lang="ts">
    import { page } from '$app/stores';
    import add_icon from "$lib/assets/add.png";
    import history_icon from "$lib/assets/history.png";
    import dashboard_icon_clicked from "$lib/assets/dashboard_onclicked.png";
  </script>
  
  <nav class="side-nav-bar">
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
    .side-nav-bar {
      box-sizing: border-box;
      padding: 10px 16px;
      width: 200px;
      min-height: calc(100vh - 90px);
      background-color: #F4F4FC;
      display: flex;
      flex-direction: column;
      gap: 10px;
      position: sticky;
      left: 0;
      overflow: hidden;
      box-shadow: 0 -2px 10px rgba(0,0,0,0.05);      
    }
    
    .nav-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      gap: 10px;
      text-decoration: none;
      padding: 10px;
      border-radius: 12px;
      transition: background-color 0.2s;
      /* flex: 1; */
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
  