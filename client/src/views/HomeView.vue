<script>
import { mapActions, mapState } from "pinia";
import { useFoodStore } from "../stores/food";
import FoodPage from "./FoodPage.vue";
import PaginationBar from "../components/PaginationBar.vue";
import GoogleSearch from "../components/GoogleSearch.vue";
import ButtonTemplate from "../components/ButtonTemplate.vue";
export default {
  data: () => ({
    search: {
      name: "",
      price: "",
      category: "",
    },
    status: "eat",
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
    GoogleSearch,
    ButtonTemplate,
  },
  created() {
    this.getCategories();
    if (localStorage.getItem("access_token")) this.getCustomerFavorite();
  },
};
</script>

<template>
  <div class="flex bg-bg_4 h-screen bg-cover">
    <div class="flex flex-col ml-80 mt-12 h-52 bg-white" style="width: 500px">
      <div class="flex justify-between h-28 px-12 shadow-md">
        <button>
          <div
            class="flex flex-col items-center py-6 hover:text-gray-700 font-medium"
            :style="
              status === 'deliver' ? { 'border-bottom': '5px solid black' } : ''
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
            >
              <path
                d="M3 16h2v5H3zm4-3h2v8H7zm4-3h2v11h-2zm4-3h2v14h-2zm4-3h2v17h-2z"
              ></path>
            </svg>
            <p class="text-sm mt-2">Drive or</p>
            <p class="text-sm tex ml-1">deliver</p>
          </div>
        </button>
        <button>
          <div
            class="flex flex-col items-center py-6 w-14 hover:text-gray-700 font-medium"
            :style="
              status === 'eat' ? { 'border-bottom': '5px solid black' } : ''
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
            >
              <path
                d="M21 10H3a1 1 0 0 0-1 1 10 10 0 0 0 5 8.66V21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.34A10 10 0 0 0 22 11a1 1 0 0 0-1-1zM9 9V7.93a4.51 4.51 0 0 0-1.28-3.15A2.49 2.49 0 0 1 7 3V2H5v1a4.51 4.51 0 0 0 1.28 3.17A2.49 2.49 0 0 1 7 7.93V9zm4 0V7.93a4.51 4.51 0 0 0-1.28-3.15A2.49 2.49 0 0 1 11 3V2H9v1a4.51 4.51 0 0 0 1.28 3.15A2.49 2.49 0 0 1 11 7.93V9zm4 0V7.93a4.51 4.51 0 0 0-1.28-3.15A2.49 2.49 0 0 1 15 3V2h-2v1a4.51 4.51 0 0 0 1.28 3.15A2.49 2.49 0 0 1 15 7.93V9z"
              ></path>
            </svg>
            <p class="text-sm mt-2">Eat</p>
          </div>
        </button>
        <button>
          <div
            class="flex flex-col items-center py-6 w-14 hover:text-gray-700 font-medium"
            :style="
              status === 'ride' ? { 'border-bottom': '5px solid black' } : ''
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
            >
              <path
                d="m20.772 10.155-1.368-4.104A2.995 2.995 0 0 0 16.559 4H7.441a2.995 2.995 0 0 0-2.845 2.051l-1.368 4.104A2 2 0 0 0 2 12v5c0 .738.404 1.376 1 1.723V21a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.277A1.99 1.99 0 0 0 22 17v-5a2 2 0 0 0-1.228-1.845zM7.441 6h9.117c.431 0 .813.274.949.684L18.613 10H5.387l1.105-3.316A1 1 0 0 1 7.441 6zM5.5 16a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5.5 16zm13 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18.5 16z"
              ></path>
            </svg>
            <p class="text-sm mt-2">Ride</p>
          </div>
        </button>
      </div>
      <!-- component page #1-->
      <div v-if="status === 'deliver'" class="flex flex-col p-10">
        <div class="flex flex-col">
          <h1 class="text-5xl font-bold leading-tight">
            Get in the driver's seat and get paid
          </h1>
          <p class="text-sm py-3">
            Drive on the platform with the largest network of active riders.
          </p>
        </div>
        <div class="flex flex-col mt-10">
          <ButtonTemplate
            :btn="{
              name: 'Sign up to drive',
              style: 'form__button',
              styleDiv: 'form__div__button',
            }"
          />
          <p class="text-sm py-5 underline underline-offset-8">
            Learn more about driving and delivering
          </p>
        </div>
      </div>
      <!-- component page #2-->
      <div v-if="status === 'eat'" class="flex flex-col p-10">
        <div class="flex flex-col">
          <h1 class="text-5xl font-bold leading-tight">
            Discover delicious eats
          </h1>
          <p class="text-sm py-3">Order delivery from restaurants you love.</p>
        </div>
        <div class="flex flex-col mt-5">
          <ButtonTemplate
            :btn="{
              name: 'Sign up to drive',
              style: 'form__button',
              styleDiv: 'form__div__button',
            }"
          />
          <p class="text-sm py-5 underline underline-offset-8">
            Discover your favorite food only in tisanovat
          </p>
        </div>
      </div>
      <!-- component page #3-->
      <div v-if="status === 'ride'" class="flex flex-col p-10">
        <div class="flex flex-col">
          <h1 class="text-5xl font-bold leading-tight">
            Get in the driver's seat and get paid
          </h1>
          <p class="text-sm py-3">
            Drive on the platform with the largest network of active riders.
          </p>
        </div>
        <div class="flex flex-col mt-10">
          <ButtonTemplate
            :btn="{
              name: 'Sign up to drive',
              style: 'form__button',
              styleDiv: 'form__div__button',
            }"
          />
          <p class="text-sm py-5 underline underline-offset-8">
            Learn more about driving and delivering
          </p>
        </div>
      </div>
    </div>
  </div>
  <GoogleSearch />
  <div class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 mt-5">
    <h2 class="text-3xl tracking-widest text-black text-left">
      <span class="block">Food Delivery in New York City</span>
    </h2>
  </div>
  <FoodPage />
  <PaginationBar :search="search" />
</template>
