<script>
import {mapActions, mapState} from 'pinia'
// import {useIndexStore} from '../router/index'

export default {
    name: 'SummonCard',
    props: ['summon'],
    methods: {
        
    },
    computed: {

    }
}
</script>

<template>
    <div class="card mx-3 my-3" style="width: 18rem; background-color: honeydew;">
  <img class="card-img-top mt-4 img-fluid" :src="summon.imageUrl" alt="Card image cap" >
  <div class="row justify-content-end mt-2" >
    <div class="col-2">
        <a href="" ><i class="fa-regular fa-star"></i></a>
    </div>
  </div>
  <div class="card-body">
    <h5 class="card-title">{{summon.name}}</h5>
    <p class="card-text">Element: <br>{{summon.element}}</p>

    
  </div>
</div>


</template>