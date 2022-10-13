<script>
import { mapActions, mapState } from "pinia";
import { useFoodStore } from "../stores/food";
import FoodCard from "../components/FoodCard.vue";
import ThirdNavBar from "../components/ThirdNavBar.vue";
import MyFooter from "../components/MyFooter.vue";
export default {
  data: () => ({}),
  name: "FoodPage",
  methods: {
    ...mapActions(useFoodStore, ["getFood", "getTheRestaurantDetail"]),
  },
  computed: {
    ...mapState(useFoodStore, ["food", "theRestaurant"]),
  },
  created() {
    this.getTheRestaurantDetail(this.$route.params.id);
    this.getFood();
  },
  components: { FoodCard, ThirdNavBar, MyFooter },
};
</script>

<template>
  <ThirdNavBar />
  <div class="flex bg-white w-full">
    <div class="relative w-full h-full">
      <div
        class="flex bg-no-repeat bg-cover bg-center"
        style="height: 500px"
        :style="{
          'background-image': 'url(' + theRestaurant.image_url + ')',
        }"
      >
        <div
          class="flex flex-col ml-60 mt-20 h-54 bg-white p-10"
          style="width: 500px"
        >
          <div class="flex self-center">
            <h1 class="text-5xl">{{ theRestaurant.name }}</h1>
          </div>
          <div class="flex mt-16">
            <p class="text-gray-500">{{ theRestaurant.price }}</p>
            <p v-if="!theRestaurant.price" class="text-gray-500">$</p>
            <p
              class="text-gray-500"
              v-for="el in theRestaurant.categories"
              :key="el.id"
            >
              ·{{ el.title }}
            </p>
          </div>
          <div class="mt-5">
            <h1>20~25min</h1>
          </div>
          <div class="flex self-end items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              style="fill: rgba(0, 255, 70, 1); transform: ; msfilter: "
            >
              <path
                d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"
              ></path>
            </svg>
            <p class="text-emerald-500">Chosen</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <pre>{{ theRestaurant }}</pre> -->
  <div class="max-w-1xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
    <h1 class="text-xl mt-5">Picked For You</h1>
    <div
      class="mt-5 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      <FoodCard v-for="el in food" :key="el.id" :food="el" />
    </div>
  </div>
  <MyFooter />
</template>
