<script>
import { mapActions, mapState } from "pinia";
import { useFoodStore } from "../stores/food";
import { useUserStore } from "../stores/user";
export default {
  data: () => ({
    temp: false,
  }),
  name: "FoodCard",
  props: ["e", "status", "resto"],
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
  created() {},
};
</script>

<template>
  <div
    class="flex flex-col bg-white rounded-lg shadow-md w-full m-1 overflow-hidden sm:w-72"
  >
    <div class="relative w-full h-full">
      <div
        class="h-56"
        :style="{
          'background-image': 'url(' + resto.image_url + ')',
          'background-size': 'cover',
        }"
      ></div>
      <div
        class="absolute bottom-0 px-2 py-9 h-16 flex items-center bg-gradient-to-t from-black w-full"
      >
        <img
          src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png"
          class="h-7"
        />
        <p class="bg-green-600 text-white inline-block px-3 rounded ml-2">
          Promo
        </p>
      </div>
    </div>
    <div class="flex-col justify-between items-center mt-3">
      <h2 class="text-xl">{{ resto.name }}</h2>
      <h2 class="text-sm text-gray-600">25~35·min</h2>
    </div>
    <div class="flex self-end mt-1 mr-2 mb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="yellow"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="yellow"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
      <h2 class="text-gray-600">{{ resto.rating }}</h2>
    </div>
  </div>
</template>
