<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useStoreIndex } from "../stores/storeIndex";

import { latLng } from "leaflet";
// import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";

import { LMap, LGeoJson } from "@vue-leaflet/vue-leaflet";

export default {
  name: "CardPlace",
  props: ["place"],
  methods: {
    ...mapActions(useStoreIndex, ["detailById"]),
    showDetail(){
        const payload = {
          name: this.result_object.name,
          description: this.result_object.description || null,
          imgURL: this.result_object.photo.images.large.url,
          address: this.result_object.address ||null,
          priceRange: this.result_object.price || null,
          lat: this.result_object.latitude || this.result_object.latitude,
          long: this.result_object.longitude || this.result_object.longitude
        }
        this.detailById(payload)
        this.$router.push('/detail')
      }
  },
  computed: {
    ...mapState(useStoreIndex, ["pageName"]),
    ...mapWritableState(useStoreIndex, ["login"]),

    center() {
      return latLng(3.671312, 46.915694);
    },
    withTooltip() {
      return latLng(3.671312, 46.915694);
    },
    currentCenter() {
      return latLng(3.671312, 46.915694);
    },
  },
};
</script>

<template>
  
  <div class="col-md-3 mb-4 mx-auto">
    <div class="card">
      <img class="card-img-top" :src="place.result_object.photo.images.small.url" alt="Card image cap"
        style="height: 200px" />
      <div class="card-body">
        <h5 class="card-title" style="text-align: center">
          {{ place.result_object.name }}
        </h5>
        <hr />
        <p class="card-text" style="text-align: justify">
          {{ place.result_object.category.name }}
        </p>
        <a @click.prevent="showDetail" href="" class="btn btn-primary">Show Detail</a>
      </div>

      <!-- <l-map style="height: 50vh">
        <l-geo-json :geojson="geojson" :options="geojsonOptions" />
      </l-map> -->
    </div>
  </div>
</template>

<style>
.card-title {
  color: #1e90ff;
}
</style>
