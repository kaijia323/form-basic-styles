import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    redirect: "/button",
    component: () => import("../components/Layout/Layout.vue"),
    children: [
      {
        path: "button",
        name: "Button",
        component: () => import("../views/button/index.vue"),
        meta: {
          menuType: "MENU",
          menuTitle: "按钮 Button",
        },
      },
      {
        path: "paragraph",
        name: "Paragraph",
        component: () => import("../views/paragraph/index.vue"),
        meta: {
          menuType: "MENU",
          menuTitle: "段落 Paragraph",
        },
      },
    ],
  },
];
