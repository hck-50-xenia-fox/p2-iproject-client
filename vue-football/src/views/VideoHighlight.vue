<script>
  import NavBar from '../components/NavBar.vue';
  import CardVideo from '../components/CardVideo.vue';
  import { mapActions, mapState } from 'pinia';
  import { useFootballStore } from '../stores/football';

  export default {
    name: "video-highlight",

    components: {
      NavBar,
      CardVideo
    },

    methods: {
      ...mapActions(useFootballStore, ["fetchHighlightVideo"])
    },
    computed: {
      ...mapState(useFootballStore, ["highlightData"])
    },
    created() {
      this.fetchHighlightVideo();
    }
  }
</script>

<template>
  <NavBar />

  <div class="container mb-4">
    <div style="margin-top: 4.5em">
      <h3 class="text-center">Football Highlights</h3>
    </div>
    <hr>
    <div class="row mb-4">
      <CardVideo
        v-for="highlight in highlightData"
        :key="highlight.id"
        :highlight="highlight"
      />
    </div>
  </div>


</template>