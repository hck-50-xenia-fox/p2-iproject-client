<script>
// import VueGoogleAutocomplete from "vue-google-autocomplete";

import { mapActions } from "pinia";
import { useFoodStore } from "../stores/food";

// export default {
//   components: { VueGoogleAutocomplete },

//   data: function () {
//     return {
//       address: "",
//     };
//   },

//   mounted() {
//     this.$refs.address.focus();
//   },

//   methods: {
//     /**
//      * When the location found
//      * @param {Object} addressData Data of the found location
//      * @param {Object} placeResultData PlaceResult object
//      * @param {String} id Input container ID
//      */
//     getAddressData: function (addressData) {
//       this.address = addressData;
//     },
//   },
// };
export default {
  data: () => ({
    place: "",
  }),
  methods: {
    ...mapActions(useFoodStore, ["getRestaurantData"]),
    getRestaurant() {
      this.getRestaurantData(this.place);
    },
  },
  computed: {},
};
</script>

<template>
  <div class="max-w-md mx-auto">
    <form
      class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-black overflow-hidden mt-5 shadow-md"
      @submit.prevent="getRestaurant"
    >
      <div class="grid place-items-center h-full w-12 text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder=" Search something.."
        v-model="place"
      />
    </form>
  </div>
  <!-- <div>
    <h2>Your Address</h2>
    <pre>{{ address }}</pre>
    <vue-google-autocomplete
      ref="address"
      id="map"
      classname="form-control "
      placeholder="Please type your address"
      v-on:placechanged="getAddressData"
      country="sg"
    >
    </vue-google-autocomplete>
  </div> -->
</template>
