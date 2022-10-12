import { defineStore } from "pinia";
import axios from "axios";
let baseUrl = "http://localhost:3000/";

export const useProductStore = defineStore("product", {
  state: () => {
    return {
      dataProduct: [],
      dataCategory: [],
      paymentResponse: {},
      role: "",
    };
  },
  actions: {
    async fetchProduct() {
      try {
        let { data } = await axios({
          method: "GET",
          url: baseUrl + "product",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.dataProduct = data;
        this.role = localStorage.getItem("role");
      } catch (error) {
        console.log(error);
      }
    },
    async addProduct(productData) {
      try {
        await axios({
          method: "POST",
          url: baseUrl + "product",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            name: productData.name,
            description: productData.description,
            price: productData.price,
            stock: productData.stock,
            weight: productData.weight,
            imgUrl: productData.imgUrl,
            categoryId: productData.categoryId,
          },
        });
        Swal.fire({
          icon: "success",
          title: "Success add new product!",
          showConfirmButton: false,
          timer: 1500,
        });
        this.$router.push("/product");
        this.fetchProduct();
      } catch (error) {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: `${error.response.data.msg[0]}`,
        });
      }
    },
    async payments(price) {
      try {
        let { data } = await axios({
          method: `POST`,
          url: baseUrl + `product/payment`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: { price },
        });
        console.log(data);

        snap.pay(`${data.transactionToken}`, {
          onSuccess: async function (result) {
            console.log(result);
            this.paymentResponse = result;
            Swal.fire({
              icon: "success",
              title: "Transaction success!",
              showConfirmButton: false,
              timer: 1500,
            });
          },
          onPending: function (result) {
            console.log("pending");
            console.log(result);
          },
          onError: function (result) {
            console.log("error");
            console.log(result);
          },
          onClose: function () {
            console.log(
              "customer closed the popup without finishing the payment"
            );
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
    async fetchCategory() {
      try {
        let { data } = await axios({
          method: "GET",
          url: baseUrl + "product/category",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.dataCategory = data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProduct(id) {
      try {
        await axios({
          method: "DELETE",
          url: baseUrl + `product/${id}`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.fetchProduct();
        Swal.fire({
          icon: "success",
          title: "Success delete product!",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
