import { defineStore } from "pinia";
import axios from "../apis/reqfood";
import axioss from "axios";
import { mapActions } from "pinia";
import { useUserStore } from "./user";

export const useFoodStore = defineStore("food", {
  state: () => ({
    food: [],
    categories: [],
    favorites: [],
    restaurant: [],
    favoritesIds: [],
    theFood: {},
    query: "",
    pages: 0,
    // url: "https://amrestokw.web.app/detailfood",
    url: "http://localhost:3000",
    theQrCode: {},
  }),
  actions: {
    ...mapActions(useUserStore, ["errorAlert", "successAlert"]),
    async getFood(page, search) {
      try {
        console.log(page, search);
        if (!search || (!search.name && !search.category && !search.price))
          this.query = `page=${page}`;
        else {
          if (search.name) {
            if (search.category) {
              if (search.price)
                this.query = `page=${page}&name=${search.name}&category=${search.category}&price=${search.price}`;
              else
                this.query = `page=${page}&name=${search.name}&category=${search.category}`;
            } else this.query = `page=${page}&name=${search.name}`;
          } else if (search.category) {
            if (search.price)
              this.query = `page=${page}&category=${search.category}&price=${search.price}`;
            else this.query = `page=${page}&category=${search.category}`;
          } else if (search.price)
            this.query = `page=${page}&price=${search.price}`;
        }
        console.log(this.query);
        let { data } = await axios.get(`/food?${this.query}`);
        this.food = data.food;
        this.pages = data.pages;
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },
    async getCategories() {
      try {
        let { data } = await axios(`/categories`);
        this.categories = data;
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },
    async getCustomerFavorite() {
      try {
        let { data } = await axios.get(`/favorite`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.favorites = data;
        this.favoritesIds = data.map((e) => e.FoodId);
        console.log(this.favoritesIds);
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },
    async getTheFood(id) {
      try {
        let { data } = await axios.get(`/food/${id}`);
        this.theFood = data;
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },
    async addTheFavorite(FoodId) {
      try {
        let { data } = await axios.post(
          `/favorite`,
          { FoodId },
          { headers: { access_token: localStorage.getItem("access_token") } }
        );
        this.successAlert("top-end", data.message);
        setTimeout(() => {
          window.location.reload();
        }, 900);
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },
    async getQrCode(id) {
      try {
        let { data } = await axioss.get(
          `https://api.happi.dev/v1/qrcode?data=${this.url}/${id}`,
          {
            headers: {
              "x-happi-key":
                "172ba5rBNOBp7bZ5LD7LOLZ0XP15IBO6JemrGsjoN0AP6OftbnsQLguF",
            },
          }
        );
        this.theQrCode = data.qrcode;
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },
    async getRestaurantData() {
      try {
        let { data } = await axios.get("http://localhost:3000/restaurant");
        console.log(data);
        this.restaurant = data;
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },
  },
});
