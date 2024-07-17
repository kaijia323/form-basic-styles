<script setup lang="ts">
import { useButtonAttrs } from "@/views/button/useButtonAttrs";

const { attrs, styles } = useButtonAttrs();

defineExpose({
  attrs,
});
</script>

<template>
  <div class="button-style-container">
    <button :style="styles">按钮样式</button>
  </div>
</template>

<style lang="scss" scoped>
// @import "./index.scss";
</style>
