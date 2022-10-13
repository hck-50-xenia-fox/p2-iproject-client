<script>
import { RouterLink } from 'vue-router'
import { mapActions } from "pinia";
import { useIprojectStore } from "../stores/index";
export default {
    name: "Login",
    data() {
        return {
            newUser: {
                email: '',
                password: ''
            }
        }
    },
    components: {
        RouterLink
    },
    methods: {
        ...mapActions(useIprojectStore, ['login', 'handleCredentialResponse', 'handleFacebook']),
        loginHandle() {
            this.login(this.newUser)
        }
    },
    mounted() {
        const cb = this.handleCredentialResponse

        window.onload = function () {
            google.accounts.id.initialize({
                client_id: "653896340625-ciq35qf1df4npj2u99a93409crlg3l26.apps.googleusercontent.com",
                callback: cb
            });
            google.accounts.id.renderButton(
                    document.getElementById("google-button-login"),
                    { theme: "outline", size: "large" }  // customization attributes
                );;
            google.accounts.id.prompt(); // also display the One Tap dialog
        }

    },
}
</script>

<template>
    <div class="mt-10">
        <div class="p-8 lg:w-1/2 mx-auto">
            <div class="bg-white rounded-t-lg p-8">
                <p class="text-center text-sm text-gray-400 font-light">Sign in with</p>
                <div>
                    <div class="flex items-center justify-center space-x-4 mt-3">
                        <div id="google-button-login"></div>
                        <div id="status">
                        </div>

                    </div>
                </div>
            </div>
            <div class="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
                <p class="text-center text-sm text-gray-500 font-light"> Or sign in with credentials </p>
                <form @submit.prevent="loginHandle()" class="mt-6">
                    <div class="relative"> <input v-model="newUser.email"
                            class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                            id="username" type="text" placeholder="Email" />
                        <div class="absolute left-0 inset-y-0 flex items-center"> <svg
                                xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-3 text-gray-400 p-1"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg> </div>
                    </div>
                    <div class="relative mt-3"> <input v-model="newUser.password"
                            class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                            id="username" type="text" placeholder="Password" />
                        <div class="absolute left-0 inset-y-0 flex items-center"> <svg
                                xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-3 text-gray-400 p-1"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                            </svg> </div>
                    </div>

                    <div class="flex items-center gap-2 justify-center mt-8">
                        <button
                            class="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                            <RouterLink to="/register">Register</RouterLink>
                        </button>
                        <button
                            class="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                            Sign in </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>