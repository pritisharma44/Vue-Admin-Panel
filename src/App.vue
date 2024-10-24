<template>
  <div id="app">
    <HeaderBar />
    <div class="d-flex">
      <SideBar />
      <main class="flex-grow-1 p-3">
        <router-view />
      </main>
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
/* Global styles */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
}

main {
  margin-left: 250px; /* Ensure content shifts after sidebar */
  background-color: #f8f9fa;
  padding: 20px;
}

.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #f8f9fa;
}

.content {
  padding-top: 70px;
}
</style>
