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
      <div class="card">
        <div class="card-body">
          <h3 class="text-center">Here are some facts about cats</h3>
          <ul>
            <li v-for="fact in dataFact" :key="fact">{{ fact }}</li>
          </ul>
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
