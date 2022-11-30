import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";

// import "../src/assets/styles.css";
const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(router);
app.use(pinia);
app.mount("#app");
