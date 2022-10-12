<script>
  export default {
    name: "premierLeague-card",
    props: ["league"],

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
          second: "2-digit",
        });
      }
    }
  }
</script>

<template>
  <div class="col-3 mb-4 mx-auto">
    <div class="card shadow bg-white rounded" style="margin-top: 0.5em">
      <div class="card-body">
        <h6 class="card-title" style="text-align: center;">{{toLocalDate(league.date)}}</h6>
        <hr>
        <div class="row">
          <div class="col-2" style="text-align: left; margin-top: 0.5em;">
            <img :src="league.homeTeamLogo" style="width: 2em; height: 2em;"
              class="rounded float-start" alt="logo">
          </div>
          <div class="col-8" style="margin-top: 0.7em;">
            <h6 class="card-title" style="text-align: center;">{{league.homeTeam}}</h6>
          </div>
          <div class="col-2" style="margin-top: 0.2em;">
            <h3 v-if="league.scoreHomeTeam == null" class="card-title" style="text-align: left;">-</h3>
            <h3 class="card-title" style="text-align: left;">{{league.scoreHomeTeam}}</h3>
          </div>
        </div>
        <hr>

        <div class="row">
          <div class="col-2" style="text-align: left; margin-top: 0.5em;">
            <img :src="league.awayTeamLogo" style="width: 2em; height: 2em;"
              class="rounded float-start" alt="logo">
          </div>
          <div class="col-8" style="margin-top: 0.7em;">
            <h6 class="card-title" style="text-align: center;">{{league.awayTeam}}</h6>
          </div>
          <div class="col-2" style="margin-top: 0.2em;">
            <h3 v-if="league.scoreAwayTeam  == null" class="card-title" style="text-align: left;">-</h3>
            <h3 class="card-title" style="text-align: left;">{{league.scoreAwayTeam}}</h3>
          </div>
        </div>

        <hr>
        <div style="text-align: center;">
          <a class="btn btn-outline-secondary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button"
            aria-expanded="false" aria-controls="multiCollapseExample1">Detail</a>
        </div>

        <div class="row" style="margin-top: 1em;">
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample1">
              <div class="card card-body">
                <p><b>Venue:</b> {{league.venue}} Stadium</p>
                <p><b>Referee:</b> {{league.referee}}</p>
                <p><b>Status:</b> {{league.status}}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
    
</template>