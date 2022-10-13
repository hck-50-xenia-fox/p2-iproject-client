<script>
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";
import VideoCard from "../components/VideoCard.vue";

export default {
  name: "HallOfFameView",
  components: {
    VideoCard,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(useIndexStore, ["getYoutubeVideo"]),
  },
  computed: {
    ...mapState(useIndexStore, ["youtubeVideo"]),
  },
  created() {
    this.getYoutubeVideo();
  },
};
</script>

<template>
  <div class="container text-center mt-5">
    <h1>Top 5 Videos for This Month</h1>
    <div class="row d-flex justify-content-between">
      <VideoCard
        v-for="(video, index) in youtubeVideo"
        :key="index"
        :video="video"
      />
    </div>
  </div>
</template>
