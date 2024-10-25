<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h5>Create New User</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="user.name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="user.email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="user.password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Create User</button>
          <router-link to="/users" class="btn btn-secondary ms-2"
            >Cancel</router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  name: "UserCreate",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          `${process.env.VUE_APP_API_BASE_URL}users`,
          this.user,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("User created:", response.data);
        this.$router.push("/users");
      } catch (error) {
        console.error("Error creating user:", error);
      }
    },
  },
};
</script>
  
  <style scoped>
/* Add any custom styling here */
</style>
  