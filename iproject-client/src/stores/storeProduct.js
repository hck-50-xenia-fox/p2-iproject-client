import { defineStore } from "pinia";
import axios from 'axios'
let baseUrl = "http://localhost:3000/"

export const useProductStore = defineStore("product", {
    state: () => {
        return{
            dataProduct: []
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
        }
    }
})