<script>
import { mapState, mapActions } from "pinia";
import { useIndexStore } from "../stores";
import WishlistCard from '../components/WishlistCard.vue'
import Navbar from "../components/Navbar.vue";

export default {
  components : {
    WishlistCard,
    Navbar
  },
  computed: {
    ...mapState(useIndexStore, ["userWishlist"]),
  },
  methods: {
    ...mapActions(useIndexStore, ["wishListUser"]),
  },
  created() {
    this.wishListUser();
  },
};
</script>

<template>
  <Navbar/>
  <div class="container mx-auto mt-4">
    <h1 class="text-center mb-4">My Wishlist</h1>
    <div class="row">
     <WishlistCard v-for="wishlist in userWishlist" :key="wishlist" :wishlist="wishlist"/>
    </div>
  </div>
</template>
