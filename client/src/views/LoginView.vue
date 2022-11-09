<script>
import { mapActions, mapWritableState } from "pinia";
import { useIndexStore } from "../stores";

export default {
  name: "LoginView",
  data() {
    return {
      user: {},
    };
  },
  computed: {
    ...mapWritableState(useIndexStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["submitLogin"]),
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
            <div class="col-md-5 col-lg-12 col-xl-6">
              <p
                class="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-light bg-black"
              >
                Hello!
              </p>
              <p class="text-center h4 h3 mb-3 fw-normal text-light bg-black">
                Please sign in
              </p>
              <div class="mt-5 form-signin w-100 m-auto">
                <form
                  id="login-form"
                  @submit.prevent="submitLogin(user)"
                  method="post"
                >
                  <div class="form-floating mb-2">
                    <input
                      type="email"
                      class="form-control"
                      id="login-email"
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
                      id="login-password"
                      v-model="user.password"
                      placeholder="Enter your password..."
                      autocomplete="off"
                      required
                    />
                    <label for="floatingPassword">Password</label>
                  </div>

                  <div class="checkbox mb-3 text-light bg-black">
                    <label>
                      <input
                        class="text-light bg-black"
                        type="checkbox"
                        value="remember-me"
                      />
                      Remember me
                    </label>
                  </div>
                  <button
                    class="w-100 btn btn-light border-0"
                    type="submit"
                    style="background-color: #1db954"
                    @click="submitLogin(user)"
                  >
                    Sign in
                  </button>
                </form>
              </div>

              <p class="text-center text-light bg-black mt-5 mb-0">
                Not registered?
                <a
                  @click.prevent="$router.push('/register')"
                  href="#!"
                  class="fw-bold text-light bg-black"
                  ><u>Sign Up</u></a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
