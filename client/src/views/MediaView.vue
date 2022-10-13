<script>
import Twitter from '../components/Twitter.vue'

export default {
    name: 'MediaView',
    components: {
        Twitter
    }
}
</script>


<template>



<div class="container mt-5 mb-5 pt-2 pb-2">
    <div class="">
      <div class="row mt-3 justify-content-center">
        <div class="row mt-3 mb-3 justify-content-center">

            <h1 style="text-align:center">Follow our Twitter Account to obtain daily news and update!</h1>
        </div>
        <Twitter />
        
      </div>
    </div>
  </div>

</template>