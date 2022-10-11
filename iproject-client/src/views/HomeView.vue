<script>
  import { useLoginStore } from "../stores/storeLogin";
  import {useProductStore} from "../stores/storeProduct"
  import {mapActions, mapState} from 'pinia'
  import CardProduct from '../components/CardProduct.vue'
  export default{
    name: "LoginView",
    components:{
      CardProduct
    },
    methods:{
      ...mapActions(useLoginStore, ["loginCheck"]),
      ...mapActions(useProductStore, ["fetchProduct"])
    },
    computed:{
      ...mapState(useProductStore, ["dataProduct"])
    },
    created(){
      this.fetchProduct()
      this.loginCheck()
    }
  }
</script>

<template>
  <div class="container">
    <div class="row">
      <CardProduct v-for="product in dataProduct" :key="product.id" :product="product"/>
    </div>
  </div>
</template>
