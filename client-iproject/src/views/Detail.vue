<script>
import { mapActions, mapState } from "pinia";
import { useStoreIndex } from "../stores/storeIndex";
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";

export default {
  name: "Detail",
  data() {
    return {
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
    ...mapState(useStoreIndex, ["detail"]),
    center() {
      return latLng(this.detail.lat, this.detail.long);
    },
    withTooltip() {
      return latLng(this.detail.lat, this.detail.long);
    },
    currentCenter() {
      return latLng(this.detail.lat, this.detail.long);
    },
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
  },
};
</script>

<template>
  <div class="container detail">
    <!-- Judul -->
    <h1 class="my-4">{{ detail.name }}</h1>

    <!-- Row Detail-->
    <div class="row">
      <!-- col gambar-->
      <div class="col-md-8 image-col">
        <img class="img-fluid place-image" :src="detail.imgURL" alt="" />
      </div>

      <!-- col tulisan-->
      <div class="col-md-4">
        <h3 v-if="detail.description" align="left" class="my-3">Description</h3>
        <p v-if="detail.description" align="left">{{ detail.description }}</p>
        <h3 v-if="detail.address" align="left" class="my-3">Address</h3>
        <p v-if="detail.address" align="left">{{ detail.address }}</p>
        <h3 v-if="detail.priceRange" align="left" class="my-3">Price Range</h3>
        <p v-if="detail.priceRange" align="left">{{ detail.priceRange }}</p>
      </div>
    </div>

    <!--  Row Map -->
    <h3 class="my-4">Maps</h3>
    <div class="row map">
      <div
        style="height: 400px; width: 50%; margin-right: auto; margin-left: auto"
      >
        <l-map
          v-if="showMap"
          :zoom="zoom"
          :center="center"
          :options="mapOptions"
          style="height: 80%"
          @update:center="centerUpdate"
          @update:zoom="zoomUpdate"
        >
          <l-tile-layer :url="url" :attribution="attribution" />
          <l-marker :lat-lng="withTooltip">
            <l-tooltip :options="{ permanent: true, interactive: true }">
              <div>
                {{ detail.name }}
              </div>
            </l-tooltip>
          </l-marker>
        </l-map>
      </div>
    </div>
  </div>
</template>
