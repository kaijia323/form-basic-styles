<script setup lang="ts">
import { ref, computed } from "vue";
const buttonAttrs = ref({
  width: "fit-content",
  height: "fit-content",
  showBorder: true,
  color: "",
  backgroundColor: "",
});

const turnPx = (num?: string | number) => {
  if (isNaN(Number(num))) {
    return num;
  }
  return num + "px";
};

const border = computed(() => {
  if (buttonAttrs.value.showBorder) {
    return "";
  }
  return "none";
});
</script>

<template>
  <div class="form-basic-styles">
    <button
      :style="{
        ...buttonAttrs,
        width: turnPx(buttonAttrs.width),
        height: turnPx(buttonAttrs.height),
        border,
      }"
    >
      按钮样式
    </button>
    <div class="layout-right">
      <el-form :model="buttonAttrs">
        <el-form-item label="宽度" prop="width">
          <el-input-number v-model="buttonAttrs.width"></el-input-number>
        </el-form-item>
        <el-form-item label="高度" prop="height">
          <el-input-number v-model="buttonAttrs.height"></el-input-number>
        </el-form-item>
        <el-form-item label="是否显示边框" prop="border">
          <el-checkbox v-model="buttonAttrs.showBorder"></el-checkbox>
        </el-form-item>
        <el-form-item label="文字颜色" prop="color">
          <el-color-picker v-model="buttonAttrs.color" />
        </el-form-item>
        <el-form-item label="背景颜色" prop="backgroundColor">
          <el-color-picker v-model="buttonAttrs.backgroundColor" />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-basic-styles {
  display: flex;
  .layout-right {
    margin-left: auto;
  }
}
</style>
