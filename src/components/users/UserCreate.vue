<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h5>Create New User</h5>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="row">
            <div class="col-6 mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter name"
                v-model="user.name"
              />
              <small v-if="errors.name" class="text-danger">{{ errors.name }}</small>
            </div>
            <div class="col-6 mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
                v-model="user.email"
              />
              <small v-if="errors.email" class="text-danger">{{ errors.email }}</small>
            </div>
          </div>
          <div class="row">
            <div class="col-6 mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter password"
                v-model="user.password"
              />
              <small v-if="errors.password" class="text-danger">{{ errors.password }}</small>
            </div>
            <div class="col-6 mb-3">
              <label for="confirmPassword" class="form-label">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="confirmPassword"
                placeholder="Enter confirm password"
                v-model="confirmPassword"
              />
              <small v-if="passwordMismatch" class="text-danger">Passwords do not match.</small>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" :disabled="passwordMismatch">Create User</button>
          <router-link to="/users" class="btn btn-secondary ms-2">Cancel</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import * as Yup from "yup";

export default {
  name: "UserCreate",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
      confirmPassword: "",
      errors: {},
    };
  },
  computed: {
    passwordMismatch() {
      return this.user.password !== this.confirmPassword;
    },
  },
  methods: {
    async validateForm() {
      const schema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      });

      try {
        await schema.validate(this.user, { abortEarly: false });
        this.errors = {}; // Clear errors if validation passes
        return true;
      } catch (validationErrors) {
        // Reset errors before adding new ones
        this.errors = {};
        validationErrors.inner.forEach((error) => {
          this.errors[error.path] = error.message; // Direct assignment
        });
        return false;
      }
    },
    async submitForm() {
      if (this.passwordMismatch) {
        console.error("Passwords do not match.");
        return;
      }

      const isValid = await this.validateForm();
      if (!isValid) return;

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
