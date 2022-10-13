<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  data() {
    return {
      loginUser: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, ["login"]),
    handleLogin() {
      this.login(this.loginUser);
    },
  },
};
</script>
<template>
  <div class="row mt-5">
    <div class="col-12">
      <main class="form-signin" style="background-color: whitesmoke">
        <form @submit.prevent="handleLogin">
          <div class="d-flex justify-content-center">
            <!-- <img
              class="mb-10"
              src="../assets/slave_logo.jpg"
              alt=""
              width="120"
              style="align-items: center"
            /> -->
          </div>
          <h1 class="h3 mb-3 fw-normal text-center">Please sign in</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="loginUser.email"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              v-model="loginUser.password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="checkbox mb-3">
            <span
              >don't have account?
              <span><router-link to="/signup">sign up</router-link></span>
              here
            </span>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
        <div>or sign in with google :</div>
        <!-- <GoogleLogin :callback="callback" /> -->
      </main>
    </div>
  </div>
</template>
<style>
.form-signin {
  width: 200%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
