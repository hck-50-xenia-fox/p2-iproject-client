<script >
import { RouterView } from 'vue-router'

export default{
  name:"app",
  components:{
    RouterView
  }
}
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  
  <RouterView />
</template>