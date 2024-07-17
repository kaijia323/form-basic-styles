<script setup lang="ts">
defineProps<{
  styles: Record<string, any>;
}>();
</script>

<template>
  <div class="button-style-container">
    <div class="left-container">
      <button :style="styles">按钮样式</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./index.scss";
</style>
