<template>
  <div id="app" class="d-flex">
    <!-- Sidebar (fixed) -->
    <SideBar />

    <!-- Main content wrapper -->
    <div class="main-content w-100">
      <HeaderBar /> <!-- Header now part of the main content -->
      <div class="p-3">
        <!-- Main page content rendered here -->
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/layouts/HeaderBar.vue';
import SideBar from './components/layouts/SideBar.vue';

export default {
  name: 'App',
  components: {
    HeaderBar,
    SideBar,
  },
};
</script>

<style>
/* Ensure the sidebar is fixed and occupies only part of the screen */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
}

.main-content {
  margin-left: 250px; /* Width of the sidebar */
}

.sidebar {
  width: 250px;
  position: fixed;
  height: 100%;
  background-color: #f8f9fa;
}

header {
  height: 56px; /* Header height */
  background-color: #f8f9fa;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

main {
  padding-top: 70px; /* Ensure content starts after the header */
  background-color: #f8f9fa;
}
</style>
