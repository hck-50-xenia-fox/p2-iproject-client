<script>
export default {
  name: "Headline",
};
</script>

<template>
  <div class="container-fluid d-flex justify-content-center align-items-center">
    <div>
      <div
        class="position-relative overflow-hidden p-2 p-md-4 m-md-4 text-center bg-light"
      >
        <img src="../assets/Headers.png" width="900rem" alt="" />
        <div class="col-md-11 p-lg-2 mx-auto my-1">
          <h1 class="display-4 fw-normal">Welcome to Spotify ✨</h1>
          <p class="lead fw-normal">
            Browse & stream your favorite music here!
          </p>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <button
          @click.prevent="$router.push('/login')"
          class="btn btn-light border-0"
          type="button"
          style="background-color: #1db954"
        >
          Click here to continue
        </button>
      </div>
    </div>
  </div>
</template>
