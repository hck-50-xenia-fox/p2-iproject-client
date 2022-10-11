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
