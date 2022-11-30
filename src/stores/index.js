import { defineStore } from "pinia";
import axios from "axios";

export const useIndexStore = defineStore("index", {
  state: () => {
    return {
      baseUrl: "https://tuesday-app.herokuapp.com",
      loginType: "",
      loginStatus: "",
      access_token: localStorage.getItem("access_token"),
    };
  },
  actions: {
    async loginCompany(companyInput) {
      try {
        const { email, password } = companyInput;
        const { data } = await axios.post(this.baseUrl + "/login/companies", {
          companyEmail: email,
          companyPassword: password,
        });
        localStorage.setItem("access_token", data.access_token);
        this.router.push("/dashboard");
        this.loginStatus = true;
        successAlert("Login success");
      } catch (error) {
        errorAlert(error.response.data.message);
      }
    },
    async registerCompany(companyInput) {
      try {
        const { name, email, password } = companyInput;
        await axios.post(this.baseUrl + "/register/companies", {
          name,
          companyEmail: email,
          companyPassword: password,
        });
        this.loginType = "company";
        this.router.push("/login");
        successAlert("Register success");
      } catch (error) {
        errorAlert(error.response.data.message);
      }
    },
    async registerManager(managerInput) {
      try {
        const { firstName, lastName, role, email, password } = managerInput;
        await axios.post(
          this.baseUrl + "/companies/addManager",
          {
            firstName,
            lastName,
            role,
            email,
            password,
          },
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        this.router.push("/dashboard");
        this.loginType = "company";
        successAlert("Register Success");
      } catch (error) {
        errorAlert(error.response.data.message);
      }
    },
    async loginManager(managerInput) {
      try {
        const { email, password } = managerInput;
        const { data } = await axios.post(this.baseUrl + "/login/managers", {
          email,
          password,
        });
        localStorage.setItem("access_token", data.access_token);
        this.router.push("/managers");
        this.loginStatus = true;
        successAlert("Login success");
      } catch (error) {
        errorAlert(error.response.data.message);
      }
    },
    async registerEmployee(employeeInput) {
      try {
        console.log(employeeInput);
        const { firstName, lastName, role, email, password } = employeeInput;
        await axios.post(
          this.baseUrl + "/managers/addEmployee",
          {
            firstName,
            lastName,
            role,
            email,
            password,
          },
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        this.loginType = "manager";
        this.router.push("/managers");
        successAlert("Register success");
      } catch (error) {
        errorAlert(error.response.data.message);
      }
    },
    async loginEmployee(employeeInput) {
      try {
        const { email, password } = employeeInput;
        const { data } = await axios.post(this.baseUrl + "/login/employees", {
          email,
          password,
        });
        localStorage.setItem("access_token", data.access_token);
        this.router.push("/employee");
        this.loginStatus = true;
        successAlert("Login success");
      } catch (error) {
        errorAlert(error.response.data.message);
      }
    },
    logout() {
      Swal.fire({
        title: "Are you sure want to logout?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,Logout!",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          this.router.push("/");
          this.loginStatus = false;
          successAlert("Logout Success");
        }
      });
    },
  },
});

function errorAlert(message) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
}

function successAlert(message) {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
}
