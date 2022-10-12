import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useIprojectStore = defineStore("Iproject", {
  state: () => ({
    isLogin: false,
  }),
  actions: {
    logout() {
      this.isLogin = false;
      localStorage.clear();
    },
    async regist(obj) {
      try {
        await axios.post(`${baseUrl}/register`, obj);
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },

    async login(obj) {
      try {
        let res = await axios.post(`${baseUrl}/login`, obj);
        console.log(res);
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("username", res.data.username);
        this.isLogin = true;
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
