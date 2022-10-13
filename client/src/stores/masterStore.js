import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "http://localhost:3000"

export const useMasterStore = defineStore("master", {
  state: () => ({
    isLogin: false,
    dataPlayerLogin: {},
    statsPlayerLogin: {},
    topPlayer: [],
    dataStreamer: [],
    dataPuzzle: [],
    dataUtube: [],
    detailUtube: {}

  }),
  actions: {
    async register(data) {
      try {

        const newUser = await axios({
          url: `${baseUrl}/register`,
          method: "POST",
          data: data
        })

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Register success!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.push('/')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
    },
    async login(loginUser) {
      try {
        // console.log(loginUser.email, "<<<")
        const { data } = await axios({
          url: `${baseUrl}/login`,
          method: "POST",
          data: {
            email: loginUser.email,
            password: loginUser.password
          }
        })

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login success!',
          showConfirmButton: false,
          timer: 1500
        })
        // console.log(data)
        localStorage.setItem("access_token", data.access_token)
        this.isLogin = true
      } catch (error) {
        // console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
    },
    logout() {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Success logout!',
        showConfirmButton: false,
        timer: 1500
      })
      localStorage.clear()
      this.isLogin = false
      this.router.push('/')
    },
    async getChessData() {
      try {
        const { data } = await axios.get(`${baseUrl}/chessProfile`, {
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })

        const stats = await axios.get(`${baseUrl}/chessStats`, {
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })

        this.statsPlayerLogin = stats.data
        this.dataPlayerLogin = data
      } catch (error) {
        // console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
    },
    async getTopPlayers() {
      try {
        const { data } = await axios.get(`${baseUrl}/top10Player`)
        this.topPlayer = data.bullet
      } catch (error) {
        // console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
    },
    async getStreamer() {
      try {
        const { data } = await axios.get(`${baseUrl}/getStreamer`)

        this.dataStreamer = data.data
      } catch (error) {
        // console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
    },
    async getPuzzle() {
      try {
        const { data } = await axios.get(`${baseUrl}/getPuzzle`
        )
        this.dataPuzzle = data.data
      } catch (error) {
        // console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
    },
    async getYoutube() {
      try {
        const { data } = await axios.get(`${baseUrl}/youtube`)
        this.dataUtube = data
      } catch (error) {
        // console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
    },
    async getYoutubeDetail(params) {
      try {
        console.log(params.streamId)
        const param = params.streamId

        const { data } = await axios.get(`${baseUrl}/youtube-detail/${param}`)
        this.detailUtube = data
      } catch (error) {
        // console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
    }
  }
})