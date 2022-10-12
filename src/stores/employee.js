import { defineStore } from "pinia";
import axios from "axios";

export const useEmployeeStore = defineStore("employee", {
  state: () => {
    return {
      baseUrl: "http://localhost:3000",
      access_token: localStorage.getItem("access_token"),
      employees: [],
    };
  },
  actions: {
    async getEmployees() {
      try {
        const { data } = await axios.get(this.baseUrl + "/managers/employees", {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.employees = data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
