import { defineStore } from "pinia";
import axios from "../apis/reqfood";
import Swal from "sweetalert2";
export const useUserStore = defineStore("user", {
  state: () => ({
    isSignin: false,
  }),
  actions: {
    errorAlert(msg) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: msg,
      });
    },
    successAlert(position, msg) {
      Swal.fire({
        position: position,
        icon: "success",
        title: msg,
        showConfirmButton: false,
        timer: 1500,
      });
    },
    warningAlert(btn, msg) {
      return Swal.fire({
        title: "Are you sure?",
        text: msg,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: btn,
      });
    },
    setLocalStorage(token, id, name, role) {
      localStorage.setItem("access_token", token);
      localStorage.setItem("userId", id);
      localStorage.setItem("name", name);
      localStorage.setItem("role", role);
    },
    async signinHendler(account) {
      try {
        let { data } = await axios.post("/signin", account);
        this.setLocalStorage(
          data.accessToken,
          data.user.id,
          data.user.username,
          data.user.role
        );
        this.isSignin = true;
        this.router.push("/");
        this.successAlert("center", "Sign in succes...");
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },
    async signupNewCustomer(account) {
      try {
        let { data } = await axios.post("/signup", account);
        this.router.push("/signin");
        this.successAlert(data.message);
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },
    signOut() {
      this.warningAlert("Yes, Log me Out", "You will be logged out").then(
        (result) => {
          if (result.isConfirmed) {
            this.isSignIn = false;
            localStorage.clear();
            this.successAlert("center", "You have been logged out");
            window.location.reload();
          }
        }
      );
    },
    async handleCredentialResponse(response) {
      try {
        let { data } = await axios.post(
          `/signin-with-google`,
          {},
          {
            headers: {
              google_token: response.credential,
            },
          }
        );
        this.setLocalStorage(
          data.accessToken,
          data.user.id,
          data.user.username,
          data.user.role
        );
        this.isSignin = true;
        this.router.push("/");
        this.successAlert("center", "Sign in succes...");
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },
  },
});
