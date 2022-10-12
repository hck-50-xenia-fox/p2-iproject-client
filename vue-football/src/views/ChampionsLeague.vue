<script>
  import NavBar from '../components/NavBar.vue';
  import CardLeague from '../components/CardLeague.vue';
import { mapActions, mapState } from 'pinia';
import { useFootballStore } from '../stores/football';

  export default {
    name: "championsLeague",

    components: {
      NavBar,
      CardLeague
    },

    methods: {
      ...mapActions(useFootballStore, ["fetchChampionsLeague"])
    },
    computed: {
      ...mapState(useFootballStore, ['championsLeagueData'])
    },
    created() {
      this.fetchChampionsLeague();
    }

  }
</script>

<template>
  <NavBar />
  <div class="container mb-4">
    <div style="margin-top: 4.5em">
      <h3 class="text-center">Premier League</h3>
      <hr>
    </div>
    <div class="row mb-4">
      <CardLeague 
        v-for="league in championsLeagueData" 
        :key="league.id" 
        :league="league" 
      />
    </div>
  </div>
</template>