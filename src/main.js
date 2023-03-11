import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faBriefcase,
  faPaperPlane,
  faMagicWandSparkles,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add({
  faUser,
  faBriefcase,
  faPaperPlane,
  faMagicWandSparkles,
  faFacebook,
  faLinkedin,
  faEnvelope,
  faPhone,
});
document.documentElement.style.setProperty(
  "--vh",
  window.innerHeight * 0.01 + "px"
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
