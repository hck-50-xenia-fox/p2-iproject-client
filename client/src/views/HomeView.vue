<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  methods: {
    ...mapActions(useCounterStore, ["signInWithFacebook"]),
    signIn() {},
  },
};
</script>

<template>
  <section
    class="hero"
    id="home"
    aria-label="hero"
    style="background-image: url('../assets/images/hero-bg.jpg')"
  >
    <div class="container">
      <div class="hero-content">
        <button
          class="btn btn-md btn-primary"
          type="button"
          @click.prevent="signInWithFacebook"
        >
          Sign In
        </button>
        <p class="section-subtitle">Better Learning Future With Us</p>

        <h2 class="h1 hero-title">Education Is About Academic Excellence</h2>

        <p class="hero-text">
          Sed eu volutpat arcu, a tincidunt nulla quam, feugiat sit amet ipsum
          a, dapibus porta velit.
        </p>

        <a href="#" class="btn btn-primary">
          <span class="span">Get Started Today</span>

          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </a>
      </div>

      <figure class="hero-banner">
        <img
          src="../assets/images/hero-banner.png"
          width="500"
          height="500"
          loading="lazy"
          alt="hero image"
          class="w-100"
        />

        <img
          src="../assets/images/hero-abs-1.png"
          width="318"
          height="352"
          loading="lazy"
          aria-hidden="true"
          class="abs-img abs-img-1"
        />

        <img
          src="../assets/images/hero-abs-2.png"
          width="160"
          height="160"
          loading="lazy"
          aria-hidden="true"
          class="abs-img abs-img-2"
        />
      </figure>
    </div>
  </section>
</template>
