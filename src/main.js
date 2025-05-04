import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import App from "./App.vue";
import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch, faHistory, faRemove, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faHistory, faRemove, faMapMarkedAlt);

document.title = import.meta.env.VITE_APP_NAME || 'ZipSearch'

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.mount("#app");
