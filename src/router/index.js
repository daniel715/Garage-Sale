import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/sign-in"
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import("@/layouts/DefaultLayout.vue"),
    meta: {
      layout: "default"
    }
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () =>
      import("@/layouts/SignInLayout.vue"),
    meta: {
      layout: "signin"
    }
  },
];


export default new Router({
  mode: "history",
  // base: process.env.BASE_URL || "/"
  routes
});