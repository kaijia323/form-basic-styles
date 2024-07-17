<template>
  <div class="paragraph-style-container component-style-container">
    <div class="left-container">
      <p :style="paragraphStyle">
        今天星期三，日期事2024年7月17日，心情愉悦，今天早上吃的很饱，吃了一个鸡蛋
        一点炒面 一点粥 两个饺子
        一个糯米鸡，还有一个燕麦牛奶，燕麦牛奶超级好喝，我下次还要买这个牛奶！
      </p>
    </div>
    <div class="right-container">
      <czForm v-model="paragraphAttrs" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TCzFormModel } from "@/components/czForm/data";
import { turnPx } from "@/utils/common.ts";
// import { ref, computed } from "vue";
// import czForm from "@/components/czForm/index.vue";
const paragraphAttrs = ref<TCzFormModel>({
  boxSizing: "content-box",
  width: 500,
  height: 200,
  padding: 20,
  margin: 20,
  backgroundColor: "#F9D770",
  color: "#fff",
  showBorder: false,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "#000",
});

const paragraphStyle = computed(() => {
  const width = turnPx(paragraphAttrs.value.width);
  const height = turnPx(paragraphAttrs.value.height);
  const padding = `${turnPx(paragraphAttrs.value?.paddingTop)} ${turnPx(
    paragraphAttrs.value?.paddingRight
  )} ${turnPx(paragraphAttrs.value?.paddingBottom)} ${turnPx(
    paragraphAttrs.value?.paddingLeft
  )}`;
  const margin = `${turnPx(paragraphAttrs.value?.marginTop)} ${turnPx(
    paragraphAttrs.value?.marginRight
  )} ${turnPx(paragraphAttrs.value?.marginBottom)} ${turnPx(
    paragraphAttrs.value?.marginLeft
  )}`;

  return {
    ...paragraphAttrs.value,
    width,
    height,
    padding,
    margin,
  };
});
</script>
