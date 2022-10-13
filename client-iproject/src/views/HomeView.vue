<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useStoreIndex } from "../stores/storeIndex";
import Carousel from "../components/Carousel.vue";
import CardJob from "../components/CardPlace.vue";
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
import CovidData from "../components/CovidData.vue";

// import { LMap, LGeoJson } from "@vue-leaflet/vue-leaflet";

let SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.continous = true;

export default {
  name: "HomePage",
  data() {
    return {
      search: "",
      page: 0,
    };
  },
  computed: {
    ...mapState(useStoreIndex, ["places", "totalPage"]),
    ...mapWritableState(useStoreIndex, ["query"]),
    activeNav() {
      if (this.$route.name) {
        return this.$route.name
      } else {
        return this.$route.fullPath
      }

    }
  },
  methods: {
    ...mapActions(useStoreIndex, ["listPlaces", "listHotels", "listAttractions", "listRestaurant"]),
    handlePageAndSearch(page) {
      this.listPlaces(page, this.search);
      this.listHotels(page, this.search);
      this.listAttractions(page, this.search);
      this.listRestaurant(page, this.search);
    },
    listening() {
      console.log("start listening");
      recognition.start();
      recognition.onresult = this.convert;
    },
    convert(event) {
      var current = event.resultIndex;
      var transcript = event.results[current][0].transcript;
      console.log(transcript);
      recognition.stop();
      this.search = transcript;
      this.listPlaces(page, this.search);
      this.listHotels(page, this.search);
      this.listAttractions(page, this.search);
      this.listRestaurant(page, this.search);

      // this.$store.commit('SET_CURRENT_SEARCH', transcript)
      // this.$store.dispatch('searchPlaces', transcript)
      // .then(res => {
      //   this.$store.commit('SET_PLACES', res.data)
      //   this.$store.dispatch('getCovidData')
      //   this.$router.push('/')
      //   this.search = ""
      // })
      // .catch(err => this.$swal(err.response.data.message, "", "error"))
    },
  },
  created() {
    this.listPlaces(1);
  },
  components: { Carousel, CardJob, CovidData },
};
</script>

<template>
  <!-- Home -->
  
  <RouterView />
  <section id="home">
    <!-- <div class="col-3 mx-auto" style="width: 15em">
      <div class="input-group mb-2 mt-3">
        <input v-model="search" type="text" class="form-control" placeholder="Search" aria-label="Search"
          aria-describedby="basic-addon2" />
        <div class="input-group-append">
          <form @submit.prevent="handlePageAndSearch">
            <button @click.prevent="listening()" class="btn btn-danger my-2 my-sm-0 rounded-circle" type="submit">
              <i class="fas fa-microphone"></i>
            </button>
            <button class="btn btn-outline-primary" type="submit">
              <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div class="input-group justify-content-center mb-3 mt-3"></div>
      </div>
    </div> -->

    <!-- <div class="container mb-3">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <RouterLink class="nav-link" :class="{ active: activeNav == '/' }" to="/">All Places</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :class="{ active: activeNav == 'Hotels' }" to="/hotels">Hotels</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :class="{ active: activeNav == 'Restaurants' }" to="/restaurants">Restaurants
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" :class="{ active: activeNav == 'Attractions' }" to="/attractions">Attractions
          </RouterLink>
        </li>
      </ul>
    </div> -->
    <!-- <div class="container mb-4" style="margin-top: 3em">
      <div class="row">
        <CardJob v-for="(job, index) in places" :key="index" :job="job" />
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination" style="align-items: center">
          <li v-for="(page, index) in currentPage" :key="index" class="page-item">
            <a @click.prevent="handlePageAndSearch(page)" class="page-link" href="#">{{ index + 1 }}</a>
          </li>
        </ul>
      </nav>
    </div> -->
  </section>
  <!-- End Home -->
</template>
