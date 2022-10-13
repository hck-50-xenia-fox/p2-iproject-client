<script>
  import { useLoginStore } from "../stores/storeLogin";
  import {useHomeStore} from "../stores/storeHome"
  import {mapActions, mapState} from 'pinia'
  import CardProduct from '../components/CardProduct.vue'
  export default{
    name: "LoginView",
    components:{
      CardProduct
    },
    methods:{
      ...mapActions(useHomeStore, ["fetchAnimalFact", "fetchImageRandom"]),
      ...mapActions(useLoginStore, ["loginCheck"])
    },
    computed:{
      ...mapState(useHomeStore, ["dataFact", "dataImage"])
    },
    created(){
      this.fetchAnimalFact()
      this.fetchImageRandom()
      this.loginCheck()
    }
  }
</script>

<template>
  <div class="container">
    <div class="row mt-3">
      <h2 class="text-center">Home</h2>
      <div class="card">
        <div class="card-body">
          <h5>Here are some facts about cats</h5>
          <ul>
            <li v-for="fact in dataFact" :key="fact">{{ fact }}</li>
          </ul>
          <h5 class="text-center">Some random image</h5>
          <div class="d-flex justify-content-center">
            <img :src="dataImage.url" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  img{
    width: 300px;
    align-items: center;
  }
</style>
