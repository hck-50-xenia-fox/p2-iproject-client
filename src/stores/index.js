import { defineStore } from "pinia";
import axios from "axios";

export const useIndexStore = defineStore("index", {
  state: () => {
    return {
      baseUrl: "http://localhost:3000",
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
        console.log("berhasil login");
      } catch (error) {
        console.log(error);
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
        console.log("berhasil");
      } catch (error) {
        console.log(error);
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
        console.log("berhasil register manager");
      } catch (error) {
        console.log(error);
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
        console.log("berhasil login manager");
      } catch (error) {
        console.log(error);
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
        console.log("berhasil register employee");
      } catch (error) {
        console.log(error);
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
        console.log("berhasil login employee");
      } catch (error) {
        console.log(error);
      }
    },
    logout() {
      localStorage.clear();
      this.router.push("/");
      this.loginStatus = false;
    },
  },
});
