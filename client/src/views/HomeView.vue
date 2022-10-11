<script>
import { mapActions, mapState } from "pinia";
import { useFoodStore } from "../stores/food";
import FoodPage from "./FoodPage.vue";
import PaginationBar from "../components/PaginationBar.vue";
export default {
  data: () => ({
    search: {
      name: "",
      price: "",
      category: "",
    },
  }),
  methods: {
    ...mapActions(useFoodStore, [
      "getCategories",
      "getFood",
      "getCustomerFavorite",
    ]),
    getAllFood() {
      this.getFood(1, this.search);
    },
  },
  computed: {
    ...mapState(useFoodStore, ["categories", "food"]),
  },
  components: {
    FoodPage,
    PaginationBar,
  },
  created() {
    this.getCategories();
    if (localStorage.getItem("access_token")) this.getCustomerFavorite();
  },
};
</script>

<template>
  <div
    class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <h2 class="text-4xl tracking-widest text-black text-center uppercase">
      <span class="block">Choose your Hero</span>
    </h2>
    <div
      class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      <!-- HeroesCard -->
      <div class="group">
        <div class="relative">
          <div class="w-full">
            <img
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png"
              class="w-full h-full object-center object-cover opacity-70 group-hover:opacity-100"
            />
            <div
              class="absolute bottom-0 px-2 py-9 h-16 flex items-center bg-gradient-to-t from-black w-full"
            >
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
              />
              <p
                class="text-lg text-white uppercase inline-block align-start text-left pl-2"
              >
                Abaddon
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center h-16">
          <button
            class="px-3 py-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:ring focus:ring-gray-500 uppercase tracking-widest"
          >
            Pick Hero
          </button>
        </div>
      </div>

      <!-- HeroesCard -->
      <div class="group">
        <div class="relative">
          <div class="w-full overflow-hidden">
            <img
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png"
              class="w-full h-full object-center object-cover opacity-70 group-hover:opacity-100"
            />
            <div
              class="absolute bottom-0 px-2 py-9 h-16 flex items-center bg-gradient-to-t from-black w-full"
            >
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
              />
              <p
                class="text-lg text-white uppercase inline-block align-start text-left pl-2"
              >
                Arc Warden
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center h-16">
          <button
            class="px-3 py-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:ring focus:ring-gray-500 uppercase tracking-widest"
          >
            Pick Hero
          </button>
        </div>
      </div>

      <!-- HeroesCard -->
      <div class="group">
        <div class="relative">
          <div class="w-full overflow-hidden">
            <img
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/brewmaster.png"
              class="w-full h-full object-center object-cover opacity-70 group-hover:opacity-100"
            />
            <div
              class="absolute bottom-0 px-2 py-9 h-16 flex items-center bg-gradient-to-t from-black w-full"
            >
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png"
              />
              <p
                class="text-lg text-white uppercase inline-block align-start text-left pl-2"
              >
                Brewmaster
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center h-16">
          <button
            class="px-3 py-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:ring focus:ring-gray-500 uppercase tracking-widest"
          >
            Pick Hero
          </button>
        </div>
      </div>
    </div>
  </div>
  <FoodPage />
  <PaginationBar :search="search" />
</template>
