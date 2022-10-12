import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// const bootstrap = require('bootstrap') 
import "bootstrap/dist/css/bootstrap.min.css"


// import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia()
pinia.use(({store}) => {
    store.router = markRaw(router)
})

app.use(router);
app.use(pinia);

app.mount("#app");
