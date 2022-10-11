<script>
import { mapActions, mapState } from 'pinia';
import { useIndexStore } from '../stores';
import TableRowCrypto from '../components/TableRowCrypto.vue'

  export default {
    data (){
      return {
        titles : ['No','Coin','Price','Price Change','24h Volume']
      }
    },
    components : {
      TableRowCrypto
    },
    computed : {
      ...mapState(useIndexStore,['cryptoData'])
    },
    methods : {
      ...mapActions(useIndexStore,['fetchDataCrypto'])
    },
    created (){
      this.fetchDataCrypto()
    }
  }
</script>

<template>
  <div class="container table-responsive py-5">
    <div class="row">
      <table class="table table-bordered table-dark table-hover">
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
