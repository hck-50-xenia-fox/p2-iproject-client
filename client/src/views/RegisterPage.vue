<script>
import { mapActions } from "pinia";
import { useStore } from "../stores";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useStore, ["handleRegister"]),
    handlerRegister() {
      this.handleRegister(this.username, this.email, this.password);
    },
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
              <div
                class="col-md-6 col-lg-5 d-none d-md-block align-self-center"
              >
                <img
                  src="https://i.pinimg.com/736x/6f/35/0d/6f350d177d15776f7874b5c4d0e68a5b.jpg"
                  alt="login form"
                  class="img-fluid mt-5"
                  style="border-radius: 1rem 0 0 1rem"
                />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <form v-on:submit.prevent="handlerRegister">
                    <div class="d-flex align-items-center mb-3 pb-1">
                      <i
                        class="fas fa-cubes fa-2x me-3"
                        style="color: #ff6219"
                      ></i>
                    </div>
                    <h3 class="h1 fw-bold mb-3">SIGN UP</h3>

                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                      Add your account
                    </h5>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="username">Username:</label>
                      <input
                        type="username"
                        id="username"
                        class="form-control form-control-lg"
                        v-model="username"
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="email"
                        >Email address:</label
                      >
                      <input
                        type="email"
                        id="email"
                        class="form-control form-control-lg"
                        v-model="email"
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="password">Password:</label>
                      <input
                        type="password"
                        id="password"
                        class="form-control form-control-lg"
                        v-model="password"
                      />
                    </div>

                    <div class="pt-1 mb-4">
                      <button
                        class="btn btn-dark btn-lg btn-block"
                        type="submit"
                      >
                        SIGN UP
                      </button>
                    </div>
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
