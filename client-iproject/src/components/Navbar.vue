<script>
import { mapActions, mapWritableState } from 'pinia';
import { RouterLink } from 'vue-router';
import { useStoreIndex } from '../stores/storeIndex';
export default {
    name: "Navbar",
    components: {
        RouterLink
    },
    methods: {
        ...mapActions(useStoreIndex, ['logout'])
    },
    computed: {
        ...mapWritableState(useStoreIndex, ['login'])
    },
    created() {
        let access_token = localStorage.getItem('access_token')
        if(access_token) {
            this.login = true
        }
    }
};
</script>

<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="../assets/Kalib.jpg" width="80" alt="Kalibro" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="fa-solid fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link active text-white" style="margin-left: 10px; font-weight: bold;" aria-current="page">Home</RouterLink>
                    </li>
                </ul>
                <div class="d-flex">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li v-if="!login" class="nav-item" style="margin-right: 10px;">
                            <RouterLink to="/login" style="text-decoration: none;">
                                <a class="nav-link text-white" style="font-weight: bold;" href="#">Sign In</a>
                            </RouterLink>
                        </li>
                        <li v-if="!login" class="nav-item" style="margin-right: 15px;">
                            <RouterLink to="/register" style="text-decoration: none;">
                                <a class="nav-link text-white" style="font-weight: bold;" href="#">Sign Up</a>
                            </RouterLink>
                        </li>
                        <li v-if="login" class="nav-item" style="margin-right: 20px;">
                            <a @click.prevent="logout" class="nav-link text-white" style="font-weight: bold;" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <!-- End Navbar -->
</template>
