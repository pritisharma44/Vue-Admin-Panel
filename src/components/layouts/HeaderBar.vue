<template>
  <header class="navbar navbar-light bg-light fixed-top">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <div class="navbar-brand d-flex align-items-center">
        <img src="/path-to-logo.png" alt="Logo" class="logo" />
        <span class="ms-2">Admin Panel</span>
      </div>
      <div class="profile">
        <img src="/path-to-profile-pic.jpg" class="rounded-circle" alt="Profile" width="40" height="40">
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
/* Styles for the header */
.logo {
  height: 40px;
}

.navbar {
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.profile img {
  border-radius: 50%;
}
</style>
