import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => ({}),
  actions: {
    showPass() {
      let x = document.getElementById("password");
      x.type === "password" ? (x.type = "text") : (x.type = "password");
    },
  },
});
