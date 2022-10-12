import { defineStore } from "pinia";
import axios from "axios";
import easyinvoice from "easyinvoice";
const url = "http://localhost:3000";

export const useDataStore = defineStore("data", {
  state: () => ({
    InventoryList: [],
    InvoiceList: [],
  }),
  actions: {
    changePage(page) {
      this.router.push(`/${page}`);
    },

    async fetchInventory() {
      try {
        let data = await axios.get(`${url}/stock`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.InventoryList = data.data;
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: `${error.response.data.message}`,
        });
      }
    },
    async fetchAllInvoice() {
      try {
        let data = await axios.get(`${url}/invoice`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.InvoiceList = data.data;
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: `${error.response.data.message}`,
        });
      }
    },
  },
});

//
