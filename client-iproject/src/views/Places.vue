<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useStoreIndex } from "../stores/storeIndex";
import Carousel from "../components/Carousel.vue";
import CardPlace from "../components/CardPlace.vue";
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
      zoom: 15,
      // center: latLng(47.41322, -1.219482),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      // withTooltip: latLng(47.41422, -1.250482),
      currentZoom: 15.5,
      // currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
    };
  },
  computed: {
    ...mapState(useStoreIndex, ["places", "currentPage", "covid19"]),
    ...mapWritableState(useStoreIndex, ["query"]),
    // activeNav() {
    //   if (this.$route.name) {
    //     return this.$route.name;
    //   } else {
    //     return this.$route.fullPath;
    //   }
    // },
    center() {
      return latLng(6.1750, 106.8283);
    },
    withTooltip() {
      return latLng(6.1750, 106.8283);
    },
    currentCenter() {
      return latLng(6.1750, 106.8283);
    },
    
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    ...mapActions(useStoreIndex, ["listPlaces"]),
    handlePageAndSearch(page) {
      this.listPlaces(page, this.search);
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
    },
  },
  created() {
    this.listPlaces(1);
  },
  components: {
    Carousel,
    CardPlace,
    CovidData,
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
  },
};
</script>

<template>
  <!-- Home -->
  <Carousel />
  <!-- <section id="home"> -->
  <div>
    <table class="table bg-primary mx-auto px-3">
      <thead>
        <tr>
          <th scope="col" class="mt-1">Country</th>
          <th scope="col">Active</th>
          <th scope="col">Deaths</th>
          <th scope="col">Critical</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ covid19.country }}</td>
          <td>{{ covid19.cases.active }}</td>
          <td>{{ covid19.deaths.total }}</td>
          <td>{{ covid19.cases.critical }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="col-3 mx-auto" style="width: 15em">
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
  </div>
  <!-- <div>
      <CovidData />
    </div> -->
  <div class="container mb-3">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <RouterLink class="nav-link" :class="{ active: $route.fullPath == '/' }" to="/">All Places</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" :class="{ active: $route.fullPath == '/hotels' }" to="/hotels">Hotels</RouterLink>
      </li>
      <!-- <li class="nav-item">
        <RouterLink class="nav-link" :class="{ active: activeNav == 'Restaurants' }" to="/restaurants">Restaurants
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" :class="{ active: activeNav == 'Attractions' }" to="/attractions">Attractions
        </RouterLink>
      </li> -->
    </ul>
  </div>
  <div class="container mb-4" style="margin-top: 3em">
    <div class="row">
      <CardPlace v-for="(place, index) in places" :key="index" :place="place" />
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
  </div>

  <!--  Row Map -->
  <h3 class="my-4">Maps</h3>
  <div class="row map">
    <div style="height: 400px; width: 50%; margin-right: auto; margin-left: auto">
      <l-map v-if="showMap" :zoom="zoom" :center="center" :options="mapOptions" style="height: 80%"
        @update:center="centerUpdate" @update:zoom="zoomUpdate">
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-marker :lat-lng="withTooltip">
          <l-tooltip :options="{ permanent: true, interactive: true }">
            <div>
              {{ detail?.name }}
            </div>
          </l-tooltip>
        </l-marker>
      </l-map>
    </div>
  </div>
  <!-- </section> -->
  <!-- End Home -->
</template>
