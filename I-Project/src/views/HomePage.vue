<script>
import Navbar from '../components/Navbar.vue';


import { mapActions, mapState } from 'pinia';
import { GoogleMap, Marker, MarkerCluster } from "vue3-google-map";
import { useIprojectStore } from '../stores';
import card from '../components/card.vue';


export default {
    name: "Home",
    components: {
        Navbar,
        GoogleMap,
    Marker,
    MarkerCluster,
    card
    },
    data() {
        return {
            lat: '',
            lng: '',
            apiKey: 'AIzaSyCMZYZzgkzXRe_Uq85KwgnBDZ8aeMG_Sqg'
        }
    },
    computed: {
        ...mapState(useIprojectStore, ['nearby'])
    },
    methods: {
        ...mapActions(useIprojectStore, ['fetchDataNearby'])
    },
    async created(){
    await this.$getLocation()
      .then((coordinates) => {
        console.log(coordinates);
        this.lat = coordinates.lat
        this.lng = coordinates.lng
        this.fetchDataNearby(coordinates.lat, coordinates.lng)
      })
      .catch((error) => {
        console.log(error);
      });
    }
}
</script>
<template>
    <Navbar />
    <!-- My List Page -->

    <div class="flex w-full justify-center items-center mt-20 pt-20">
        <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" :center="{lat: lat, lng: lng}" :zoom="15">
            <Marker :options="{ position: {lat: lat, lng: lng}, title: `Hi` }" />
            <MarkerCluster>
                <Marker v-for="(data, i) in nearby" :options="{ position: data.location, title: `${data.name}, ${data.rating}`, label:`${data.id}` }" :key="i" />
            </MarkerCluster>
        </GoogleMap>
    </div>


    <div class="flex w-full justify-center items-center grid grid-cols-3 gap-10 mt-20 pt-10 mx-10 pl-10">
        <h2>bambang</h2>
        <!-- card -->
        <card 
        v-for="n in nearby"
        :key="n.id"
        :data="n"
        :idx="n.id"
        />
</div>


</template>