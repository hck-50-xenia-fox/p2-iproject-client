import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'http://localhost:3000'


export const useIndexStore = defineStore('index', {
    state: () => {
        return {
            loginState: false,

        }
    },
    getters: {

    },
    actions: {
        async handleLogin(user) {
            try {
                let { data } = await axios({
                    method: 'post',
                    url: `${baseUrl}/users/login`,
                    data: {
                        email: user.email,
                        password: user.password
                    }
                })
                localStorage.setItem('access_token', data.access_token)
                localStorage.setItem('name', data.username)
                // console.log('login sukses')
                this.checkLogin()
                this.router.push('/')
            } catch (error) {
                console.log(error)
            }
        },
        async checkLogin() {
            if(localStorage.getItem('access_token')) {
                this.loginState = true
            }
        },
        async handleLogout() {
            localStorage.clear()
            this.loginState = false
            this.router.push('/')
        },
        async loginTwitter() {
            const { data, error } = await supabase.auth.signInWithOAuth({
              provider: 'twitter',
            })
        },
        async logoutTwitter() {
            const { error } = await supabase.auth.signOut()
        }
    }
})