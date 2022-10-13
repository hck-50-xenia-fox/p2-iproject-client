<script>
import { mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    computed: {
        ...mapState(useCounterStore, ['isLogin'])
    },
    methods: {
        logoutButton() {
            localStorage.clear()
        }
    }
}
</script>

<template>
    <!-- NavBar -->
    <div class="sticky-top">
        <nav class="navbar d-flex justify-content-between navbar-light" style="width:100%">
            <div class="col-2 ps-1">
                <router-link to="/" class="navbar-brand" href="#">
                    <img src="/movie-rental.png" style="height: 2rem" alt="logo" />
                </router-link>
            </div>
            <div class="navbar-nav col-7">
                <div class="row d-flex justify-content-center">
                    <router-link to="/" class="nav-link px-4 text-center col-2" href="#" id="link">Movies</router-link>
                    <router-link to="/rents" class="nav-link px-4 text-center col-2" href="#" id="link">Rents
                    </router-link>
                </div>
            </div>
            <div v-if="!isLogin " class="col-2 d-flex justify-content-end">
                <router-link to="/login" class="nav-link link-light" id="link" href="#">Login
                </router-link>
            </div>
            <div v-if="isLogin" class="col-2 d-flex justify-content-end">

                <a @click.prevent="logoutButton" class="nav-link link-light" id="link" href="#">Logout</a>
            </div>
        </nav>
    </div>
</template>