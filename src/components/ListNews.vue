<script>
export default{
  props: ["data", "pageName"],
  computed: {
    changeFormatDate(){
      return new Date (this.data.startTime).toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    }
  },
}
</script>

<template>
  <ol class="gradient-list">
    <li v-if="pageName == 'matches'">
      <p>{{data.leftTeam.name}} VS {{data.rightTeam.name}} --({{data.status}})-- <span v-if="data.status != 'Live'">{{changeFormatDate}}</span></p>
      <p>{{data.tournamentName}}</p>
    </li>
    <li v-if="pageName == 'tournaments'">
      <p>{{data.name}} ({{data.status}})</p>
      <p v-if="data.prizePool.length > 1">Prizepool: {{data.prizePool}}</p>
      <p>Dates: {{data.dates}}</p>
    </li>
  </ol>
</template>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Montserrat:900|Raleway:400,400i,700,700i);
  *, *:before, *:after {
    box-sizing: border-box;
  }
  ol.gradient-list {
    list-style: none;
    margin: 1.75rem 0;
    padding-left: 1rem;
  }
  ol.gradient-list > li {
    background: white;
    border-radius: 0 0.5rem 0.5rem 0.5rem;
    counter-increment: gradient-counter;
    margin-top: 1rem;
    min-height: 3rem;
    padding: 1rem 1rem 1rem 3rem;
    position: relative;
  }
 
</style>