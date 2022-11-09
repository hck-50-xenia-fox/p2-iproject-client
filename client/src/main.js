//? VUE & PINIA
import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

//? APP & ROUTER
import App from "./App.vue";
import router from "./router";

//? BOOTSTRAP PACKAGE
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.$router = markRaw(router);
});

app.use(router);
app.use(pinia);

app.mount("#app");
