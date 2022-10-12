<script>
import {mapActions, mapState} from 'pinia'
import {useIndexStore} from '../router'

export default {
    name: 'CharactersCard',
    props: ['character'],
    methods: {
        
    },
    computed: {

    }
}
</script>

<template>
    <div class="card mx-3 my-3" style="width: 18rem; background-color: honeydew;">
  <img class="card-img-top mt-4" :src="character.imageUrl" alt="Card image cap" style="height:150px">
  <div class="row justify-content-end mt-2" >
    <div class="col-2">
        <a href="" ><i class="fa-regular fa-star"></i></a>
    </div>
  </div>
  <div class="card-body">
    <h5 class="card-title">{{character.name}}</h5>
    <p class="card-text">{{character.description}}</p>

    
  </div>
</div>


</template>