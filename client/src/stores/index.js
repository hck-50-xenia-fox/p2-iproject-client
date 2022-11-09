import { defineStore } from "pinia";
import axios from "axios";
const baseUrl = "https://iproject-mixtape.herokuapp.com";
// const baseUrl = "http://localhost:3000";

export const useIndexStore = defineStore("index", {
  state: () => {
    return {
      isLogin: false,
      newReleases: [],
      album: [],
      artist: [],
      paymentResponse: [],
      whatPage: "home"
    };
  },
  actions: {
    checkLogin() {
      if (localStorage.access_token) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    async submitLogin(payload) {
      try {
        const dataLogin = await axios({
          method: "POST",
          url: baseUrl + `/login`,
          data: {
            email: payload.email,
            password: payload.password,
          },
        });
        console.log(dataLogin, "INI DATA LOGIN");
        localStorage.setItem("access_token", dataLogin.data.access_token);
        this.$router.push("/new-release");
        this.isLogin = true;
        this.email = "";
        this.password = "";
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async submitRegister(user) {
      try {
        console.log(user, "ini di store");
        await axios({
          method: `POST`,
          url: baseUrl + `/register`,
          data: {
            username: user.username,
            email: user.email,
            password: user.password,
          },
        });
        this.$router.push("/login");
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async handleLogOut() {
      localStorage.clear();
      this.$router.push(`/`);
    },
    async getNewReleases() {
      try {
        const dataNewReleases = await axios({
          method: "GET",
          url: baseUrl + `/api/get-new-releases`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        this.newReleases = dataNewReleases.data.data;
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async getAlbumById(id) {
      try {
        const albumDetail = await axios({
          method: "GET",
          url: baseUrl + `/api/get-album?albumId=${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(albumDetail);
        this.album = albumDetail.data.data;
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async getArtistById(id) {
      try {
        const artistDetail = await axios({
          method: "GET",
          url: baseUrl + `/api/get-artist?artistId=${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(artistDetail);
        this.artist = artistDetail.data.data;
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
    async snapPayment() {
      try {
        let { data } = await axios({
          method: "POST",
          url: baseUrl + `/payments`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(data);

        snap.pay(`${data.transactionToken}`, {
          onSuccess: async (result) => {
            this.paymentResponse = result;
          },
          // onPending: function (result) {
          //   this.paymentResponse = result;
          // },
          // onError: function (result) {
          //   this.paymentResponse = result;
          // },
          // onClose: function () {
          //   /* You may add your own implementation here */
          //   alert("you closed the popup without finishing the payment");
          // },
        });
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
  },
});
