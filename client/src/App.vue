<script>
import { mapActions } from 'pinia';
import NavBar from './components/NavBar.vue';
import { useCounterStore } from './stores/counter';
export default {
  components: { NavBar },
  methods: {
    ...mapActions(useCounterStore, ['loginCheck'])
  },
  created() {
    // this.loginCheck()
  }
}
</script>

<template>
  <NavBar />

  <router-view />
</template>