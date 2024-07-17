<template>
  <div class="attrs-wrapper">
    <el-aside class="cz-aside">
      <ASideMenus></ASideMenus>
    </el-aside>
    <el-main>
      <ButtonCom :styles="styles" />
    </el-main>
    <el-aside class="config-aside">
      <el-scrollbar>
        <CzForm v-model="attrs"></CzForm>
      </el-scrollbar>
    </el-aside>
  </div>
</template>

<script lang="ts" setup>
import ButtonCom from "./button/index.vue";
import CzForm from "@/components/czForm.vue";
import { useButtonAttrs } from "./button/useButtonAttrs";
import ASideMenus from "@/components/ASideMenus/ASideMenus.vue";

const { attrs, styles } = useButtonAttrs();
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
