import { defineStore } from "pinia";
import { routes } from "@/router/routes";
import { RouteRecordRaw } from "vue-router";

export type TMenu = {
  children?: TMenu[];
} & Pick<RouteRecordRaw, "path" | "name" | "meta">;

export const useMenusStore = defineStore("menus", () => {
  const recursion = (
    data: RouteRecordRaw[],
    results: TMenu[] = [],
    parentPath: string = ""
  ) => {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (!element.meta?.menuType && element.children?.length) {
        return recursion(element.children, results);
      } else if (element.meta?.menuType === "FOLDER") {
        const path = `${parentPath}/${element.path}`.replace(/\/+/g, "/");
        results.push({
          ...element,
          path,
          children: element.children?.length
            ? recursion(element.children, [], path)
            : undefined,
        });
      } else {
        const path = `${parentPath}/${element.path}`.replace(/\/+/g, "/");
        results.push({
          ...element,
          path,
        });
      }
    }
    return results;
  };

  return {
    menus: recursion(routes),
  };
});
