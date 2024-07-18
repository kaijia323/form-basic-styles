<template>
  <div class="paragraph-style-container">
    <p class="p-item" :style="styles">
      今天周三，2024年7月17日，此时的我在纠结今晚吃什么东西，吃饭堂呢还是吃麻辣烫hhh，可是我又有点鼻塞塞呜呜呜。明天周四，后天周五，大后天周六，这一周是小周，所以周六是需要上班，周日是不用上班的。熬过这一周，下一周就会很快乐，因为下一周只要上五天哈哈！！！！
    </p>
    <p class="p-item" :style="styles">
      Today is Wednesday, July 17, 2024. Now I am thinking what I have for
      dinner,in restaurant or have a takeway of malatang. However, I am little
      sick. Tomorrow is Thursday, after tomorrow is Friday, and the day after
      tomorrow is Saturday. This week is a small week, so Saturday is needed to
      work. Sunday is not needed to work. This week is getting better.
    </p>

    <CodeDisplay element="p" :styles="styles"></CodeDisplay>
  </div>
</template>

<script lang="ts" setup>
import { useParagraphAttrs } from "./useParagraphAttrs";
const { attrs, styles } = useParagraphAttrs();

defineExpose({
  attrs,
});
</script>

<style lang="scss" scoped>
@import url("./index.scss");
</style>
