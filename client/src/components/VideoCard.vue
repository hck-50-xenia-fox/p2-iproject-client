<script>
import {mapActions, mapState} from 'pinia'
// import {useIndexStore} from '../router/index'

export default {
    name: 'VideoCard',
    props: ['video'],
    methods: {
        
    },
    computed: {

    }
}
</script>

<template>
    <div class="card mx-3 my-3" style="width: 18rem; background-color: honeydew;">
  <img class="card-img-top mt-4 img-fluid" :src="video.snippet.thumbnails.medium.url" alt="Card image cap" >
  <div class="row justify-content-end mt-2" >
  </div>
  <div class="card-body">
    <h5 class="card-title"> <a href="https://www.youtube.com/watch?v=${video.id.videoId}">{{video.snippet.title}}</a></h5>
    <!-- <p class="card-text">Element: <br>{{summon.element}}</p> -->
    <!-- masukkin link video, jadi ketika tamnel di klik, akan ke redirect ke : https://www.youtube.com/watch?v=${items.id.videoId} -->
    <!-- link: https://www.youtube.com/watch?v=${video.id.videoId}  -->
    
  </div>
</div>


</template>