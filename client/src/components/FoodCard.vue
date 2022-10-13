<script>
export default {
  props: ["food"],
  computed: {
    toRupiah() {
      return this.food.price.toLocaleString("ID-id", {
        style: "currency",
        currency: "IDR",
      });
    },
  },
};
</script>
<template>
  <div
    class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:-translate-y-1 duration-500"
  >
    <div
      class="h-40 bg-cover rounded-t-lg"
      :style="{
        'background-image': 'url(' + food.imageUrl + ')',
      }"
    ></div>
    <!-- <img class="rounded-t-lg" :src="food.imageUrl" alt="" /> -->
    <div class="p-3">
      <h5 class="text-black">{{ food.name }}</h5>
      <div class="flex justify-between items-center">
        <h5 class="text-black font-bold">{{ toRupiah }}</h5>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 255, 70, 1); transform: ; msfilter: "
          >
            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
