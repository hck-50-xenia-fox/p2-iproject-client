<script>
    export default {
        name: "CardProduct",
        props: ["product"]
    }
</script>

<template>
     <div class="col-3 mt-4" data-aos="fade-up">
    <div class="card">
      <img :src="product.imgUrl" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h6 class="card-title">{{ product.name }}</h6>
        <p>Rp.{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>