import { defineStore } from "pinia";
import axios from "axios";
import easyinvoice from "easyinvoice";
const url = "http://localhost:3000";
export const useUserStore = defineStore("user", {
  state: () => ({
    isLogin: false,
    role: "",
    username: "",
    id: "",
  }),
  actions: {
    async login(customerData) {
      try {
        let { email, password } = customerData;
        let customerLogin = await axios.post(`${url}/login`, {
          email,
          password,
        });
        localStorage.setItem("access_token", customerLogin.data.access_token);
        this.changeIsLogin(true);
        Swal.fire({
          icon: "success",
          text: `Login Success!`,
        });
        this.router.push("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: `${error.response.data.message}`,
        });
      }
    },
    async register(user) {
      console.log(user);
      try {
        let { email, password, companyName, address } = user;
        await axios.post(`${url}/register`, {
          email,
          password,
          companyName,
          address,
        });
        Swal.fire({
          icon: "success",
          text: `Register Success!`,
        });
        this.router.push("/login");
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          text: `${error.response.data.message}`,
        });
      }
    },
    logout() {
      this.changeIsLogin(false);
      Swal.fire({
        icon: "success",
        text: `Logout Success!`,
      });
      this.router.push("/");
    },
    changeIsLogin(boolean) {
      this.isLogin = boolean;
    },
    //   async handleCredentialResponse(response) {
    //     try {
    //       let google_token = response.credential;
    //       let { data } = await axios.post(
    //         `${url}/google-sign-in`,
    //         {},
    //         {
    //           headers: {
    //             google_token,
    //           },
    //         }
    //       );
    //       localStorage.setItem("access_token", data.accesstoken);
    //       localStorage.setItem("role", data.role);
    //       localStorage.setItem("id", data.id);
    //       localStorage.setItem("username", data.username);
    //       this.changeIsLogin(true);
    //       this.username = localStorage.username;
    //       this.role = localStorage.role;
    //       this.id = localStorage.id;
    //       Swal.fire({
    //         icon: "success",
    //         text: `Login By Google Success!`,
    //       });
    //       this.router.push("/");
    //     } catch (error) {
    //       console.log(error);
    //       Swal.fire({
    //         icon: "error",
    //         text: `${error.response.data.message}`,
    //       });
    //     }
    //   },
  },
});

// async generateInvoice() {
//     try {
//       let generateData = await axios.get(
//         "http://localhost:3000/invoice/generate/2",
//         {
//           headers: {
//             access_token:
//               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiY29tcGFueU5hbWUiOiJUb2tvIEtlbG9udG9uZyIsImlhdCI6MTY2NTUxODMzMX0.j4z4oOMWaoWstVlMwZLPZihrh9H7NJYxOQktSI5gZnI",
//           },
//         }
//       );
//       console.log(generateData);
//       let data = {
//         customize: {},
//         images: {
//           logo: "https://public.easyinvoice.cloud/img/logo_en_original.png",
//           background:
//             "https://public.easyinvoice.cloud/img/watermark-draft.jpg",
//         },
//         sender: generateData.data.senderData,

//         client: generateData.data.clientData,
//         information: generateData.data.informationData,

//         products: generateData.data.productData,

//         "bottom-notice": "Kindly pay your invoice within 15 days.",

//         settings: {
//           currency: "IDR",
//         },
//         translate: {},
//       };
//       //Create your invoice! Easy!
//       easyinvoice.createInvoice(data, async function (result) {
//         //The response will contain a base64 encoded PDF file
//         console.log("PDF base64 string: ", result.pdf);
//         easyinvoice.download("myInvoice.pdf", result.pdf);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   },
