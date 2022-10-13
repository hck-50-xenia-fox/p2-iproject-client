<script>
import { mapActions, mapState } from 'pinia'
import { useSewamotorStore } from '../stores/sewamotor.js'

export default {
    computed: {
        ...mapState(useSewamotorStore, ['statusLogin'])
    },
    methods: {
        ...mapActions(useSewamotorStore, ['handleLogout', 'checkLogin']),
        logout() {
            this.handleLogout()
        }
    },
    created () {
        this.checkLogin()
    }
}
</script>

<template>
    <nav class="fh5co-nav" role="navigation">
        <div class="top-menu">
            <div class="container">
                <div class="row">
                    <div class="col-xs-2">
                        <div id="fh5co-logo"><a @click.prevent="$router.push({ name: 'home'})"
                                href="#">SewaMotor<span>.</span></a></div>
                    </div>
                    <div class="col-xs-10 text-right menu-1">
                        <ul>
                            <li class="active"><a @click.prevent="$router.push({ name: 'rent'})" href="index.html">Rent
                                    a Motorcycle</a></li>
                            <li><a href="" @click.prevent="$router.push({name: 'about'})">About</a></li>
                            <li class="btn-cta"><a @click.prevent="$router.push({name: 'login'})" v-if="!statusLogin"
                                    href="#"><span>Login</span></a></li>
                            <li class="btn-cta"><a v-if="!statusLogin" href="#" @click.prevent="$router.push({name: 'register'})" ><span>Register</span></a></li>
                            <li><a v-if="statusLogin" @click.prevent="logout" href="">Logout</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </nav>
</template>