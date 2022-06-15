import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import routes from "virtual:generated-pages";
import prefetch from "vue-router-prefetch";

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, initialState }) => {
    app.use(prefetch);
  }
);
