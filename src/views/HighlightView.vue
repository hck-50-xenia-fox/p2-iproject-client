<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import { YoutubeVue3 } from 'youtube-vue3'

  export default{
    components: {
      YoutubeVue3
    },
    methods: {
      ...mapActions(useCounterStore, ["searchYoutube"])
    },
    computed: {
      ...mapState(useCounterStore, ["dataSearchYoutube"])
    },
    created(){
      this.searchYoutube(this.$route.params.name)
    }
  }
</script>

<template>
  <h1>Videos {{$route.params.name}}</h1>
  <div style="text-align: center; margin-top: 20px">
    <YoutubeVue3 ref="youtube" :videoid="dataSearchYoutube[0].id.videoId" :width="480" :height="320"/>
  </div>
</template>