import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'http://localhost:3000'

export const useIndexStore = defineStore('index', {
    state: () => {
        return {

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
                console.log('login sukses')  
            } catch (error) {
                console.log(error)
            }
        }
    }
})