<script>
import { mapActions, mapState } from 'pinia'
import { useSewamotorStore } from '../stores/sewamotor.js'

export default {
    data () {
        return {
            email: "",
            password: ""
        }
    },
    computed: {
        ...mapState(useSewamotorStore, [''])
    },
    methods: {
        ...mapActions(useSewamotorStore, ['login']),
        handleLogin(email, password) {
            this.login(email, password)
            this.email = ""
            this.password = ""
        }
    },
}
</script>

<template>
    <div id="fh5co-content-section">
        <div class="container">
            <div class="row row-bottom-padded-md">
                <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box fadeInUp animated-fast">
                    <h1>Login</h1>
                    <p>Please do not reuse a password you have used on another
                        service or a password that is easily guessed.</p>
                    <form class="p-4 p-md-5 border rounded-3 bg-light">
                        <div class="form-floating mb-3">
                            <input v-model="email" type="email" class="form-control email" style="height: 60px"
                                id="login-email" placeholder="Enter email address ...">
                            <label for="login-email">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input v-model="password" type="password" class="form-control" style="height: 60px"
                                id="login-password" placeholder="Enter your password ...">
                            <label for="login-password">Password</label>
                        </div>
                        <div class="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"> Remember
                                me
                            </label>
                        </div>
                        <div class="d-flex justify-content-center mt-4 mb-3">
                            <p>
                                <a @click.prevent="handleLogin(email, password)" class="btn btn-primary btn-lg btn-demo" href="#">Login</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>