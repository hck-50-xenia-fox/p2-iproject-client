import { defineStore } from "pinia";
import axios from "axios";

export const useEmployeeStore = defineStore("employee", {
  state: () => {
    return {
      baseUrl: "http://localhost:3000",
      access_token: localStorage.getItem("access_token"),
      employees: [],
      memes: [],
      quotesOftheDay: "",
    };
  },
  actions: {
    async getQuotes() {
      try {
        const { data } = await axios({
          method: "POST",
          url: "https://motivational-quotes1.p.rapidapi.com/motivation",
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key":
              "e43e110b70msh3ec1e2d38d14bd2p1661cbjsn0484a3490ad6",
            "X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com",
          },
          data: '{"key1":"value","key2":"value"}',
        });
        this.quotesOftheDay = data;
      } catch (error) {
        console.log(data);
      }
    },
    async getMeme() {
      try {
        const { data } = await axios.get(this.baseUrl + "/memes");
        this.memes = data;
      } catch (error) {
        console.log(error);
      }
    },
    async getEmployees() {
      try {
        const { data } = await axios.get(this.baseUrl + "/managers/employees", {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.employees = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fireEmployee(id) {
      try {
        await axios.delete(this.baseUrl + "/managers/" + id, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.getEmployees();
        this.router.push("/managers");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
