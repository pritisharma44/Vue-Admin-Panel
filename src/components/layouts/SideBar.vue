<template>
  <nav class="sidebar bg-light">
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link class="nav-link d-flex align-items-center" to="/dashboard">
          <i class="bi bi-house"></i>
          <span class="ms-2">Dashboard</span>
        </router-link>
      </li>
      <!-- More items -->
      <li class="nav-item">
        <router-link class="nav-link d-flex align-items-center" to="/users">
          <i class="bi bi-person"></i>
          <span class="ms-2">Users</span>
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
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  padding-top: 60px; /* To leave space under the header */
  background-color: #f8f9fa;
}

.nav-link {
  padding: 10px 15px;
}

.nav-link:hover {
  background-color: #e9ecef;
}

.bi {
  font-size: 1.2rem;
}
</style>
