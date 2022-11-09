<script>
export default {
  name: "HeaderAlbum",
  props: ["headerType", "imageUrl", "titleName"],
};
</script>

<template>
  <section class="container mt-0">
    <div class="row mb-5 d-flex align-items-top">
      <div class="col-2 align-items-center">
        <img :src="imageUrl" width="170" />
      </div>
      <div class="col-10">
        <h3 class="fw-light text-light bg-black">{{ headerType }}</h3>
        <h1 class="-mt-4 mb-4 text-4xl text-light bg-black">
          {{ titleName }}
        </h1>
        <div class="row d-flex align-items-center text-light bg-black">
          <div class="col-1">
            <h1><i class="bi bi-play-fill"></i></h1>
          </div>
          <div class="col-1">
            <h3><i class="bi bi-heart-fill"></i></h3>
          </div>
          <div class="col-1">
            <h2><i class="bi bi-download bold"></i></h2>
          </div>
          <div class="col-1">
            <h1><i class="bi bi-three-dots"></i></h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
