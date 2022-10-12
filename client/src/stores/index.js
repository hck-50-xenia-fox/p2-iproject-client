import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'http://localhost:3000'
import {createClient} from '@supabase/supabase-js'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2bHJxbXlmeGZzaXB4b29odXhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU1NjE3MjAsImV4cCI6MTk4MTEzNzcyMH0.sm1Hm8SWvM3o1xHERgs8WutBgEte-tfnNygA-EGO12I'
const SUPABASE_URL = 'https://cvlrqmyfxfsipxoohuxa.supabase.co'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
// const [session, setSession] = useState(null);

export const useIndexStore = defineStore('index', {
    state: () => {
        return {
            loginState: false,
            characters: [],
            summons: []
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
            try {
                const data = await supabase.auth.signIn({
                    provider: 'twitter',
                    
                  }, {
                    redirectTo: 'http://localhost:5173/login'
                })
                  localStorage.setItem('session', JSON.stringify(data))
                //   localStorage.setItem('user', JSON.stringify(user))
                  // console.log(data.session.provider_token, '<<>>>')
                //   console.log(session.provider_token, '<<<<')
                  // this.useEffect()
                  // console.log()
                  console.log('login sukses')
            } catch(err) {
                console.log(err)
            }
        },
        async logoutTwitter() {
            const { error } = await supabase.auth.signOut()
        },
        supabaseAuth() {
            supabase.auth.onAuthStateChange((_event, session) => {
                // this.session = session
                // console.log(session, '<<<<<<<')
                console.log(localStorage.getItem('supabase.auth.token'), '>>>>')
            })
        },
        // async useEffect() {
        //     setSession(supabase.auth.session())
        //     supabase.auth.onAuthStateChange((_event, session) => {
        //         setSession(session)
        //         console.log(session, '<<<<<<<')
        //     })
        // }
        
        async getCharacters() {
            try {
                let {data} = await axios({
                    method: 'get',
                    url: `${baseUrl}/characters`
                })
                this.characters = data
            } catch (error) {
                console.log(error)
            }
        },
        async getSummons() {
            try {
                let {data} = await axios({
                    method: 'get',
                    url: `${baseUrl}/summons`
                })
                this.summons = data
            } catch (error) {
                console.log(error)
            }
        }
    }
})