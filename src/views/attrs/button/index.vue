<script setup lang="ts">
import { ref, computed } from "vue";
import type { TCzFormModel } from "@/components/czForm/data";
import czForm from "@/components/czForm/index.vue";
import { turnPx } from "@/utils/common.ts";

const buttonAttrs = ref<TCzFormModel>({
  // width: "fit-content",
  // height: "fit-content",
  width: 80,
  height: 30,
  showBorder: false,
  color: "#fff",
  backgroundColor: "#c6dfc8",
  borderWidth: 1,
  borderStyle: "none",
  borderColor: "#000",
  borderRadius: 0,
  fontSize: 14,
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "center",
  textIndent: 0,
  boxSizing: "border-box",
  padding: 5,
  margin: 20,

  // paddingTop: 0,
  // paddingRight: 0,
  // paddingBottom: 0,
  // paddingLeft: 0,
  // marginTop: 0,
  // marginRight: 0,
  // marginBottom: 0,
  // marginLeft: 0,
  alignItems: "start",
  cursor: "pointer",
});

const buttonStyle = computed(() => {
  // 边框样式
  let border = "none";
  if (buttonAttrs.value.showBorder) {
    border = `${buttonAttrs.value.borderWidth}px ${buttonAttrs.value.borderStyle} ${buttonAttrs.value.borderColor}`;
  }
  // 内边距
  const padding = `${buttonAttrs.value.paddingTop}px ${buttonAttrs.value.paddingRight}px ${buttonAttrs.value.paddingBottom}px ${buttonAttrs.value.paddingLeft}px`;

  // 外边距
  const margin = `${buttonAttrs.value.marginTop}px ${buttonAttrs.value.marginRight}px ${buttonAttrs.value.marginBottom}px ${buttonAttrs.value.marginLeft}px`;

  return {
    ...buttonAttrs.value,
    width: turnPx(buttonAttrs.value.width),
    height: turnPx(buttonAttrs.value.height),
    borderRadius: turnPx(buttonAttrs.value.borderRadius),
    fontSize: turnPx(buttonAttrs.value.fontSize),
    letterSpacing: turnPx(buttonAttrs.value.letterSpacing),
    textIndent: turnPx(buttonAttrs.value.textIndent),
    border,
    padding,
    margin,
  };
});
</script>

<template>
  <div class="button-style-container component-style-container">
    <div class="left-container">
      <button :style="buttonStyle">按钮样式</button>
    </div>
    <div class="right-container">
      <czForm v-model="buttonAttrs" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
