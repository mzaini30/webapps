import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import routes from "virtual:generated-pages";
import "@unocss/reset/tailwind.css";
import "uno.css";
import VueLazyload from "vue-lazyload";

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app}) => {
    app.use(VueLazyload);
  }
);
