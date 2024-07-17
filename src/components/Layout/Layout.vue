<template>
  <div class="attrs-wrapper">
    <el-aside class="cz-aside">
      <ASideMenus></ASideMenus>
    </el-aside>
    <el-main>
      <router-view v-slot="{ Component }">
        <component ref="componentRef" :is="Component"></component>
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
import CzForm from "@/components/czForm.vue";
import ASideMenus from "@/components/ASideMenus/ASideMenus.vue";

const componentRef = ref<{
  attrs?: Record<string, any>;
} | null>(null);

const attrs = computed(() => componentRef.value?.attrs || {});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
