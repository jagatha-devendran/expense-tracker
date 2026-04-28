<script>
  let add_icon = "src/lib/assets/add.png";
  let history_icon = "src/lib/assets/history.png";
  let dashboard_icon_clicked = "src/lib/assets/dashboard_onclicked.png";
</script>

<nav class="bottom-nav-bar">
  <a href="/" class="nav-item">
    <img src={dashboard_icon_clicked} alt="" />
    <span>DASHBOARD</span>
  </a>
  
  <a href="/addExpense" class="nav-item">
    <img src={add_icon} class="icon" alt="Add_Icon" />
    <span>NEW EXPENSE</span>
  </a>

  <a href="/history" class="nav-item">
    <img src={history_icon} class="icon" alt="" />
    <span>HISTORY</span>
  </a>
  
</nav>

<style>
  .bottom-nav-bar {
    padding: 32px;
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
  }
  
  span {
    font-family: Plus Jakarta Sans;
    font-size: 11px;
    font-weight: 600;
    color: #6349c0;
  }
  .icon{
    align-items: center;
  }
  
  .nav-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;    
  }
  
  a {
  text-decoration: none;
  }

  a:hover {
  background-color: #dcd3fd;
  width: 115px;
  height: 57px;
  border-radius: 16px;
  }
  
</style>
