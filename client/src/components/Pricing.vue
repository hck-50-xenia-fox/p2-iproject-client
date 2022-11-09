<script>
import { mapActions } from "pinia";
import { useIndexStore } from "../stores";
export default {
  name: "Pricing",
  methods: {
    ...mapActions(useIndexStore, ["snapPayment"]),
  },
};
</script>

<template>
  <header>
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-6 fw-normal text-light bg-black">
        Premium Membership Info
      </h1>
      <p class="fs-5 text-muted">Get access to the latest and hype music!</p>
      <!-- <div class="d-flex justify-content-center">
        <button @click="snapPayment" id="pay-button">Subscribe me</button>
      </div> -->
    </div>
  </header>

  <div class="row row-cols-1 row-cols-md-2 mb-3 text-center">
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">Free</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">
            Rp 0,-<small class="text-muted fw-light">/mo</small>
          </h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Million of songs & podcast</li>
            <li>6 skips/ hour</li>
            <li>Audio quality: High (160 kbps)</li>
          </ul>
          <button
            @click.prevent="$router.push('/register')"
            type="button"
            class="w-100 btn btn-lg btn-outline-primary"
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">Premium</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">
            Rp 30.000,-<small class="text-muted fw-light">/mo</small>
          </h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Million of songs & podcast</li>
            <li>Unlimited access with no skip</li>
            <li>Audio quality: Very high (320 kbps)</li>
          </ul>
          <button
            @click="snapPayment"
            id="pay-button"
            type="button"
            class="w-100 btn btn-lg btn-outline-primary"
          >
            Get started (Please log in first!)
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center align-items-center">
    <p class="h5 text-center text-light bg-black mt-5 mb-0">
      Already subscribed?
      <a
        @click.prevent="$router.push('/login')"
        href="#!"
        class="fw-bold text-light bg-black"
        ><u>Login to continue</u></a
      >
    </p>
  </div>
</template>
