<template>
  <div class="dashboard">
    <h2>Dashboard</h2>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card">
          <div
            class="card-body d-flex align-items-center justify-content-between"
          >
            <div>
              <h5>Total Users</h5>
              <h3>5</h3>
            </div>
            <img src="../assets/logo.png" alt="Icon" class="icon" />
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card">
          <div
            class="card-body d-flex align-items-center justify-content-between"
          >
            <div>
              <h5>Total Products</h5>
              <h3>9</h3>
            </div>
            <img src="../assets/logo.png" alt="Icon" class="icon" />
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card">
          <div
            class="card-body d-flex align-items-center justify-content-between"
          >
            <div>
              <h5>Total Products</h5>
              <h3>9</h3>
            </div>
            <img src="../assets/logo.png" alt="Icon" class="icon" />
          </div>
        </div>
      </div>
      <!-- Repeat for other cards -->
    </div>
  </div>
</template>

<script>
export default {
  name: "DashBoard",
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.icon {
  width: 50px;
  height: 50px;
}
</style>
