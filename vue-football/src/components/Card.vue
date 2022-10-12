<script>
  export default {
    name: "card"
  }
</script>

<template>
  <div class="container mb-4">
    <div style="margin-top: 4.5em">
      <h3 class="text-center">Live Score</h3>
    </div>
    <div class="row mb-4">
      <div class="col-10 mb-4 mx-auto">

        <div class="card shadow-sm bg-white rounded" style="margin-top: 0.5em">
          <div class="card-body">
            <div class="row">
              <div class="col-5">
                <h6 class="card-title" style="text-align: left;">League</h6>
              </div>
              <div class="col-2">
                <h6 class="card-title" style="text-align: center;">Date</h6>
              </div>
              <div class="col-5">
                <h6 class="card-title" style="text-align: right;">Stadium</h6>
              </div>
            </div>
            
            <div class="row">
              <div class="col-5">
                <img src="https://media.api-sports.io/football/teams/496.png" style="width: 3em; height: 3em;" class="rounded float-start" alt="logo">
                <h2 class="text-center">Home Team</h2>
              </div>
              <div class="col-2">
                <h2 class="text-center">0 - 0</h2>
              </div>
              <div class="col-5">
                <img src="https://media.api-sports.io/football/teams/50.png" style="width: 3em; height: 3em;"
                  class="rounded float-end" alt="logo">
                <h2 class="text-center">Away Team</h2>
              </div>
            </div>

            <div class="row">
              <div class="col-2 mx-auto">
                <h6 class="card-title" style="text-align: center;">Minutes</h6>
              </div>
            </div>

          </div>
        </div><br>

        <div class="card shadow-sm bg-white rounded" style="margin-top: 0.5em">
          <div class="card-body">
            <div class="row">
              <div class="col-5">
                <h6 class="card-title" style="text-align: left;">League</h6>
              </div>
              <div class="col-2">
                <h6 class="card-title" style="text-align: center;">Date</h6>
              </div>
              <div class="col-5">
                <h6 class="card-title" style="text-align: right;">Stadium</h6>
              </div>
            </div>
        
            <div class="row">
              <div class="col-5">
                <img src="https://media.api-sports.io/football/teams/496.png" style="width: 3em; height: 3em;"
                  class="rounded float-start" alt="logo">
                <h2 class="text-center">Home Team</h2>
              </div>
              <div class="col-2">
                <h2 class="text-center">0 - 0</h2>
              </div>
              <div class="col-5">
                <img src="https://media.api-sports.io/football/teams/50.png" style="width: 3em; height: 3em;"
                  class="rounded float-end" alt="logo">
                <h2 class="text-center">Away Team</h2>
              </div>
            </div>
        
            <div class="row">
              <div class="col-2 mx-auto">
                <h6 class="card-title" style="text-align: center;">Minutes</h6>
              </div>
            </div>
        
          </div>
        </div>

      </div>
    </div>
  </div>
</template>