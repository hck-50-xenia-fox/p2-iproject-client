import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'http://localhost:3000'
export const useIndexStore = defineStore('index', {
  state: () => ({
    cryptoData: [],
    isLogin: false,
    newsData: [],
    userWishlist: [],
    paymentResponse: {},
    isLogin : false
  }),
  getters: {

  },
  actions: {
    async userLogin(userLogin) {
      try {
        const { data } = await axios.post(`${baseUrl}/login`, userLogin)
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('status', data.status)
        this.isLogin = true
        this.router.push('/')
      } catch (error) {
        console.log(error);
      }
    },
    async userRegister(userRegister) {
      try {
        const { data } = await axios.post(`${baseUrl}/register`, userRegister)
        this.router.push('/login')
      } catch (error) {
        console.log(error)
      }
    },
    userLogout() {
      localStorage.clear()
      this.isLogin = false
      this.router.push('/login')
    },
    checkLogin() {
      if (localStorage.getItem('access_token')) {
        this.isLogin = true
      }
    },
    async fetchDataCrypto() {
      try {
        const { data } = await axios.get(`${baseUrl}/crypto`)
        this.cryptoData = data
      } catch (error) {
        console.log(error);
      }
    },
    updateCoins() {
      setTimeout(() => {
        this.fetchDataCrypto();
      }, 20000);
    },
    async fetchCryptoNews() {
      try {
        const { data } = await axios.get(`${baseUrl}/news`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.newsData = data
      } catch (error) {
        console.log(error);
      }
    },
    async wishListUser() {
      try {
        const { data } = await axios.get(`${baseUrl}/wishlist`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.userWishlist = data
      } catch (error) {
        console.log(error);
      }
    },
    async addWishlist(name,image){
      try {
        const {data} = await axios.post(`${baseUrl}/wishlist`,{coin_name : name,coin_image : image},{
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.router.push('/wishlist')
        console.log('success');

      } catch (error) {
        console.log(error);
      }
    },
    async subscribePremium() {
      try {
        let { data } = await axios({
          method: `POST`,
          url: `${baseUrl}/premium`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        // console.log(data);
        snap.pay(`${data.transactionToken}`, {
          onSuccess: async function (result) {

            if (result.transaction_status === 'capture') {
              await axios({
                method: `PATCH`,
                url: `${baseUrl}/update-premium`,
                headers: {
                  access_token: localStorage.getItem('access_token')
                }
              })
            }


          },

          //? Opsional dipake
          onPending: function (result) { console.log('pending'); console.log(result); },
          onError: function (result) { console.log('error'); console.log(result); },
          onClose: function () { console.log('customer closed the popup without finishing the payment'); }
        })
      } catch (err) {
        console.log(err);
      }
    },
  },

})
