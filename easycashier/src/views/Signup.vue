<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";

// import ButtonGenerate from "./button.vue";
export default {
  name: "registerPage",
  data() {
    return {
      userRegister: {
        email: "",
        password: "",
        companyName: "",
        address: "",
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, ["register"]),
    handleRegister() {
      this.register(this.userRegister);
    },
  },
};
</script>
<template>
  <main class="form-signup mt-5" style="background-color: whitesmoke">
    <form @submit.prevent="handleRegister">
      <h1 class="h3 mb-3 fw-normal text-center">Please fill the form</h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          v-model="userRegister.email"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="userRegister.password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="please fill the companyName"
          v-model="userRegister.companyName"
        />
        <label for="floatingInput">companyName</label>
      </div>
      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style="height: 100px; margin-bottom: 10px"
          v-model="userRegister.address"
        ></textarea>
        <label for="floatingTextarea2">Address</label>
      </div>
      <br />
      <div class="d-flex justify-content-center gap-2">
        <button class="w-45 btn btn-lg btn-warning" type="submit">
          <router-link
            class="text-dark"
            style="text-decoration: none"
            to="/login"
            >Cancel</router-link
          >
        </button>
        <button class="w-45 btn btn-lg btn-primary" type="submit">
          Sign Up
        </button>
      </div>
    </form>
  </main>
</template>
<style>
.form-signup {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  border-color: black;
}

.form-signup .checkbox {
  font-weight: 400;
}

.form-signup .form-floating:focus-within {
  z-index: 2;
}

.form-signup input {
  margin-bottom: 10px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
