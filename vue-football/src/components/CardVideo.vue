<script>
  export default {
    name: "video-card",
    props: ["highlight"],

    methods: {
      toLocalDate(date) {
        return new Date(date).toLocaleDateString("en-US", {
          hour12: false,
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          // second: "2-digit",
        });
      }
    }
  }
</script>

<template>
 <div class="col-4 mb-4 mx-auto">
   <div class="card shadow-sm bg-white rounded" style="margin-top: 0.5em">
     <div class="card-body">
      <h6 class="card-title" style="text-align: center;">{{highlight.title}}</h6>
      <hr>
      <img :src="highlight.thumbnail" style="width: 100%; height: 15em;" class="rounded float-start" alt="match-highlight">
      <br>
      <h6 class="card-title" style="text-align: center;">{{toLocalDate(highlight.date)}}</h6>
      <div style="text-align: center;">
        <a :href="highlight.url" target="_blank" class="btn btn-outline-secondary">Play Video</a>
      </div>
     </div>
   </div>
 </div>

</template>