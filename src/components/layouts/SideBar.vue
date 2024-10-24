<template>
  <div class="sidebar card">
    <nav class="card-body">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link 
            class="nav-link d-flex align-items-center" 
            to="/dashboard"
            active-class="active"
            exact-active-class="active"
          >
            <i class="bi bi-house"></i>
            <span class="ms-2">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link 
            class="nav-link d-flex align-items-center" 
            to="/users"
            active-class="active"
            exact-active-class="active"
          >
            <i class="bi bi-person"></i>
            <span class="ms-2">Users</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  padding-top: 60px; 
  background-color: #d4f1f1; 
  border-radius: 10px; 
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
}

.card-body {
  padding: 0; 
}

.nav-link {
  padding: 8px 13px;
  color: black; 
}

.nav-link:hover {
  background-color: #e4626f; 
  border-radius: 5px; 
  color: white;
}
.nav-link.active {
  background-color: #e4626f; 
  font-weight: bold;
  color: white;
  border-radius: 5px; 
}
.bi {
  font-size: 1.2rem;
}

.nav-item {
  margin-bottom: 10px;
}
</style>
