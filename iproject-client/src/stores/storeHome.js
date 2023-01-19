import { defineStore } from "pinia";
import axios from 'axios'
let baseUrl = "https://petshop-app.up.railway.app/"
// let baseUrl = "http://localhost:3000/"


export const useHomeStore = defineStore("home", {
    state: () => {
        return{
            dataFact : [],
            dataImage: {}
        }
    },
    actions:{
        async fetchAnimalFact(){
            try {
                let {data} = await axios({
                    method: "GET",
                    url: baseUrl + "home/facts"
                })
                this.dataFact = data
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.response.data.msg}`,
                  });
            }
        },
        async fetchImageRandom(){
            try {
                let {data} = await axios({
                    method: "GET",
                    url: baseUrl + "home/image"
                })
                this.dataImage = data[0]
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.response.data.msg}`,
                });
            }
        }
    }
})