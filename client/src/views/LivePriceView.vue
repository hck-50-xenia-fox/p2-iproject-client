<script>
import { mapActions, mapState } from 'pinia';
import { useIndexStore } from '../stores';

  export default{
    methods : {
      ...mapActions(useIndexStore,['livePrice'])
    },
    computed : {
      ...mapState(useIndexStore,['price'])
    },
    mounted() {
      this.livePrice()
    }
  }
</script>

<template>
  <h1>
    {{price}}
  </h1>
</template>