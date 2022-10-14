<script>
export default {
  props: ["book"],
};
</script>
<template>
  <div class="w-56 shadow-xl card bg-base-100">
    <div id="img-container w-100">
      <RouterLink :to="`/detail/${book.id}`">
        <img :src="book.volumeInfo.imageLinks.thumbnail" class="m-auto" />
      </RouterLink>
      <div>
        <!-- <img :src="favorite.Product.imgCard" class="m-auto" /> -->
      </div>
    </div>
    <div class="p-2 card-body">
      <div class="flex flex-col">
        <h2 class="justify-center text-sm text-center card-title">
          {{ book.volumeInfo.title }}
          <!-- {{ product ? product.name : favorite.Product.name }} -->
        </h2>
        <div class="flex flex-row-reverse items-end">
          <p class="self-end text-center"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
