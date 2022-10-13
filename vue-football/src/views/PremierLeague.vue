<script>
  import NavBar from '../components/NavBar.vue';
  import CardLeague from '../components/CardLeague.vue';
  import { mapActions, mapState } from 'pinia';
  import { useFootballStore } from '../stores/football';

  export default {
    name: "premierLeague",

    components: {
      NavBar,
      CardLeague
    },

    methods: {
      ...mapActions(useFootballStore, ["fetchPremierLeague"])
    },
    computed: {
      ...mapState(useFootballStore, ["premierLeagueData"])
    },
    created() {
      this.fetchPremierLeague();
    }
  }
</script>

<template>
  <NavBar />
  <!-- <pre>{{premierLeagueData}}</pre> -->
  <div class="container mb-4">
    <div style="margin-top: 4.5em">
      <h3 class="text-center">Premier League</h3>
      <hr>
    </div>
    <div class="row mb-4">
      <CardLeague
        v-for="league in premierLeagueData"
        :key="league.id"
        :league="league"
       />
    </div>
  </div>
</template>