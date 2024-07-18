<script setup lang="ts">
import { useButtonAttrs } from "@/views/button/useButtonAttrs";

const { attrs, styles } = useButtonAttrs();
const buttonRef = ref<HTMLButtonElement>();
const style = computed(() => {
  return buttonRef.value?.style.cssText;
});

defineExpose({
  attrs,
  style,
  element: "button",
});
</script>

<template>
  <div class="button-style-container">
    <button :style="styles" ref="buttonRef">按钮样式</button>
  </div>
</template>

<style lang="scss" scoped>
// @import "./index.scss";
</style>
