<script>
  export default {
    props : ['crypto','index']
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
    </tr>
    
</template>