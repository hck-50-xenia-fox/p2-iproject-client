<script>
import { mapActions } from "pinia";
import { useIndexStore } from "../stores";

export default {
  name: "RegisterView",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    ...mapActions(useIndexStore, ["submitRegister"]),
  },
};
</script>

<template>
  <section
    class="d-flex justify-content-center align-items-center"
    style="background-color: black; min-height: 100vh"
    id="login-section"
  >
    <div
      class="container h-50 justify-content-center align-items-center"
      style="transform: scale(90%)"
    >
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-sm-8 col-sm-2">
          <div class="row justify-content-center">
            <div class="col-md-5 col-lg-12 col-xl-7">
              <p
                class="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-light bg-black"
              >
                We're so excited to have you here!
              </p>
              <p class="text-center h4 h3 mb-3 fw-normal text-light bg-black">
                Sign up to discover our website
              </p>
              <div class="mt-5 form-signin w-100 m-auto">
                <form
                  id="register-form"
                  @submit.prevent="submitRegister(user)"
                  class="mx-1 mx-md-4"
                >
                  <div class="form-floating mb-2">
                    <input
                      type="text"
                      class="form-control"
                      id="register-username"
                      v-model="user.username"
                      placeholder="name"
                      required
                    />
                    <label for="floatingInput">Username</label>
                  </div>
                  <div class="form-floating mb-2">
                    <input
                      type="email"
                      class="form-control"
                      id="register-email"
                      v-model="user.email"
                      placeholder="name@example.com"
                      required
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating mb-2">
                    <input
                      type="password"
                      class="form-control"
                      id="register-password"
                      v-model="user.password"
                      placeholder="Enter your password..."
                      autocomplete="off"
                      required
                    />
                    <label for="floatingPassword">Password</label>
                  </div>

                  <button
                    class="w-100 btn btn-light border-0 mt-3"
                    type="submit"
                    style="background-color: #1db954"
                    @click="submitRegister(user)"
                  >
                    Sign up
                  </button>
                  <div>
                    <p class="text-center text-light bg-blackmt-5 mt-5">
                      I already have an account!
                      <a
                        @click.prevent="$router.push('/login')"
                        type="submit"
                        class="fw-bold text-light bg-black"
                      >
                        <u>Sign In</u>
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
