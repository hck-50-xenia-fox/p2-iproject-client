<script>
import { mapState, mapActions } from "pinia";
import { useFoodStore } from "../stores/food";
export default {
  name: "DetailFood",
  computed: {
    ...mapState(useFoodStore, ["theFood", "theQrCode"]),
    toRupiah() {
      return this.theFood.price.toLocaleString("ID-id", {
        style: "currency",
        currency: "IDR",
      });
    },
  },
  methods: {
    ...mapActions(useFoodStore, ["getTheFood", "getQrCode"]),
  },
  created() {
    this.getTheFood(this.$route.params.id);
    this.getQrCode(this.$route.params.id);
  },
};
</script>

<template>
  <!--Container-->
  <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32 py-32">
    <div class="mx-0 sm:mx-6">
      <!--Posts Container-->
      <div class="flex flex-wrap justify-between pt-12 -mx-6">
        <!--2/3 col -->
        <div class="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
          <div
            class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
          >
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <img :src="theFood.imgUrl" class="h-full w-full rounded-t pb-6" />
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                {{ theFood.Category.name }}
              </p>
              <div class="w-full font-bold text-xl text-gray-900 px-6">
                {{ theFood.name }}
              </div>
              <p class="text-gray-800 font-serif text-base px-6 mb-5">
                {{ toRupiah }}
              </p>
            </a>
          </div>
        </div>
        <!--1/3 col -->
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div
            class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
          >
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <img :src="theQrCode" class="h-full w-full rounded-t pb-6" />
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                GET THE FOOD
              </p>
              <div class="w-full font-bold text-xl text-gray-900 px-6">
                Lorem ipsum dolor sit amet.
              </div>
              <p class="text-gray-800 font-serif text-base px-6 mb-5">
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div
            class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6"
          >
            <div class="flex items-center justify-between">
              <img
                class="w-8 h-8 rounded-full mr-4 avatar"
                data-tippy-content="Author Name"
                src="http://i.pravatar.cc/300"
                alt="Avatar of Author"
              />
              <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-wrap rounded border-2 shadow-lg p-6"
        style="white-space: pre-line"
      >
        <p>{{ theFood.description }}</p>
      </div>
    </div>
  </div>
</template>
