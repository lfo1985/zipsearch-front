import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import App from "./App.vue";
import { createApp } from "vue";
import api from "./services/axios";
import store from "./store/index.js";
import icons from "./icons.js";
import { v4 as uuidv4 } from 'uuid';

document.title = import.meta.env.VITE_APP_NAME || 'ZipSearch'

if(localStorage.getItem('user_id') === null) {
    localStorage.setItem('user_id', uuidv4());
}

const app = createApp(App);

app.config.globalProperties.$api = api;

app.use(store);
app.component("font-awesome-icon", icons).mount("#app");
