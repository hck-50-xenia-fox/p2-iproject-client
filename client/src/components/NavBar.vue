<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";
export default {
  name: "NavBar",
  methods: {
    ...mapActions(useUserStore, ["signOut"]),
    changeTheIconNavBar() {
      const menu = document.querySelector(".mobile-menu");
      menu.classList.toggle("hidden");
    },
  },
  computed: {
    ...mapState(useUserStore, ["isSignin"]),
  },
};
</script>
<template>
  <nav class="bg-black">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!--logo-->
          <div>
            <RouterLink to="/" class="flex py-4 px-2 text-2xl text-white">
              Tisanovat
            </RouterLink>
          </div>
        </div>
        <!--secondary-->
        <div class="hidden md:flex items-center space-x-3">
          <RouterLink
            to="/signup"
            class="py-1.5 px-3 hover:bg-myWhite text-sm text-white hover:text-white rounded-full duration-500"
            v-show="!isSignin"
            >Sign up</RouterLink
          >
          <RouterLink
            to="/signin"
            class="py-1.5 font-medium px-3 text-black text-sm bg-white hover:bg-gray-300 duration-500 rounded-full"
            v-show="!isSignin"
            >Log in</RouterLink
          >
          <a
            href=""
            class="py-2 px-3 text-sm text-yellow-50 hover:text-red-600"
            v-show="isSignin"
            @click.prevent="signOut"
            >Sign Out
          </a>
          <RouterLink v-show="isSignin" to="/favorites"
            ><svg
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </RouterLink>
        </div>
        <!-- mobile button -->
        <div class="md:hidden flex items-center">
          <button class="mobile-menu-button">
            <svg
              class="h6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              @click="changeTheIconNavBar"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div class="mobile-menu hidden md:hidden">
      <RouterLink
        to="/signin"
        class="block py-2 px-4 text-sm text-mypink hover:bg-gray-900"
        v-show="!isSignin"
        >Sign In</RouterLink
      >
      <RouterLink
        to="/signup"
        class="block py-2 px-4 text-sm hover:bg-gray-900 hover:text-white"
        v-show="!isSignin"
        >Sign Up</RouterLink
      >
      <a
        href=""
        class="block py-2 px-4 text-sm bg-gray-900 text-yellow-50 shadow hover:text-mypink"
        v-show="isSignin"
        @click.prevent="signOut"
        >Sign Out
      </a>
      <RouterLink
        to="/favorites"
        class="block py-2 px-4 text-sm hover:bg-gray-900 hover:text-white"
        v-show="isSignin"
        >Favorite</RouterLink
      >
    </div>
  </nav>
</template>
