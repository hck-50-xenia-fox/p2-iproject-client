<script>
import { mapActions, mapState } from "pinia";
import { useFoodStore } from "../stores/food";
import FoodCard from "../components/RestaurantCard.vue";
export default {
  name: "CustomerFav",
  methods: {
    ...mapActions(useFoodStore, ["getCustomerFavorite"]),
  },
  computed: {
    ...mapState(useFoodStore, ["favorites"]),
  },
  components: { FoodCard },
  created() {
    this.getCustomerFavorite();
  },
};
</script>

<template>
  <h1 class="max-w-7xl mx-auto">Favorite</h1>
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-wrap">
      <FoodCard
        v-for="el in favorites"
        :key="el.id"
        :e="el.Food"
        :status="'fav'"
      />
    </div>
  </div>
</template>
