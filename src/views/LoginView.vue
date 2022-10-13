<script>
import { mapActions } from "pinia";
import { useIndexStore } from "../stores";

export default {
  data() {
    return {
      credentials: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useIndexStore, [
      "login",
      "handleCredentialResponse",
      "signInWithFacebook",
    ]),

    googleBtn() {
      window.onload = () => {
        const cb = this.handleCredentialResponse;
        google.accounts.id.initialize({
          client_id:
            "221342135828-pnf98n5n2j73okpvia724h8r8qe8rnoi.apps.googleusercontent.com",
          callback: cb,
        });
        google.accounts.id.renderButton(document.getElementById("google-btn"), {
          theme: "outline",
          width: 390,
        });
      };
    },
  },
  created() {
    this.googleBtn();
  },
};
</script>

<template>
  <section class="">
    <div class="items-center px-5 py-12 lg:px-20">
      <div
        class="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0"
      >
        <div class="mt-8">
          <div class="mt-6">
            <form @submit.prevent="login(credentials)" class="space-y-6">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-neutral-600"
                >
                  Email address
                </label>
                <div class="mt-1">
                  <input
                    v-model="credentials.email"
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required=""
                    placeholder="Your Email"
                    class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  />
                </div>
              </div>

              <div class="space-y-1">
                <label
                  for="password"
                  class="block text-sm font-medium text-neutral-600"
                >
                  Password
                </label>
                <div class="mt-1">
                  <input
                    v-model="credentials.password"
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required=""
                    placeholder="Your Password"
                    class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    placeholder="Your password"
                    class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                  />
                  <label
                    for="remember-me"
                    class="block ml-2 text-sm text-neutral-600"
                  >
                    Remember me
                  </label>
                </div>

                <div class="text-sm">
                  <a
                    href="#"
                    class="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div class="relative my-4">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-neutral-600">
                  Or continue with
                </span>
              </div>
            </div>

            <span id="google-btn"></span>

            <button
              @click.prevent="signInWithFacebook"
              class="flex items-center justify-center w-full px-4 py-2 mt-5 space-x-3 text-sm text-center text-white transition-colors duration-200 transform bg-blue-500 border rounded-lg dark:text-gray-300 dark:border-gray-300 hover:bg-gray-600 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                />
              </svg>
              <span class="text-sm text-white dark:text-gray-200"
                >Login with facebook</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style></style>
