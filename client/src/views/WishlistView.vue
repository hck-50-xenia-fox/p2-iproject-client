<script>
import { mapState, mapActions } from "pinia";
import { useIndexStore } from "../stores";
import WishlistCard from '../components/WishlistCard.vue'
import Navbar from "../components/Navbar.vue";

export default {
  data(){
    return {
      amount : '',
    }
  },
  components : {
    WishlistCard,
    Navbar
  },
  computed: {
    ...mapState(useIndexStore, ["userWishlist",'exchange']),
  },
  methods: {
    ...mapActions(useIndexStore, ["wishListUser",'exchangeRate']),
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
    <form action="">
      <input v-model="amount" type="text" placeholder=""> <span>IDR TO USD </span>
      <button @click.prevent="exchangeRate(amount)" type="submit">SUBMIT</button>
    </form>
    <p>Result : <span>{{exchange}}$</span></p> 
    <div class="row">
     <WishlistCard v-for="wishlist in userWishlist" :key="wishlist" :wishlist="wishlist"/>
    </div>
  </div>
</template>
