<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useStoreIndex } from "../stores/storeIndex";

import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";

// import { LMap, LGeoJson } from "@vue-leaflet/vue-leaflet";

export default {
  name: "CardRestaurant",
  props: ["restaurant"],
  methods: {
    ...mapActions(useStoreIndex, ["detailById"]),
    showDetail(){
        const payload = {
          name: this.hotel.name,
          description: this.hotel.description || null,
          imgURL: this.hotel.photo.images.large.url,
          address: this.hotel.address ||null,
          priceRange: this.hotel.price || null,
          lat: this.hotel.latitude || this.hotel.result_object.latitude,
          long: this.hotel.longitude || this.hotel.result_object.longitude
        }
        this.detailById(payload)
        this.$router.push('/detail')
      }
  },
  computed: {
    ...mapState(useStoreIndex, ["pageName"]),
    ...mapWritableState(useStoreIndex, ["isLogin"]),

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
      <img v-if="restaurant.name"
        class="card-img-top"
        :src="restaurant.photo.images.small.url"
        alt="Card image cap"
        style="height: 200px"
      />
      <div class="card-body">
        <h5 class="card-title" style="text-align: center">
          {{ restaurant.name }}
        </h5>
        <hr />
        <p class="card-text" style="text-align: justify">
          Address: {{ restaurant.location_string }}
        </p>
        <p class="card-text" style="text-align: justify">
          Rating: {{ restaurant.rating }}
        </p>
        <p class="card-text" style="text-align: justify">
          Open/Close: {{ restaurant.open_now_text }}
        </p>
        <!-- <a @click.prevent="showDetail()" href="" class="btn btn-primary">Show Detail</a> -->
      </div>
      
    </div>
  </div>
</template>

<style>
.card-title {
  color: #1e90ff;
}
</style>
