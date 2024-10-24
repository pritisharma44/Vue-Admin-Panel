<template>
  <nav class="sidebar bg-light border-end">
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link class="nav-link d-flex align-items-center" to="/dashboard">
          <i class="bi bi-house"></i>
          <span class="ms-2">Dashboard</span>
        </router-link>
      </li>
      <!-- Add more items as needed -->
      <li class="nav-item">
        <router-link class="nav-link d-flex align-items-center" to="/customer-management">
          <i class="bi bi-people"></i>
          <span class="ms-2">Customer Management</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SideBar',
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 56px; /* Account for the height of the fixed header */
  left: 0;
  width: 250px;
  height: 100vh;
  padding-top: 20px;
  background-color: #f8f9fa;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}

.nav-link:hover {
  background-color: #e9ecef;
  border-radius: 5px;
}

.nav-item {
  margin-bottom: 5px;
}

.bi {
  font-size: 1.2rem;
}
</style>
