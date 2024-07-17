import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style/index.css";
import pinia from "./pinia";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
