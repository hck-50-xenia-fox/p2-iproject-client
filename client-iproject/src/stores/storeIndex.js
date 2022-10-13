import { defineStore } from "pinia";
import axios from "axios";
import "leaflet/dist/leaflet.css";

let baseUrl = "http://localhost:3000";

export const useStoreIndex = defineStore("index", {
  state: () => {
    return {
      isLogin: false,
      places: [],
      favourites: [],
      currentPage: 0,
      currentSearch: "",
      location_id: 0,
      country: "",
      hotels: [],
      restaurants: [],
      attractions: [],
      textFromSpeech: "",
      detail: {
        name: "",
        imgURL: "",
        description: "",
        address: "",
        priceRange: "",
        lat: 0,
        long: 0,
      },
      covid19: {},
    };
  },
  actions: {
    async register(input) {
      try {
        await axios.post(`${baseUrl}/customer/register`, input);
        this.$router.push("/login");
        this.successAlert("You're Success Register!");
      } catch (error) {
        this.errorAlert(error.response.data.message);
      }
    },
    async doLogin(input) {
      try {
        let { data } = await axios.post(`${baseUrl}/login`, input);
        localStorage.setItem("access_token", data.access_token);
        this.$router.push("/");
        this.login = true;
        this.successAlert("You're Success Login!");
      } catch (error) {
        this.errorAlert(error.response.data.message);
      }
    },
    async logout() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logout!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Logout", "Success Logout!", "success");
          localStorage.clear();
          this.$router.push("/");
          this.login = false;
        }
      });
    },

    async listPlaces(page, search) {
      try {
        if (page && typeof page === "number") {
          if (search) {
            this.query = `page=${page}&search=${search}`;
          } else {
            this.query = `page=${page}`;
          }
        } else if (search) {
          this.query = `search=${search}`;
        }

        let { data } = await axios.get(`${baseUrl}/places?${this.query}`);
        console.log(data);
        // this.country = data[0].result_object.doubleclick_zone.split(".")[1];
        // this.listCovidData();
        this.places = data;
        this.currentPage = page;
        this.listCovidData(
          data[0].result_object.doubleclick_zone.split(".")[1]
        );
      } catch (error) {
        console.log(error);
        this.errorAlert(error.response.data.message);
      }
    },
    async detailById(input) {
      try {
        this.detail = input;
      } catch (error) {
        this.errorAlert(error.response.data.message);
      }
    },
    async listHotels(page, search) {
      try {
        if (page && typeof page === "number") {
          if (search) {
            this.query = `page=${page}&search=${search}`;
          } else {
            this.query = `page=${page}`;
          }
        } else if (search) {
          this.query = `search=${search}`;
        }
        let { data } = await axios.get(`${baseUrl}/hotels?${this.query}`);
        if (data.length !== 0) {
          // console.log(data, "<<<<< data");
          // this.country =data.data[0].result_object.doubleclick_zone.split(".")[1];
          this.hotels = data;
          this.currentPage = data.length;
        }
      } catch (error) {
        console.log(error, " <<<< error");
        // this.errorAlert(error.response.data.message);
      }
    },
    async listRestaurant(page, search) {
      try {
        if (page && typeof page === "number") {
          if (search) {
            this.query = `page=${page}&search=${search}`;
          } else {
            this.query = `page=${page}`;
          }
        } else if (search) {
          this.query = `search=${search}`;
        }

        let data = await axios.get(`${baseUrl}/restaurants?${this.query}`);
        // console.log(data.data, "<<<<< data");
        // this.country = data[0].result_object.doubleclick_zone.split(".")[1];
        // this.listCovidData();
        this.restaurants = data.data;
        this.currentPage = data.length;
      } catch (error) {
        console.log(error);
        this.errorAlert(error.response.data.message);
      }
    },
    async listAttractions(page, search) {
      try {
        if (page && typeof page === "number") {
          if (search) {
            this.query = `page=${page}&search=${search}`;
          } else {
            this.query = `page=${page}`;
          }
        } else if (search) {
          this.query = `search=${search}`;
        }

        let { data } = await axios.get(`${baseUrl}/attractions?${this.query}`);
        // console.log(data, "<<<<< data");
        // this.country = data[0].result_object.doubleclick_zone.split(".")[1];
        // this.listCovidData();
        this.attractions = data;
        this.currentPage = data.length;
      } catch (error) {
        console.log(error);
        this.errorAlert(error.response.data.message);
      }
    },
    async listCovidData(country) {
      try {
        console.log("function covid");
        if (country) {
          this.query = `country=${country}`;
        }

        let { data } = await axios.get(`${baseUrl}/covid?${this.query}`);
        // console.log(data.response[0], "<<<<< data covid");
        this.covid19 = data.response[0];
      } catch (error) {
        console.log(error);
        this.errorAlert(error.response.data.message);
      }
    },
    async successAlert(succes) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${succes}`,
        showConfirmButton: false,
        timer: 1500,
      });
    },
    async errorAlert(error) {
      Swal.fire("Sorry, something wrong!", `${error}`, "error");
    },
  },
});
