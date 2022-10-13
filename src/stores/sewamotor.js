import axios from "axios";
import { ref, computed } from "vue";
import { defineStore } from "pinia";

// const baseURL = "http://localhost:3000";
const baseURL = "https://sewa-motor.herokuapp.com"

export const useSewamotorStore = defineStore("sewamotor", {
  state: () => ({
    statusLogin: false,
    motorcycles: [],
    currentMotorcycle: {},
  }),
  actions: {
    async checkLogin() {
      try {
        const token = localStorage.getItem("access_token");
        if (token) {
          this.statusLogin = true;
        }
      } catch {
        this.statusLogin = false;
      }
    },

    async handleLogout() {
      try {
        localStorage.clear();
        this.statusLogin = false;

        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have been logged out",
          showConfirmButton: false,
          timer: 1500,
        });

        this.router.push({ name: "login" });
      } catch (err) {
        console.log(err);
      }
    },

    async getMotorcycles() {
      try {
        const response = await axios.get(`${baseURL}/motorcycles`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(response.data);
        this.motorcycles = response.data;
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          text: `${err.response.data.error}`,
        });
      }
    },

    async getMotorcycleById(id) {
      try {
        const response = await axios.get(`${baseURL}/motorcycles/${id}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        console.log(response);
        this.currentMotorcycle = response.data;
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          text: `${err.response.data.error}`,
        });
      }
    },

    async login(email, password) {
      try {
        const response = await axios.post(`${baseURL}/login`, {
          email,
          password,
        });

        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("username", response.data.name);
        this.statusLogin = true;

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully logged in",
          showConfirmButton: false,
          timer: 1500,
        });

        this.router.push({ name: "home" });
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          text: `${err.response.data.error}`,
        });
      }
    },

    async register(name, email, password, phoneNumber) {
      try {
        await axios.post(`${baseURL}/register`, {
          name,
          email,
          password,
          phoneNumber,
        });

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your account has been successfully registered",
          showConfirmButton: false,
          timer: 1500,
        });

        this.router.push({ name: "login" });
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          text: `${err.response.data.error}`,
        });
      }
    },

    async changeStatus(id) {
      try {
        await axios.patch(
          `${baseURL}/motorcycles/${id}`,
          {},
          { headers: { access_token: localStorage.getItem("access_token") } }
        );
      } catch (err) {
        console.log(err);
      }
    },
  },
});
