<script>
import { mapActions } from 'pinia';
import { useIndexStore } from '../stores';

export default {
  props: ["wishlist"],
  methods : {
    ...mapActions(useIndexStore,['deleteWishlist'])
  }
};
</script>

<template>
  <div class="col-md-4 mb-4">
    <div class="card" style="width: 12rem">
      <img :src="wishlist.coin_image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">
          {{ wishlist.coin_name }}
          <a href="" @click.prevent="deleteWishlist(wishlist.id)">
            <i class="bi bi-trash-fill"></i>
          >
          </a>
        </h5>
      </div>
    </div>
  </div>
</template>
