<script>
import { mapActions, mapState } from "pinia";
import { useFoodStore } from "../stores/food";
import RestaurantCard from "../components/RestaurantCard.vue";
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
  components: { RestaurantCard },
};
</script>
<template>
  <pre>{{ restaurant[0] }}</pre>
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
</template>
