<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

  export default{
    methods: {
      ...mapActions(useCounterStore, ["showTournaments", "showMatches"])
    },
    computed: {
      ...mapState(useCounterStore, ["dataTournaments", "dataMatches"]),
      changeFormatDate(){
        return new Date (this.dataMatches[0].startTime).toLocaleDateString("en-US", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      }
    },
    created(){
      this.showTournaments()
      this.showMatches()
    }
  }
</script>

<template>
  <div class="wrapper">
    <h2>
      <strong>Features<span>( 4 )</span></strong>
    </h2>
    <div class="cards">
      <a @click.prevent="$router.push('/heroes')" href="">
        <figure class="card">
          <img src="../assets/2642.jpg" />

          <figcaption>Heroes</figcaption>
        </figure>
      </a>

      <a @click.prevent="$router.push('/teams')" href="">
        <figure class="card">
          <img src="../assets/imgonline-com-ua-resize-s7EBdLPOXlltCbC.jpg" />

          <figcaption>Teams</figcaption>
        </figure>
      </a>
    </div>

    <h2><strong>What's new?</strong></h2>

    <div class="news">
      <a @click.prevent="$router.push('/matches')" href="">
        <figure class="article">
          <img src="../assets/imgonline-com-ua-resize-LBUadgVeZymPv5u.jpg" />

          <figcaption>
            <h3 style="margin-bottom: 10px;">Next Matches</h3>
            <p v-if="dataMatches.length < 1"> No Matches this day</p>
            <p v-if="dataMatches.length > 0">{{dataMatches[0].leftTeam.name}} VS {{dataMatches[0].rightTeam.name}} ({{dataMatches[0].status}})</p>
            <p v-if="dataMatches.length > 0">Best of {{dataMatches[0].bestOf}}</p>
            <p v-if="dataMatches.length > 0">{{changeFormatDate}}</p>
            <p v-if="dataMatches.length > 0">{{dataMatches[0].tournamentName}}</p>
          </figcaption>
        </figure>
      </a>
      <a @click.prevent="$router.push('/tournaments')" href="">
        <figure class="article">
          <img src="../assets/the-5-most-popular-dota-2-heroes_vkjw.png" />

          <figcaption>
            <h3 style="margin-bottom: 10px;">Next tournaments</h3>

            <p>{{dataTournaments[0].name}}</p>
            <p>Prizepool: {{dataTournaments[0].prizePool}}</p>
            <p>Dates: {{dataTournaments[0].dates}}</p>
          </figcaption>
        </figure>
      </a>
    </div>
  </div>
</template>