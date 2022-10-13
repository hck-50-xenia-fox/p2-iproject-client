import { defineStore } from 'pinia'
import axios from 'axios'

const baseUrl = 'https://dota-news-update-2022.herokuapp.com'
export const useCounterStore = defineStore('counter', {
  state: () => {
    return{
      dataMatches: [],
      dataTournaments: [],
      dataTeams: [],
      dataHeroes: [],
      isLogin: false,
      access_toqen: localStorage.getItem("access_toqen"),
      email: localStorage.getItem("email"),
      dataSearchYoutube: []
    }
  },
  actions: {
    checkLogin(){
      if(localStorage.getItem("access_toqen")){
        this.isLogin = true
      }
    },
    async register(user) {
      try {
        await axios.post(`${baseUrl}/register`, user)
        this.$router.push('/login')
      } catch (error) {
        console.log(error);
      }
    },
    async login(user) {
      try {
        console.log(user);
        const {data} = await axios.post(`${baseUrl}/login`, user)
        localStorage.access_toqen = data.access_toqen
        this.isLogin = true
        this.$router.push('/')
      } catch (error) {
        console.log(error);
      }
    },
    async showMatches() {
      try {
        const {data} = await axios.get(`${baseUrl}/matches`, {
          headers: {
            access_toqen: localStorage.getItem("access_toqen")
          }
        })
        this.dataMatches = data
      } catch (error) {
        console.log(error)
      }
    },
    async showTournaments() {
      try {
        const {data} = await axios.get(`${baseUrl}/tournaments`, {
          headers: {
            access_toqen: localStorage.getItem("access_toqen")
          }
        })
        this.dataTournaments = data
      } catch (error) {
        console.log(error)
      }
    },
    async showTeams() {
      try {
        const {data} = await axios.get(`${baseUrl}/teams`, {
          headers: {
            access_toqen: localStorage.getItem("access_toqen")
          }
        })
        this.dataTeams = data
      } catch (error) {
        console.log(error)
      }
    },
    async showHeroes() {
      try {
        const {data} = await axios.get(`${baseUrl}/Heroes`, {
          headers: {
            access_toqen: localStorage.getItem("access_toqen")
          }
        })
        this.dataHeroes = data
      } catch (error) {
        console.log(error)
      }
    },
    async searchYoutube(search){
      try {
        const {data} = await axios.post(`${baseUrl}/search`, {search}, {
          headers: {
            access_toqen: localStorage.getItem("access_toqen")
          }
        })
        console.log(data);
        this.dataSearchYoutube = data
      } catch (error) {
        console.log(error);
      }
    }
  }
})
