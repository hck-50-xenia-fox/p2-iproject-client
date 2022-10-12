import { defineStore } from "pinia";
import axios from 'axios'
let baseUrl = "http://localhost:3000/"

export const useProductStore = defineStore("product", {
    state: () => {
        return{
            dataProduct: [],
            paymentResponse: {},
        }
    },
    actions:{
        async fetchProduct(){
            try {
                let {data} = await axios({
                    method: "GET",
                    url: baseUrl + "product",
                    headers:{
                        access_token: localStorage.getItem("access_token")
                    }
                })
                this.dataProduct = data
            } catch (error) {
                console.log(error)
            }
        },
        async payments() {
            try {
                let { data } = await axios({
                    method: `POST`,
                    url: baseUrl + `product/payment`,
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })
                console.log(data);

                snap.pay(`${data.transactionToken}`, {
                    onSuccess: async function (result) {
                        console.log(result);
                        this.paymentResponse = result
                    },
                    onPending: function (result) { console.log('pending'); console.log(result); },
                    onError: function (result) { console.log('error'); console.log(result); },
                    onClose: function () { console.log('customer closed the popup without finishing the payment'); }
                })
            } catch (err) {
                console.log(err);
            }
        },
    }
})