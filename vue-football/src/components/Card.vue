<script>
  export default {
    name: "card",
    props: ["football"],

    methods: {
      toLocalDate(date) {
        return new Date(date).toLocaleDateString("en-US", {
          hour12: false,
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          // second: "2-digit",
        });
      }
    }
  }
</script>

<template>
  
  <div class="col-10 mb-4 mx-auto">
    <!-- <pre>{{football}}</pre> -->
    <div class="card shadow-sm bg-white rounded" style="margin-top: 0.5em">
      <div class="card-body">
        <div class="row">
          <div class="col-5">
            <h6 class="card-title" style="text-align: left;">{{football.league}}</h6>
          </div>
          <div class="col-2">
            <h6 class="card-title" style="text-align: center;">{{toLocalDate(football.date)}}</h6>
          </div>
          <div class="col-5">
            <h6 class="card-title" style="text-align: right;">{{football.venue}} Sadium</h6>
          </div>
        </div>
        
        <div class="row">
          <div class="col-5">
            <img :src="football.homeTeamLogo" style="width: 3em; height: 3em;" class="rounded float-start" alt="logo">
            <h2 class="text-center">{{football.homeTeam}}</h2>
          </div>
          <div class="col-2">
            <h2 class="text-center">{{football.scoreHomeTeam}} - {{football.scoreAwayTeam}}</h2>
          </div>
          <div class="col-5">
            <img :src="football.awayTeamLogo" style="width: 3em; height: 3em;"
              class="rounded float-end" alt="logo">
            <h2 class="text-center">{{football.awayTeam}}</h2>
          </div>
        </div>

        <div class="row">
          <div class="col-2 mx-auto">
            <h6 class="card-title" style="text-align: center;"><i class="bi bi-clock-fill"></i>&nbsp;{{football.minutes}}'</h6>
          </div>
        </div>

      </div>
    </div><br>

  </div>
    
</template>