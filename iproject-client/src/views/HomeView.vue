<script>
  import { useLoginStore } from "../stores/storeLogin";
  import {mapActions} from 'pinia'
  export default{
    name: "LoginView",
    methods:{
      ...mapActions(useLoginStore, ["loginCheck"])
    },
    created(){
      this.loginCheck()
    }
  }
</script>

<template>
  <h2>Test</h2>
</template>
