<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  methods: {
    ...mapActions(useCounterStore, ["fetchCourse", "payment"]),

  },
  computed: {
    ...mapState(useCounterStore, ["courseData"]),
  },
  props: ["course"],
};
</script>

<template>
  <div>
    <li>
      <div class="category-card">
        <div class="card-icon">
          <ion-icon name="color-palette-outline"></ion-icon>
        </div>

        <div>
          <h3 class="h3 card-title">
            <a href="#">{{ course.name }}</a>
          </h3>

          <h4 class="card-meta">{{ course.description }}</h4>
          <h3 class="card-meta">{{ course.price }}</h3>
          <button @click.prevent="payment"   id="pay-button">Buy!</button>
        </div>
      </div>
    </li>
  </div>
</template>

<!-- <div class="group">
  <div class="relative">
    <div class="w-full overflow-hidden">
      <div class="card">
      <div
        class="absolute bottom-0 px-2 py-9 h-16 flex items-center bg-gradient-to-t from-black w-full"
      >
        <p
          class="text-lg text-white uppercase inline-block align-start text-left pl-2"
        >
          {{ course.name }}
        </p>
      </div>
      <h2>{{ course.description }}</h2>
      <h2>{{ course.price }}</h2>
    </div>
  </div>
</div>
  <div class="flex justify-center items-center h-16">
    <button
      class="px-3 py-2 text-gray-900 bg-gray-100 rounded-sm focus:outline-none focus:ring focus:ring-gray-500 uppercase tracking-widest"
    >
      Buy
    </button>
  </div>
</div> -->
