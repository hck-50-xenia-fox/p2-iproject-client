import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "https://guarded-caverns-00766.herokuapp.com";

export const useStore = defineStore("index", {
  state: () => ({
    posts: [],
    isLogin: false,
  }),
  actions: {
    // onWatchLocalStorage() {
    //   this.isLogin = localStorage.getItem("access_token") ? true : false;
    // },

    async handleLogin(email, password) {
      try {
        const { data } = await axios.post(`${baseUrl}/user/login`, {
          email,
          password,
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("user", data.user);
        localStorage.setItem("role", data.role);
        localStorage.setItem("id", data.id);
        this.isLogin = true;
        this.router.push("/");
      } catch (error) {
        console.log(error);
      }
    },

    async handleRegister(username, email, password) {
      try {
        const { data } = await axios.post(`${baseUrl}/user/register`, {
          username,
          email,
          password,
        });
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },

    async handleCredentialResponse(response) {
      try {
        const { data } = await axios({
          method: "post",
          url: `${baseUrl}/user/loginGoogle`,
          data: {
            jwt: response.credential,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("user", data.user);
        localStorage.setItem("id", data.id);
        localStorage.setItem("role", data.role);
        this.router.push("/");
      } catch (error) {
        console.log(error);
      }
    },

    async fetchPost() {
      try {
        const { data } = await axios.get(`${baseUrl}/post`);
        this.posts = data.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
