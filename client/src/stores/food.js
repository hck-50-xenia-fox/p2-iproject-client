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
    theRestaurant: {},
    favoritesIds: [],
    theFood: {},
    idResto: "",
    // url: "https://amrestokw.web.app/detailfood",
    url: "http://localhost:3000",
    theQrCode: {},
  }),
  actions: {
    ...mapActions(useUserStore, ["errorAlert", "successAlert"]),
    async getFood() {
      try {
        let { data } = await axios.get(`/food`);
        console.log("Masuk bang");
        console.log(data);
        this.food = data;
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
    async getRestaurantData(place) {
      try {
        console.log("masuk kak");
        console.log(place);
        let { data } = await axios.get(`/restaurant?place=${place}`);
        console.log(data);
        this.restaurant = data;
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },
    async getTheRestaurantDetail(id) {
      try {
        this.idResto = id;
        console.log("masuk kak");
        console.log(id);
        let { data } = await axios.get(`/restaurant/${id}`);
        console.log(data);
        this.theRestaurant = data;
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },
  },
});
