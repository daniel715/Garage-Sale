import Vue from "vue";
import Router from "vue-router";
import Home from "../layouts/SignInLayout.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import("@/layouts/DefaultLayout.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () =>
      import("@/layouts/SignInLayout.vue"),
    meta: {
      requiresAuth: true
    }
  },
];


export default new Router({
  mode: "history",
  // base: process.env.BASE_URL || "/"
  routes
});