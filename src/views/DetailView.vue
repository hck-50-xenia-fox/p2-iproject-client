<script>
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";
import PayButton from "../components/PayButton.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  components: {
    PayButton,
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
  <div class="flex w-1/2 mx-auto border border-solid">
    <div id="left">
      <h2 class="text-xl text-bold">{{ book.volumeInfo.title }}</h2>
      <p>authors: {{ book.volumeInfo.authors.join(",") }}</p>
      <img :src="book.volumeInfo.imageLinks.thumbnail" />

      <PayButton />
      {{ book.volumeInfo.description }}
    </div>
    <div id="right"></div>
  </div>
</template>
<style></style>
