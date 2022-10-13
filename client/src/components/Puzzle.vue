<script>
export default {
  name: "Puzzle",
  props: ["puzzle"],
};
</script>

<template>
  <div class="flex justify-center">
    <div class="rounded-lg shadow-2xl bg-white max-w-sm">
      <a data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img class="rounded-t-lg" :src="puzzle?.image" alt="" />
      </a>
      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2">
          {{ puzzle.title }}
        </h5>
        <a :href="puzzle.url">
          <button
            type="button"
            class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-auto"
          >
            Play
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
