<script>
import { mapActions, mapState } from 'pinia';
import { useIndexStore } from '../stores';

  export default {
    data(){
      return {
        status : '',
      }
    },
    computed: {
      ...mapState(useIndexStore,['isLogin'])
    },
    name : 'Navbar',
    methods : {
      ...mapActions(useIndexStore,['userLogout','subscribePremium','checkLogin'])
    },
    created(){
      this.checkLogin()
      this.status = localStorage.getItem('status')
    }
  }
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light ms-4">
  <a class="navbar-brand" href="#">
    <img src="../../public/favicon1.ico" alt="">
    <span class="ms-4">Eight Crypto</span>
    </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end me-4" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a @click.prevent="$router.push('/')" class="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item active" v-if="status ==='Premium'">
        <a @click.prevent="$router.push('/news')" class="nav-link" href="#">News<span class="sr-only"></span></a>
      </li>
      <li class="nav-item" v-if="isLogin">
        <a @click.prevent="$router.push('/wishlist')" class="nav-link" href="#">Wishlist</a>
      </li>
      <li class="nav-item" v-if="status ==='Free'">
        <a  @click.prevent="subscribePremium()" id="pay-button" class="nav-link" href="#">Subscribe Premium</a>
      </li>
      <li class="nav-item" v-if="isLogin">
        <a @click.prevent="userLogout()" class="nav-link" href="#">Logout</a>
      </li>
      <li class="nav-item" v-if="!isLogin">
        <a @click.prevent="$router.push('/login')" class="nav-link" href="#">Login</a>
      </li>
    </ul>
  </div>
</nav>
</template>