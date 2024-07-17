<template>
  <div class="attrs-wrapper">
    <el-aside class="cz-aside">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-scrollbar>
          <el-menu-item v-for="index in 30" :key="index">
            <span>按钮 Button {{ index }}</span>
          </el-menu-item>
        </el-scrollbar>
      </el-menu>
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

const { attrs, styles } = useButtonAttrs();
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
