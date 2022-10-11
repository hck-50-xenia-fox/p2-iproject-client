<script>
import { mapActions, mapState } from "pinia";
import { useFoodStore } from "../stores/food";
import { useUserStore } from "../stores/user";
export default {
  data: () => ({
    temp: false,
  }),
  name: "FoodCard",
  props: ["e", "status"],
  methods: {
    ...mapActions(useFoodStore, ["addTheFavorite"]),
    addFavoriteFood(id) {
      this.addTheFavorite(id);
    },
  },
  computed: {
    ...mapState(useUserStore, ["isSignin"]),
    ...mapState(useFoodStore, ["favoritesIds"]),
    toRupiah() {
      return this.e.price.toLocaleString("ID-id", {
        style: "currency",
        currency: "IDR",
      });
    },
  },
  created() {
    this.temp = this.favoritesIds.includes(this.e.id);
    console.log(this.temp, this.e.name);
  },
};
</script>

<template>
  <div
    class="flex flex-col bg-white rounded-lg shadow-md w-full m-4 overflow-hidden sm:w-64"
  >
    <img :src="e.imgUrl" alt="" style="height: 100%" />
    <h2 class="text-center text-xl px-2 pb-5">{{ e.name }}</h2>
    <h2 class="text-left px-2 pb-5 text-gray-900">{{ e.Category.name }}</h2>
    <div class="flex">
      <div>
        <h2 class="text-left px-2 pb-5 text-mypink">{{ toRupiah }}</h2>
      </div>
      <div v-if="isSignin && !temp" class="px-24">
        <a @click.prevent="addFavoriteFood(e.id)" href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
          >
            <path
              d="M16.999 23V7c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2v16l6-3.601 6 3.601z"
            ></path>
            <path
              d="M15.585 3h1.414c1.103 0 2 .897 2 2v10.443l2 2.489V3c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2h6.586z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <RouterLink
      :to="`/detailfood/${e.id}`"
      class="bg-gray-700 text-white p-3 text-center hover:bg-gray-900 transition-all duration-500"
      >Know More</RouterLink
    >
  </div>
</template>
