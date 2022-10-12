<script>
import { mapActions } from "pinia";
import { useProductStore } from "../stores/storeProduct";
export default {
  name: "CardProduct",
  props: ["product"],
  computed: {
    ...mapActions(useProductStore, ["payments"]),
  },
};
</script>

<template>
  <div class="col-3 mt-4">
    <div class="card">
      <img :src="product.imgUrl" class="card-img-top" alt="..." />
      <div class="card-body">
        <h6 class="card-title">{{ product.name }}</h6>
        <p>Rp.{{ product.price }}</p>
        <button @click.prevent="this.payments()" id="pay-button" class="btn btn-primary">
          Buy
        </button>
      </div>
    </div>
  </div>
</template>
