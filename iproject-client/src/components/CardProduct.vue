<script>
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../stores/storeProduct";
export default {
  name: "CardProduct",
  props: ["product"],
  methods: {
    ...mapActions(useProductStore, ["payments", "deleteProduct"]),
  },
  computed: {
    ...mapState(useProductStore, ["role"]),
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
        <button
          v-if="role === 'Customer'"
          @click.prevent="this.payments(product.price)"
          id="pay-button"
          class="btn btn-primary"
        >
          Buy
        </button>
        <button
          v-if="role === 'Admin'"
          class="btn btn-primary"
          @click="deleteProduct(product.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
