import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/layout/"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/home/"),
      },
      {
        path: "/qa",
        name: "qa",
        component: () => import("@/views/qa/"),
      },
      {
        path: "/myvideo",
        name: "myvideo",
        component: () => import("@/views/myvideo/"),
      },
      {
        path: "/my",
        name: "my",
        component: () => import("@/views/my/"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/search/"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
