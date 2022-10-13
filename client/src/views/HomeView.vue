<script>
import { mapActions, mapState } from 'pinia';
import { useIndexStore } from '../stores';
import TableRowCrypto from '../components/TableRowCrypto.vue'
import Navbar from "../components/Navbar.vue";

  export default {
    data (){
      return {
        titles : ['No','Coin','Price','Price Change','24h Volume','Wishlist']
      }
    },
    components : {
      TableRowCrypto,
      Navbar
    },
    computed : {
      ...mapState(useIndexStore,['cryptoData',"isLogin"])
    },
    methods : {
      ...mapActions(useIndexStore,['fetchDataCrypto','updateCoins','checkLogin'])
    },
    watch : {
      cryptoData() {
      this.updateCoins();
    },
    },
    created (){
      this.fetchDataCrypto()
      this.checkLogin()
    }
  }
</script>

<template>
  <Navbar/>
  <!-- <h1>HELLOWORLD</h1> -->
  <div class="container  py-5">
    <h1 class="text-center mb-4">Eight Crypto List Coin</h1>
    <div class="row">
      <table class="table  table-dark table-hover">
  <thead class="thead-dark">
    <tr >
      <th v-for="title in titles" :key="title">{{title}}</th>
    </tr>
  </thead>
  <tbody>
    <TableRowCrypto v-for="(crypto,i) in cryptoData" :key="i" :crypto="crypto" :index="i" />
  </tbody>
</table>
    </div> 

</div>
</template>
