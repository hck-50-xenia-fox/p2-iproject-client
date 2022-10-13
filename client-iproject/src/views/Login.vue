<script>
import { mapActions } from 'pinia';
import { useStoreIndex } from '../stores/storeIndex';

export default {
  name: "login",
  data() {
    return {
      loginCustomer: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useStoreIndex, ["doLogin"]),
    logIn() {
      this.doLogin(this.loginCustomer)
    }
  },
};
</script>

<template>
  <!-- Login -->
  <section class="container" id="login-section">
    <div class="row">
      <div class="col-6 mx-auto text-left">
        <div class="form-signin m-auto">
          <form @submit.prevent="logIn" id="login-form">
            <div class="col-12 text-center">
              <h1 class="mb-3 mt-5">
                <img src="../assets/Kalib.jpg" width="200" alt="Kalibro" />
              </h1>
            </div>
            <h2 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
              Sign into your account
            </h2>
            <span>Please enter your email and password</span>
            <div class="mb-3 mt-3">
              <div class="d-flex justify-content-between">
                <label for="login-email">Email</label>
              </div>
              <input v-model="loginCustomer.email" type="email" class="form-control" id="login-email" autocomplete="off"
                required />
            </div>
            <div class="mb-4">
              <div class="d-flex justify-content-between">
                <label for="login-password">Password</label>
              </div>
              <input v-model="loginCustomer.password" type="password" class="form-control" id="login-password"
                autocomplete="off" required />
            </div>
            <button class="btn btn-lg btn-primary rounded-pill w-100 p-2" type="submit">
              Log In
            </button>
            <br /><br />
            <div>
              Don't Have Account? &nbsp;
              <RouterLink to="/register">
                <button class="btn btn-primary">Register</button>
              </RouterLink>
            </div> <br>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End Login -->
</template>
