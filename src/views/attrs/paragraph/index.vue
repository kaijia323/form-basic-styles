<template>
  <div class="paragraph-style-container">
    <div class="left-container">
      <p :style="paragraphStyle">段落样式</p>
    </div>
    <div class="right-container">
      <czForm v-model="paragraphAttrs" />
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { ref, computed } from "vue";
// import czForm from "@/components/czForm/index.vue";
const paragraphAttrs = ref({
  width: 200,
  height: 200,
  backgroundColor: "#FED71A",
  color: "#fff",
});

const paragraphStyle = computed(() => {
  return {
    ...paragraphAttrs.value,
    width: paragraphAttrs.value.width + "px",
    height: paragraphAttrs.value.height + "px",
  };
});
</script>
