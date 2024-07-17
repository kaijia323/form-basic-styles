<script setup lang="ts">
import { TMenu } from "@/pinia/menus";

defineProps<{
  menus?: TMenu[];
}>();
</script>

<template>
  <template v-for="menu in menus" :key="menu.path">
    <el-sub-menu v-if="menu.meta?.menuType === 'FOLDER'" :index="menu.path">
      <template #title>
        <span>{{ menu.meta?.menuTitle }}</span>
      </template>
      <SingleMenu
        v-if="menu.children?.length"
        :menus="menu.children"
      ></SingleMenu>
    </el-sub-menu>
    <el-menu-item v-else :index="menu.path">
      <span>{{ menu.meta?.menuTitle }}</span>
    </el-menu-item>
  </template>
</template>
