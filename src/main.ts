import App from "./App.vue";
// import { createApp } from "vue";
import routes from "virtual:generated-pages";
import "@unocss/reset/tailwind.css";
import "uno.css";
import VueLazyload from "vue-lazyload";
import { createRouter, createWebHistory } from "vue-router";
import { createHead } from "@vueuse/head";
import {ViteSSG} from 'vite-ssg'

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
    app.use(VueLazyload)
  },
)

// const router = createRouter({
//   routes,
//   history: createWebHistory(),
//   scrollBehavior(to, from, savedPosition) {
//     if (savedPosition) {
//       return savedPosition;
//     } else {
//       return { top: 0 };
//     }
//   },
// });

// const head = createHead();

// const app = createApp(App);

// app.use(router).use(head).use(VueLazyload).mount("#app");
