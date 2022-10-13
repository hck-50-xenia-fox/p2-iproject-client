<script>
import { mapActions, mapState } from "pinia";
import PostCard from "../components/PostCard.vue";
import { useStore } from "../stores";
export default {
  data() {
    return {};
  },
  components: { PostCard },
  methods: {
    ...mapActions(useStore, ["fetchPost"]),
  },
  created() {
    this.fetchPost();
  },
  computed: {
    ...mapState(useStore, ["posts"]),
  },
};
</script>
<template>
  <section class="vh-100 gradient-custom">
    <div class="container">
      <h3 class="text-center">Twittir</h3>
      <hr />
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
      <div class="row text-center">
        <div class="col-sm-6"></div>
      </div>
    </div>
  </section>
</template>
