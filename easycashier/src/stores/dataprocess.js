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
    async addInventory(inventory) {
      try {
        let { productName, supplierName, quantity, pricePerItem, rev } =
          inventory;
        await axios.post(
          `${url}/stock`,
          {
            productName,
            supplierName,
            quantity,
            pricePerItem,
            rev,
          },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        Swal.fire({
          icon: "success",
          text: `Invoice Success Added`,
        });
        this.router.push("/inventory");
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: `${error.response.data.message}`,
        });
      }
    },
    async addInvoice(invoice) {
      try {
        let {
          customerName,
          customerAddress,
          InventoryId,
          quantity,
          priceToSale,
          rev,
          customerEmail,
          customerPhoneNumber,
        } = invoice;
        await axios.post(
          `${url}/invoice`,
          {
            customerName,
            customerAddress,
            InventoryId,
            quantity,
            priceToSale,
            rev,
            customerEmail,
            customerPhoneNumber,
          },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        Swal.fire({
          icon: "success",
          text: `Inventory Success Added`,
        });
        this.router.push("/invoice");
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
            // background:
            //   "https://public.easyinvoice.cloud/img/watermark-draft.jpg",
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
        Swal.fire({
          icon: "error",
          text: `${error.response.data.message}`,
        });
      }
    },
    async generatePayment(id) {
      try {
        let token = await axios.post(
          `${url}/invoice/payment/${id}`,
          {},
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        console.log(token.data, "asdsadasd");
        window.snap.pay(token.data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            alert("payment success!");
            console.log(result);
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            alert("wating your payment!");
            console.log(result);
          },
          onError: function (result) {
            /* You may add your own implementation here */
            alert("payment failed!");
            console.log(result);
          },
          onClose: function () {
            /* You may add your own implementation here */
            alert("you closed the popup without finishing the payment");
          },
        });
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
