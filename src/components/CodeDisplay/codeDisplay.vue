<template>
  <div ref="codeContainerRef" class="code-container">
    <div class="operation">
      <span class="language" :class="isOver ? 'box-hidden' : 'box-show'"
        >css</span
      >
      <span
        class="copy"
        :class="isOver ? 'box-show' : 'box-hidden'"
        @click="onCopyCode"
        >复制</span
      >
    </div>
    <pre ref="preRef" v-html="getHighlightCode"></pre>
  </div>
</template>

<script lang="ts" setup>
import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("css", css);

const styles = ref("");

const isOver = ref(false);
const codeContainerRef = ref<HTMLDivElement>();
const preRef = ref<HTMLSpanElement>();

const getHighlightCode = computed(() => {
  let codeBlock = `.basic-form { \n  `;
  if (styles.value) {
    const _style = styles.value.replace(/;/g, ";\n ");
    codeBlock += _style + "\n";
  }
  codeBlock += "}";

  return hljs.highlightAuto(codeBlock).value;
});

const getStyleContent = () => {
  nextTick(() => {
    const ele = document.querySelector(".basic-form") as HTMLElement;
    styles.value = ele?.style.cssText;
  });
};

const onCopyCode = () => {
  // navigator.clipboard.writeText(getHighlightCode.value);
  const range = document.createRange();
  range.selectNode(preRef.value!);
  window.getSelection()?.removeAllRanges(); // 清除当前的选区
  window.getSelection()?.addRange(range); // 添加新的选区

  try {
    const isSuccess = document.execCommand("copy");
    if (isSuccess) {
      // message
      ElMessage.success("代码复制成功！");
    } else {
      ElMessage.error("代码复制失败，请手动复制！");
    }
  } catch (error) {
    ElMessage.error("代码复制失败，请手动复制！");
  }

  window.getSelection()?.removeAllRanges();
};

onMounted(() => {
  getStyleContent();
  if (codeContainerRef.value) {
    codeContainerRef.value.addEventListener("mouseenter", () => {
      isOver.value = true;
    });
    codeContainerRef.value.addEventListener("mouseleave", () => {
      isOver.value = false;
    });
  }
});
</script>

<style lang="scss" scoped>
@import url("./index.scss");
</style>
