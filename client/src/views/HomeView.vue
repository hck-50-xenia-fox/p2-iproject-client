<script>
import StreamerCard from "../components/StreamerCard.vue";
import VideoCard from "../components/VideoCard.vue";
import Table from "../components/Table.vue";
import { mapActions, mapState } from "pinia";
import { useMasterStore } from "../stores/masterStore";
import Puzzle from "../components/Puzzle.vue";

export default {
  name: "HomeView",
  components: { StreamerCard, VideoCard, Table, Puzzle },
  methods: {
    ...mapActions(useMasterStore, [
      "getTopPlayers",
      "getStreamer",
      "getPuzzle",
      "getYoutube",
    ]),
  },
  computed: {
    ...mapState(useMasterStore, [
      "topPlayer",
      "dataStreamer",
      "dataPuzzle",
      "dataUtube",
    ]),
  },
  async created() {
    await this.getTopPlayers();
    await this.getStreamer();
    await this.getPuzzle();
    await this.getYoutube();
  },
};
</script>

<template>
  <!-- <pre>{{ topPlayer }}</pre> -->

  <Table />

  <!-- <pre>{{ dataStreamer }}</pre> -->
  <div class="grid grid-cols-3 gap-3 justify-items-center p-14">
    <VideoCard v-for="streamer in dataStreamer" :streamer="streamer" />
  </div>
  <!-- BUAT LIST VIDEO -->

  <div class="grid grid-cols-2 gap-3 justify-items-center mt-7 p-14">
    <!-- <pre>{{ dataPuzzle }}</pre> -->
    <Puzzle v-for="puzzle in dataPuzzle" :puzzle="puzzle" />
  </div>

  <!-- <pre>{{ dataUtube }}</pre> -->
  <div class="grid grid-cols-3 gap-3 justify-items-center px-9 mb-10">
    <StreamerCard v-for="video in dataUtube" :video="video" />
  </div>
  <!-- BUAT LIST STREAMER -->
</template>
