<script>
import { mapActions } from "pinia";
import { useStore } from "../stores/index";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useStore, ["handleLogin", "handleCredentialResponse"]),
    handlerLogin() {
      this.handleLogin(this.email, this.password);
    },
    handlerRegister() {
      this.$router.push("/register");
    },
    userGoogleLogin() {
      const cb = this.handleCredentialResponse;
      window.onload = function () {
        google.accounts.id.initialize({
          client_id:
            "262524376011-eb8sqg721vdrdptctcucqhrut5gpohqb.apps.googleusercontent.com",
          callback: cb,
        });
        google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          { theme: "outline", size: "large" } // customization attributes
        );
      };
    },
  },
  created() {
    this.userGoogleLogin();
  },
};
</script>
<template>
  <section class="vh-100" style="background-color: white">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="https://i.pinimg.com/736x/6f/35/0d/6f350d177d15776f7874b5c4d0e68a5b.jpg"
                  alt="login form"
                  class="img-fluid mt-5"
                  style="border-radius: 1rem 0 0 1rem"
                />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form>
                    <div class="d-flex align-items-center mb-3 pb-1">
                      <i
                        class="fas fa-cubes fa-2x me-3"
                        style="color: #ff6219"
                      ></i>
                    </div>
                    <form v-on:submit.prevent="handlerLogin">
                      <h3 class="h1 fw-bold mb-3">SIGN IN</h3>

                      <h5
                        class="fw-normal mb-3 pb-3"
                        style="letter-spacing: 1px"
                      >
                        Sign into your account
                      </h5>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          class="form-control form-control-lg"
                          v-model="email"
                        />
                        <label class="form-label" for="form2Example17"
                          >Email address</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          class="form-control form-control-lg"
                          v-model="password"
                        />
                        <label class="form-label" for="form2Example27"
                          >Password</label
                        >
                      </div>

                      <div
                        style="display: flex; justify-content: space-between"
                        class="pt-1 mb-4"
                      >
                        <button
                          style="width: 50%"
                          class="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>

                        <div class="wrapper text-center">
                          <div id="buttonDiv"></div>
                        </div>
                      </div>
                    </form>

                    <p class="mb-5 pb-lg-2" style="color: #393f81">
                      Don't have an account?
                      <a
                        href="#!"
                        style="color: #393f81"
                        @click.prevent="handlerRegister"
                        >Register here</a
                      >
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
