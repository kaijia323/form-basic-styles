// typings.d.ts 或 router.ts
import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    menuType?: "MENU" | "FOLDER";
    menuTitle?: string;
  }
}
