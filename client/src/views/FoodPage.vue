<script>
import { mapActions, mapState } from "pinia";
import { useFoodStore } from "../stores/food";
import FoodCard from "../components/FoodCard.vue";
export default {
  name: "FoodPage",
  methods: {
    ...mapActions(useFoodStore, ["getFood"]),
  },
  computed: {
    ...mapState(useFoodStore, ["food"]),
  },
  created() {
    this.getFood(1);
  },
  components: { FoodCard },
};
</script>
<template>
  <div class="w-full min-h-screen p-2">
    <!-- Card Container Start -->
    <div class="flex flex-wrap">
      <FoodCard v-for="element in food" :key="element.id" :e="element" />
    </div>
  </div>
</template>
