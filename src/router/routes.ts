import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    redirect: "/button",
    children: [
      {
        path: "button",
        name: "Button",
        component: () => import("../views/attrs/index.vue"),
        meta: {
          menuType: "MENU",
          menuTitle: "按钮 Button",
        },
      },
    ],
  },
];
