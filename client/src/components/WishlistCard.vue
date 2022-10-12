<script>
export default {
  props: ["wishlist"],
};
</script>

<template>
  <div class="col-md-4 mb-4">
    <div class="card" style="width: 12rem">
      <img :src="wishlist.coin_image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">
          {{ wishlist.coin_name }}
          <span
            ><button style="padding: 8px; font-size: 14px; border-radius: 8px">
              <i class="bi bi-trash-fill"></i></button
          ></span>
        </h5>
      </div>
    </div>
  </div>
</template>
