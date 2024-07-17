<template>
  <div class="attrs-wrapper">
    <aside>
      <div class="aside-container">
        <!-- <span>按钮</span> -->
        <span
          class="aside-item"
          v-for="ele in eleArrs"
          :key="ele.type"
          :class="{
            'aside-active': ele.type === selected,
          }"
          @click="selected = ele.type"
          >{{ ele.text }}</span
        >
      </div>
    </aside>
    <main>
      <ButtonCom v-if="selected === 'button'" />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ButtonCom from "./button/index.vue";
const eleArrs = [
  {
    type: "button",
    text: "按钮",
  },
  {
    type: "p",
    text: "段落",
  },
];

const selected = ref("button");
</script>

<style lang="scss" scoped>
.attrs-wrapper {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  gap: 24px;

  aside {
    height: 100%;
    width: 200px;
    background: #c6dfc8;

    .aside-container {
      display: flex;
      flex-direction: column;

      .aside-item {
        padding: 10px;
        color: #333;
        border-bottom: 1px solid #efefef;
        cursor: pointer;

        &.aside-active,
        &:hover {
          color: #fff;
          background: #5bae23;
        }
      }
    }
  }

  main {
    display: flex;
    flex: 1;
  }
}
</style>
