import "./assets/main.css";

import { createApp, defineCustomElement } from "vue";
import CustomCounter from "./web-components/custom-counter.js";
import App from "./App.vue";
import Card from "./components/Card.vue";

const myCardElement = defineCustomElement(Card);
console.log('myCardElement', myCardElement);
// debugger;

customElements.define("custom-counter", CustomCounter);
customElements.define("my-card-element", myCardElement);
createApp(App).mount("#app");
