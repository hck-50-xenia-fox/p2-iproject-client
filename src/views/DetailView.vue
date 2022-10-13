<script>
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";

export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },

  methods: {
    ...mapActions(useIndexStore, ["bookById"]),
  },

  computed: {
    ...mapState(useIndexStore, ["book"]),
  },

  async created() {
    await this.bookById(this.id);
  },
};
</script>

<template>
  <div id="height" class="flex w-1/2 mx-auto h-100">
    <div id="left">
      <h2 class="text-xl text-bold">{{ book.volumeInfo.title }}</h2>
      <p>authors: {{ book.volumeInfo.authors.join(",") }}</p>
      <img :src="book.volumeInfo.imageLinks.thumbnail" />

      {{ book.volumeInfo.description }}
    </div>
    <div id="right"></div>
  </div>
</template>
<style>
#height {
  height: 100vh;
}
</style>
