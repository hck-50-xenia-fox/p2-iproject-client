<script>
  import NavBar from '../components/NavBar.vue' ;
  import Card from '../components/Card.vue';

  export default {
    name: "home",
    components: {
      NavBar,
      Card
    }
  }
</script>

<template>
  <NavBar />
  <Card />
</template>