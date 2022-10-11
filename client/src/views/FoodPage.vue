<script>
import { mapActions, mapState } from "pinia";
import { useFoodStore } from "../stores/food";
import FoodCard from "../components/FoodCard.vue";
export default {
  name: "FoodPage",
  methods: {
    ...mapActions(useFoodStore, ["getFood", "getRestaurantData"]),
  },
  computed: {
    ...mapState(useFoodStore, ["food", "restaurant"]),
  },
  created() {
    this.getRestaurantData();
    this.getFood(1);
  },
  components: { FoodCard },
};
</script>
<template>
  <pre>{{ restaurant }}</pre>
  <div
    class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <div
      class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      <FoodCard v-for="resto in restaurant" :key="resto.id" :resto="resto" />
    </div>
  </div>
</template>
