import { defineStore } from "pinia";
import axios from "axios";

export const useManagerStore = defineStore("manager", {
  state: () => {
    return {
      baseUrl: "https://tuesday-app.herokuapp.com",
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
        errorAlert(error);
      }
    },
    async fireManager(id) {
      try {
        await axios.delete(this.baseUrl + "/companies/manager/" + id, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.getManager();
        this.router.push("/dashboard");
        successAlert("Delete Manager Success");
      } catch (error) {
        errorAlert(error.response.data.message);
      }
    },
  },
});

function errorAlert(message) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
}

function successAlert(message) {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
}
