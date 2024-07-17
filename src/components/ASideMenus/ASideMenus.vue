<script setup lang="ts">
import { useMenusStore } from "@/pinia";
import SingleMenu from "./SingleMenu.vue";

const route = useRoute();
const { menus } = useMenusStore();

const defaultActive = computed(() => route.path);
</script>

<template>
  <el-menu router :default-active="defaultActive">
    <el-scrollbar>
      <SingleMenu :menus="menus"></SingleMenu>
    </el-scrollbar>
  </el-menu>
</template>
