import "./assets/main.css";

import { createApp } from "vue";
import CustomCounter from "./web-components/custom-counter.js";
import App from "./App.vue";

customElements.define("custom-counter", CustomCounter);
createApp(App).mount("#app");
