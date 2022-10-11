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
  <!-- Service Section -->
  <section id="services">
    <div class="services container">
      <div class="service-bottom">
        <div
          class="service-item"
          style="
            background-image: url('https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
          "
        >
          <div class="icon" style="height: 300px"></div>
          <h2 class="bg-gray-100">Delicious</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            debitis rerum, magni voluptatem sed architecto placeat beatae
            tenetur officia quod
          </p>
        </div>
        <div class="service-item">
          <div class="icon" style="height: 300px"></div>
          <h2 class="bg-gray-100">Healty</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            debitis rerum, magni voluptatem sed architecto placeat beatae
            tenetur officia quod
          </p>
        </div>
      </div>
    </div>
  </section>
  <div class="flex max-w-7xl mx-auto">
    <div class="h-1/5 bg-gray-100 rounded-md">
      <form action="" @submit.prevent="getAllFood">
        <div class="px-6 pt-4">
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              class="w-full rounded pl-8 pr-4 py-2.5 text-xs font-light bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
              placeholder="search food"
              v-model="search.name"
            />
          </div>
        </div>
        <div class="px-6 pt-4">
          <hr class="border-gray-700" />
        </div>
        <div class="px-6 pt-4">
          <h1 class="mb-2">Category</h1>
          <label class="container" v-for="cate in categories" :key="cate.id"
            >{{ cate.name }}
            <input
              type="radio"
              name="category"
              v-model="search.category"
              :value="cate.id"
            />
            <span class="checkmark"></span>
          </label>
          <hr class="border-gray-700" />
          <h1 class="mt-3">Min Price:</h1>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
            >
              <p class="text-xs text-gray-400">Rp.</p>
            </div>
            <input
              type="text"
              class="w-full rounded pl-8 pr-4 py-2.5 text-xs font-light bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
              placeholder=" 10.000"
              v-model="search.price"
            />
          </div>
        </div>
        <button
          class="bg-transparent hover:bg-gray-800 text-gray-800 font-semibold hover:text-white py-1 px-24 border border-gray-600 hover:border-transparent rounded mx-7 mt-2"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
    <div class="ml-10">
      <!-- food -->
      <FoodPage />
    </div>
  </div>
  <PaginationBar :search="search" />
</template>
