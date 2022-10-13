<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";
import SecondGoogleSearch from "./SecondGoogleSearch.vue";
export default {
  name: "NavBar",
  methods: {
    ...mapActions(useUserStore, ["signOut"]),
    changeTheIconNavBar() {
      const menu = document.querySelector(".mobile-menu");
      menu.classList.toggle("hidden");
    },
  },
  props: ["isSignin"],
  components: { SecondGoogleSearch },
};
</script>
<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!--logo-->
          <div>
            <RouterLink to="/resto" class="flex py-4 px-2 text-2xl">
              Tisanovat<span class="ml-2 text-emerald-400">Eats</span>
            </RouterLink>
          </div>
        </div>
        <!--secondary-->
        <div class="flex items-center">
          <div class="py-2 px-3 border-2 rounded text-gray-600">ASAP</div>
          <div class="text-gray-600 px-2">to</div>
          <div class="relative mx-auto text-gray-600">
            <SecondGoogleSearch />
            <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
              <svg
                class="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style="enable-background: new 0 0 56.966 56.966"
                xml:space="preserve"
                width="512px"
                height="512px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-3">
          <RouterLink to="/payment">
            <div
              class="flex py-2 font-medium px-4 text-black text-sm bg-black hover:bg-gray-300 duration-300 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                style="fill: rgba(255, 255, 255, 1); transform: ; msfilter: "
                class="mr-2"
              >
                <path
                  d="M21 4H2v2h2.3l3.521 9.683A2.004 2.004 0 0 0 9.7 17H18v-2H9.7l-.728-2H18c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 4z"
                ></path>
                <circle cx="10.5" cy="19.5" r="1.5"></circle>
                <circle cx="16.5" cy="19.5" r="1.5"></circle>
              </svg>
              <p class="text-white">Cart·<span class="text-white">0</span></p>
            </div>
          </RouterLink>
          <RouterLink
            to="/signin"
            class="flex items-center py-2 px-3 bg-gray-200 hover:bg-gray-300 text-sm text-black rounded-full duration-300"
            v-show="!isSignin"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              class="w-4 h-4 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <p>Log in</p>
          </RouterLink>
          <RouterLink
            to="/signup"
            class="py-2 px-3 bg-gray-200 hover:bg-gray-300 text-sm text-black rounded-full duration-300"
            v-show="!isSignin"
            >Sign up</RouterLink
          >
          <a
            href=""
            class="py-2 px-3 bg-gray-900 text-sm text-yellow-50 rounded shadow hover:text-mypink"
            v-show="isSignin"
            @click.prevent="signOut"
            >Sign Out
          </a>
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
