import { defineStore } from "pinia";
import axios from "axios";

export const useTaskStore = defineStore("task", {
  state: () => {
    return {
      baseUrl: "http://localhost:3000",
      access_token: localStorage.getItem("access_token"),
      tasks: [],
      mytasks: [],
    };
  },
  actions: {
    async fetchTask() {
      try {
        const { data } = await axios.get(this.baseUrl + "/managers/tasks", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.tasks = data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchMyTask() {
      try {
        const { data } = await axios.get(this.baseUrl + "/employees/mytasks", {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.mytasks = data;
      } catch (error) {
        console.log(error);
      }
    },
    async addEmployeeTask(input) {
      try {
        const { EmployeeId, TaskId } = input;
        await axios.post(
          this.baseUrl + "/managers/employeeTasks",
          {
            EmployeeId,
            TaskId,
          },
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        this.router.push("/managers/tasks");
        console.log("berhasil nambah beban");
      } catch (error) {
        console.log(error);
      }
    },
    async addTask(input) {
      try {
        const { title, description } = input;
        await axios.post(
          this.baseUrl + "/managers/postTask",
          {
            title,
            description,
          },
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        this.router.push("/managers");
        console.log("berhasil nambah task");
      } catch (error) {
        console.log(error);
      }
    },
    async updateTask(id) {
      try {
        await axios.patch(
          this.baseUrl + "/employees/mytasks/" + id,
          {},
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        this.fetchMyTask();
        this.router.push("/employee");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
