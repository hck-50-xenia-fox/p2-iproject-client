<script>
  export default {
    props : ['news']
  }
</script>

<template>
  <div class="col-sm-6 col-md-4">
          <div class="post-box blue-bg">
            <div class="post-img"></div>
            <span class="badge badge-danger">Hot</span>
            <div class="post-title">{{news.title}}</div>
            <div class="post-link"><a :href="news.url">Learn more</a></div>
          </div>
        </div>
</template>