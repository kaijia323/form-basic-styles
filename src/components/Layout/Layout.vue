<template>
  <div class="attrs-wrapper">
    <el-aside class="cz-aside">
      <ASideMenus></ASideMenus>
    </el-aside>
    <el-main class="cz-main">
      <router-view v-slot="{ Component }">
        <component
          ref="componentRef"
          :is="Component"
          class="ele-style-container"
        ></component>
      </router-view>
    </el-main>
    <el-aside class="config-aside">
      <el-scrollbar>
        <CzForm v-model="attrs"></CzForm>
      </el-scrollbar>
    </el-aside>
  </div>
</template>

<script lang="ts" setup>
// import CzForm from "@/components/czForm/index.vue";
// import ASideMenus from "@/components/ASideMenus/ASideMenus.vue";
import type { TElementAttrs } from "@/components/czForm/data";

const componentRef = ref<{
  attrs?: TElementAttrs;
} | null>(null);

const attrs = computed(() => componentRef.value?.attrs || {});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
