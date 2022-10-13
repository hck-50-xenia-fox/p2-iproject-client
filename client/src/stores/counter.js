const baseUrl = "https://montal.herokuapp.com";
import Swal from "sweetalert2";
import axios from "axios";
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      isLogin: false,
      movies: [],
      paymentLink: "",
      mypurchases: [],
    };
  },
  actions: {
    loinCheck() {
      if (localStorage.getItem("access_token")) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    async logIn(email, password) {
      try {
        const response = await axios({
          url: `${baseUrl}/login`,
          method: "post",
          data: {
            email,
            password,
          },
        });
        this.isLogin = true;
        localStorage.setItem("access_token", response.data.access_token);
      } catch (err) {
        console.log(err);
      }
    },
    async register(username, name, email, password) {
      try {
        await axios({
          url: `${baseUrl}/register`,
          method: "post",
          data: {
            username,
            name,
            email,
            password,
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
    async fetchMovies(page, search) {
      try {
        const response = await axios({
          url: `${baseUrl}/movies`,
          method: "get",
          params: {
            page: page ? page : 1,
            search: search ? search : "",
          },
        });
        console.log(response.data.result);
        this.movies = response.data.result;
        console.log(this.movies);
      } catch (err) {
        console.log(err);
      }
    },
    async addPurchase(id, price) {
      try {
        const response = await axios({
          url: `${baseUrl}/payment/${id}`,
          method: "post",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            price,
          },
        });
        console.log(response.data);
        this.paymentLink = {
          OrderNumber: response.data.OrderNumber,
          Pay: response.data.Pay,
        };
        Swal.fire({
          title: "<strong>Click here to Pay</strong>",
          icon: "info",
          html: `<a href="${this.paymentLink.Pay}">links</a>`,
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
        });
      } catch (err) {
        console.log(err);
      }
    },
    async addDataPurchase(movieId) {
      try {
        await axios({
          url: `${baseUrl}/rents`,
          method: "post",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            movieId,
          },
        });
        this.router.push("/rents");
        this.fetchMyPurchases();
      } catch (err) {
        console.log(err);
      }
    },
    async fetchMyPurchases() {
      try {
        const response = await axios({
          url: `${baseUrl}/mypurchase`,
          method: "get",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.mypurchases = response.data;
        console.log(response.data, "====");
      } catch (err) {
        console.log(err);
      }
    },
    async handleCredentialResponse(response) {
      console.log("Encoded JWT ID token: " + response.credential);
      try {
        let data = await axios({
          url: `${baseUrl}/google-signin`,
          method: "post",
          headers: {
            google_token: response.credential,
          },
        });
        // console.log(data);
        localStorage.setItem("access_token", data.data.access_token);
        this.isLogin = true;
        this.router.push("/");
        Swal.fire("Logged In!", "You have logged in!", "success");
      } catch (err) {
        // console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something is not right, please log in with other method!",
        });
      }
    },
  },
});
