<script>
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "../stores";
import CardNews from '../components/CardNews.vue'
import Navbar from "../components/Navbar.vue";

export default {
  components:{
    CardNews,
    Navbar
  },
  computed: {
    ...mapState(useIndexStore, ["newsData"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["fetchCryptoNews"]),
  },
  created() {
    this.fetchCryptoNews();
  },
};
</script>

<template>
  <Navbar/>
  <div class="latest-news container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-sm-8">
          <div class="row-title">Latest news crypto</div>
        </div>
      </div>

      <div class="row">
        <CardNews v-for="news in newsData" :key="news" :news="news" />
      </div>
    </div>
  </div>
</template>
