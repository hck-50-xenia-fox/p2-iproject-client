import { defineStore } from "pinia";
import axios from "axios";

export const useManagerStore = defineStore("manager", {
  state: () => {
    return {
      baseUrl: "http://localhost:3000",
      access_token: localStorage.getItem("access_token"),
      managers: [],
    };
  },
  actions: {
    async getManager() {
      try {
        const { data } = await axios.get(this.baseUrl + "/companies/managers", {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.managers = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
