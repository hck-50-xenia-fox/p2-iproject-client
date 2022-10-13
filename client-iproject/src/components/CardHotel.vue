<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useStoreIndex } from "../stores/storeIndex";

import { latLng } from "leaflet";
// import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";

import { LMap, LGeoJson } from "@vue-leaflet/vue-leaflet";

export default {
  name: "CardHotel",
  props: ["hotel"],
  methods: {
    ...mapActions(useStoreIndex, ["detailById"]),
    showDetail() {
      const payload = {
        name: this.hotel.name,
        description: this.hotel.description || null,
        imgURL: this.hotel.photo.images.large.url,
        address: this.hotel.address || null,
        priceRange: this.hotel.price || null,
        lat: this.hotel.latitude || this.hotel.result_object.latitude,
        long: this.hotel.longitude || this.hotel.result_object.longitude,
      };
      this.detailById(payload);
      this.$router.push("/detail");
    },
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
  <!-- {{hotel}} -->
  <div class="col-md-3 mb-4 mx-auto">
    <div class="card">
      <img
        v-if="hotel.name"
        class="card-img-top"
        :src="hotel.photo.images.small.url"
        alt="Card image cap"
        style="height: 200px"
      />
      <div class="card-body">
        <h5 class="card-title" style="text-align: center">
          {{ hotel.name }}
        </h5>
        <hr />
        <p class="card-text" style="text-align: justify">
          Location: {{ hotel.location_string }}
        </p>
        <p class="card-text" style="text-align: justify">
          Price: {{ hotel.price }}
        </p>
        <p class="card-text" style="text-align: justify">
          Rating: {{ hotel.rating }}
        </p>
        <a @click.prevent="showDetail()" href="" class="btn btn-primary"
          >Show Detail</a
        >
        <!-- <p class="card-text" style="text-align: justify">{{ job.jobType }}</p>
                <div class="d-flex justify-content-between">
                    <a @click="$router.push(`/job/${job.id}`)" href="" class="btn btn-outline-primary btn-sm ">Read
                        more</a>
                    <a v-if="pageName !== 'favorite' && login" @click.prevent="handleAddFavorite(job.id)" href=""
                        class="btn btn-outline-warning btn-sm"><i class="fa-regular fa-bookmark"></i></a>
                </div> -->
      </div>

      <l-map style="height: 50vh">
        <l-geo-json :geojson="geojson" :options="geojsonOptions" />
      </l-map>
    </div>
  </div>
</template>

<style>
.card-title {
  color: #1e90ff;
}
</style>
