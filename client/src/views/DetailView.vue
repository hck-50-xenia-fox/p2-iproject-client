<script>
import { mapActions, mapState } from "pinia";
import { YoutubeVue3 } from "youtube-vue3";
import { useMasterStore } from "../stores/masterStore";

export default {
  name: "DetailView",
  data() {
    return {
      temp: { video_id: "3P1CnWI62Ik", loop: 1 },
      play: { video_id: "3P1CnWI62Ik", loop: 1 },
    };
  },
  components: {
    YoutubeVue3,
  },
  methods: {
    applyConfig() {
      this.play = Object.assign(this.play, this.temp);
    },
    playCurrentVideo() {
      this.$refs.youtube.player.playVideo();
    },
    stopCurrentVideo() {
      this.$refs.youtube.player.stopVideo();
    },
    pauseCurrentVideo() {
      this.$refs.youtube.player.pauseVideo();
    },
    onEnded() {
      console.log("## OnEnded");
    },
    onPaused() {
      console.log("## OnPaused");
    },
    onPlayed() {
      console.log("## OnPlayed");
    },
    ...mapActions(useMasterStore, ["getYoutubeDetail"]),
  },
  computed: {
    ...mapState(useMasterStore, ["detailUtube"]),
  },
  async created() {
    await this.getYoutubeDetail(this.$route.params);
  },
};
</script>

<template>
  <!-- <pre>{{ detailUtube }}</pre> -->
  <div class="flex mt-10 flex-col justify-center ml-14">
    <YoutubeVue3
      ref="youtube"
      :videoid="$route.params.streamId"
      :loop="play.loop"
      :width="900"
      :height="500"
      @ended="onEnded"
      @paused="onPaused"
      @played="onPlayed"
    />
    <div>
      <h1 class="text-2xl font-medium">{{ detailUtube?.title }}</h1>
      <h1 class="text-2xl font-s">
        {{ detailUtube?.author?.stats?.subscribersText }}
      </h1>
    </div>
  </div>
</template>
