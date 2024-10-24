<template>
  <header class="navbar navbar-light bg-light header-bar">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <div class="navbar-brand d-flex align-items-center">
        <span class="ms-2">Admin Panel</span>
      </div>
      <div class="profile">
        <img src="../../assets/logo.png" class="rounded-circle" alt="Profile" width="40" height="40">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
};
</script>

<style scoped>
.logo {
  height: 40px;
}

.navbar {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px; 
  margin-left: 20px; 
  margin-top: 10px;
  height: 60px;

}

.profile img {
  border-radius: 50%; 
}

.header-bar {
  padding: 10px; 
}
</style>
