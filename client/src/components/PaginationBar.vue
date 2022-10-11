<script>
import { mapState, mapActions } from "pinia";
import { useFoodStore } from "../stores/food";
export default {
  name: "PaginationBar",
  props: ["search"],
  methods: {
    ...mapActions(useFoodStore, ["getFood"]),
    changePage(page) {
      this.getFood(page, this.search);
    },
  },
  computed: {
    ...mapState(useFoodStore, ["pages"]),
  },
};
</script>
<template>
  <div
    class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
  >
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          {{ " " }}
          <span class="font-medium">1</span>
          {{ " " }}
          to
          {{ " " }}
          <span class="font-medium">{{ pages }}</span>
          {{ " " }}
          pages
        </p>
      </div>
      <div>
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <a
            v-for="page in pages"
            :key="`${page}x`"
            @click.prevent="changePage(page)"
            href="#"
            aria-current="page"
            class="relative z-10 inline-flex items-center border hover:border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
            >{{ page }}</a
          >
        </nav>
      </div>
    </div>
  </div>
</template>
