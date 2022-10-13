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
        <button v-if="role === 'Customer'" @click.prevent="this.payments(product.price)" id="pay-button"
          class="btn btn-warning">
          Buy <i class="bi bi-basket"></i>
        </button>
        <button v-if="role === 'Admin'" class="btn btn-danger" @click="deleteProduct(product.id)">
          Delete <i class="bi bi-trash3"></i>
        </button>
      </div>
    </div>
  </div>
</template>
