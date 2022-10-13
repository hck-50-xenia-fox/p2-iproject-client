<script>
import { mapActions, mapState } from "pinia";
import { useFoodStore } from "../stores/food";
import GoogleSearch from "../components/GoogleSearch.vue";
import MyFooter from "../components/MyFooter.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import SecondNavBar from "../components/SecondNavBar.vue";
export default {
  data: () => ({
    search: {
      name: "",
      price: "",
      category: "",
    },
    status: "deliver",
  }),
  methods: {
    ...mapActions(useFoodStore, [
      "getCategories",
      "getFood",
      "getCustomerFavorite",
      "getRestaurantData",
    ]),
    getAllFood() {
      this.getFood(1, this.search);
    },
  },
  computed: {
    ...mapState(useFoodStore, ["food", "restaurant"]),
  },
  created() {
    this.getRestaurantData();
    this.getFood(1);
  },
  components: {
    // FoodPage,
    GoogleSearch,
    MyFooter,
    RestaurantCard,
    SecondNavBar,
  },
};
</script>
<template>
  <SecondNavBar />
  <GoogleSearch />
  <div class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 mt-5">
    <h2 class="text-3xl tracking-widest text-black text-left">
      <span class="block">Food Delivery in New York City</span>
    </h2>
  </div>
  <div class="max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
    <div
      class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      <RestaurantCard
        v-for="resto in restaurant"
        :key="resto.id"
        :resto="resto"
      />
    </div>
  </div>
  <div class="mt-10">
    Why GrabFood? Fastest - GrabFood's food delivery service is the fastest of
    all available services. Easiest - Ordering food is now just a click on your
    computer or mobile. Order online or download the Grab app for fast and
    rewarding services. Variety of food – From local food to favorite
    restaurants, we have a wide variety of food to satisfy your hunger. Variety
    of food - From local food to favorite restaurants, we have a wide variety of
    food to satisfy your hunger. Ease of payment - Ordering food is now very
    easy. Payments are even easier with GrabPay. More rewards - earn GrabReward
    points for every order that can be used to earn other rewards.
  </div>
  <MyFooter />
</template>
