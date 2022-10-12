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
    async fireManager(id) {
      try {
        await axios.delete(this.baseUrl + "/companies/manager/" + id, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.getManager();
        this.router.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
