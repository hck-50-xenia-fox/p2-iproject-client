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
