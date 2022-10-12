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
      ...mapState(useProductStore, ["dataProduct", "role"])
    },
    created(){
      this.fetchProduct()
      this.loginCheck()

      if(localStorage.getItem("access_token")){
        
      }
    }
  }
</script>

<template>
  <div class="container mt-2">
    <button v-if="role === 'Admin'" class="btn btn-primary" @click.prevent="$router.push('/product/add')">Add</button>
    <div class="row">
      <CardProduct v-for="product in dataProduct" :key="product.id" :product="product"/>
    </div>
  </div>
</template>
