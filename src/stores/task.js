import { defineStore } from "pinia";
import axios from "axios";

export const useTaskStore = defineStore("task", {
  state: () => {
    return {
      baseUrl: "https://tuesday-app.herokuapp.com",
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
        errorAlert(error);
      }
    },
    async fetchMyTask() {
      try {
        const { data } = await axios.get(this.baseUrl + "/employees/mytasks", {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.mytasks = data;
      } catch (error) {
        errorAlert(error);
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
        successAlert("Task success added!");
      } catch (error) {
        errorAlert(error.response.data.message);
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
        successAlert("Task successfully added");
      } catch (error) {
        errorAlert(error.response.data.message);
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
        successAlert("Task Completed!");
      } catch (error) {
        errorAlert(error.response.data.message);
      }
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
