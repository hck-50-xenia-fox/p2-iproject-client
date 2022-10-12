<script>
import { mapActions } from 'pinia';
import { useIndexStore } from '../stores';

  export default {
    props : ['crypto','index'],
    methods: {
      ...mapActions(useIndexStore,['addWishlist'])
    },
  }
</script>

<template>
   <tr>
      <th scope="row">{{index + 1}}</th>
      <td>
        <img :src="crypto.image" style="width: 2rem;" class="me-2">
        <span>{{crypto.name}}</span>
        <span class="ms-2 text-uppercase text-muted">{{crypto.symbol}}</span>
      </td>
      <td>${{crypto.current_price}}</td>
      <td :class="[crypto.price_change > 0 ? 'text-success' : 'text-danger']">{{crypto.price_change}}%</td>
      <td>${{crypto.volume.toLocaleString()}}</td>
      <td class="mr-5"><button @click.prevent="addWishlist(crypto.name,crypto.image)" class="bg-yellow">
        <i class="bi bi-star"></i>
      </button></td>
    </tr>
    
</template>