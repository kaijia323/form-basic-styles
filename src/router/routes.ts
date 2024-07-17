import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
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
