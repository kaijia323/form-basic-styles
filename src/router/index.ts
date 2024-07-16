import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/attrs",
    children: [
      {
        path: "/attrs",
        name: "Attrs",
        component: () => import("../views/attrs/index.vue"),
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes: routes,
});
