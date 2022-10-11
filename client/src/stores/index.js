import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'http://localhost:3000'
export const useIndexStore = defineStore('index', {
  state: () => ({ 
    cryptoData : []
  }),
  getters: {

  },
  actions: {
    async userLogin(userLogin){
      try {
        const {data} = await axios.post(`${baseUrl}/login`,userLogin)
        localStorage.setItem('access_token',data.access_token)
        localStorage.setItem('status',data.status)
        this.router.push('/')
      } catch (error) {
        console.log(error);
      }
    },
    async userRegister(userRegister){
      try {
        const {data} = await axios.post(`${baseUrl}/register`, userRegister)
        this.router.push('/login')
      } catch (error) {
        console.log(error)
      }
    },
    async fetchDataCrypto(){
      try {
        const {data} = await axios.get(`${baseUrl}/crypto`)
        this.cryptoData = data
      } catch (error) {
        console.log(error);
      }
    }
  },
})
