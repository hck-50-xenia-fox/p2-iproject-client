<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useMasterStore } from "../stores/masterStore";

export default {
  name: "Navbar",
  data() {
    return {
      loginUser: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useMasterStore, ["login", "logout"]),
    loginHandler() {
      this.login(this.loginUser);
      this.loginUser.email = "";
      this.loginUser.password = "";
    },
  },
  computed: {
    ...mapWritableState(useMasterStore, ["isLogin"]),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.isLogin = true;
    }
  },
};
</script>

<template>
  <nav class="bg-gray-100">
    <div class="max-w-6xl mx-auto">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <div>
            <a class="flex items-center py-5 px-2 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <span class="font-bold">FanGod.com</span>
            </a>
          </div>

          <div class="flex items-center space-x-1">
            <a
              @click.prevent="this.$router.push('/')"
              class="py-5 px-3 text-gray-700 hover:text-black cursor-pointer"
              >Home</a
            >
            <a
              @click.prevent="this.$router.push('/liveForum')"
              class="py-5 px-3 text-gray-700 hover:text-black cursor-pointer"
              >Live Forum</a
            >
          </div>
        </div>

        <div class="flex items-center space-x-1">
          <div>
            <form v-if="!isLogin" @submit.prevent="loginHandler()">
              <label for="">Email : </label>
              <input
                v-model="loginUser.email"
                class="rounded border borded-gray-900 mr-2 placeholder-opacity-10 pl-1"
                type="email"
                placeholder="input email here"
                required
              />
              <label for="">Password : </label>
              <input
                v-model="loginUser.password"
                class="rounded border borded-gray-900 mr-2 placeholder-opacity-10 pl-1"
                type="password"
                placeholder="input password here"
                required
              />
              <button
                type="submit"
                class="py-1 px-3 bg-blue-400 hover:bg-blue-300 text-blue-900 hover:text-blue-800 rounded shadow transition duration-300"
              >
                Login
              </button>
            </form>
          </div>
          <a v-if="isLogin" href="" class="py-5 px-3">Premium Member</a>
          <a
            v-if="isLogin"
            @click.prevent="this.$router.push('/profile')"
            class="py-5 px-3 cursor-pointer"
            >Profile</a
          >
          <a
            v-if="!isLogin"
            @click.prevent="this.$router.push('/register')"
            class="py-1 px-3 bg-green-400 hover:bg-green-300 text-green-900 hover:text-green-800 rounded shadow transition duration-300 cursor-pointer"
            >SignUp
          </a>
          <a
            @click.prevent="logout"
            v-if="isLogin"
            class="py-1 px-3 bg-red-400 hover:bg-red-300 text-red-900 hover:text-red-800 rounded shadow transition duration-300"
            >SignOut
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
