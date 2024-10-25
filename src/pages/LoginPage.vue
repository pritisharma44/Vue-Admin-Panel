<template>
  <div
    class="container d-flex justify-content-center align-items-center vh-100"
  >
    <div class="card" style="width: 25rem">
      <div class="card-body">
        <h5 class="card-title text-center">Login</h5>
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              aria-describedby="emailHelp"
            />
            <div v-if="errors.email" class="text-danger">
              {{ errors.email }}
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
            />
            <div v-if="errors.password" class="text-danger">
              {{ errors.password }}
            </div>
          </div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import * as Yup from "yup";
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  name: "LoginPage",
  setup() {
    const email = ref("");
    const password = ref("");
    const errors = ref({});
    const router = useRouter();

    const validationSchema = Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required."),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required."),
    });

    const validate = async () => {
      try {
        await validationSchema.validate(
          { email: email.value, password: password.value },
          { abortEarly: false }
        );
        errors.value = {};
        return true;
      } catch (err) {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        errors.value = validationErrors;
        return false;
      }
    };

    const handleSubmit = async () => {
      const isValid = await validate();
      if (isValid) {
        try {
          const response = await axios.post(
            `${process.env.VUE_APP_API_BASE_URL}login`,
            {
              email: email.value,
              password: password.value,
            }
          );
          localStorage.setItem("token", response.data.token);
          console.log("Login successful", response.data);
          router.push({ name: "DashBoard" });
        } catch (error) {
          console.error("Login failed", error);
        }
      }
    };

    return { email, password, errors, handleSubmit };
  },
};
</script>

<style scoped>
.container {
  background-color: #f8f9fa;
}

.card {
  border-radius: 10px;
}

.btn-primary {
  background-color: #007bff;
}
</style>
