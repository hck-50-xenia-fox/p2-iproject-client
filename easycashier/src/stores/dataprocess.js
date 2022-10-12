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
    async generateInvoice(id) {
      try {
        let generateData = await axios.get(`${url}/invoice/generate/${id}`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        // console.log(generateData);
        let data = {
          customize: {},
          images: {
            logo: "https://public.easyinvoice.cloud/img/logo_en_original.png",
            background:
              "https://public.easyinvoice.cloud/img/watermark-draft.jpg",
          },
          sender: generateData.data.senderData,

          client: generateData.data.clientData,
          information: generateData.data.informationData,

          products: generateData.data.productData,

          "bottom-notice": "Kindly pay your invoice within 15 days.",

          settings: {
            currency: "IDR",
          },
          translate: {},
        };
        easyinvoice.createInvoice(data, async function (result) {
        //   console.log("PDF base64 string: ", result.pdf);
          easyinvoice.download(
            `Invoice_No._${generateData.data.informationData.number}.pdf`,
            result.pdf
          );
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});

//
