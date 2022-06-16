import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import routes from "virtual:generated-pages";
import prefetch from "vue-router-prefetch";
import "@unocss/reset/tailwind.css";
import "uno.css";
import VueLazyload from "vue-lazyload";

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, initialState }) => {
    app.use(prefetch).use(VueLazyload);
  }
);
