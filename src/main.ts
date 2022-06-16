import App from "./App.vue";
import { createApp } from "vue";
import routes from "virtual:generated-pages";
import "@unocss/reset/tailwind.css";
import "uno.css";
import VueLazyload from "vue-lazyload";
import { createRouter, createWebHistory } from "vue-router";
import {createHead} from '@vueuse/head'
import RouterPrefetch from 'vue-router-prefetch'

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

const head = createHead()

const app = createApp(App)

app
.use(router)
.use(RouterPrefetch)
.use(head)
.use(VueLazyload)
.mount('#app')