<script>
import CardCourse from "../components/CardCourse.vue";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  computed: {
    ...mapState(useCounterStore, ["courseData"]),
    ...mapWritableState(useCounterStore, ["isPage"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchCourse"]),
  },
  created() {
    this.fetchCourse();
  },
  components: { CardCourse },
};
</script>

<template>
  <section
    class="section course"
    id="courses"
    aria-label="course"
    style="background-image: url('../assets/images/course-bg.jpg')"
  >
    <!-- <pre> {{ courseData }}</pre> -->
    <CardCourse
      v-for="course in courseData"
      :key="course.id"
      :course="course"
    />
  </section>
</template>
