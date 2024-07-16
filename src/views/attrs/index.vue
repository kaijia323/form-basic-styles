<template>
  <div class="attrs-wrapper">
    <aside>
      <div class="aside-container">
        <span>按钮</span>
      </div>
    </aside>
    <main>
      <ButtonCom />
    </main>
  </div>
</template>

<script lang="ts" setup>
import ButtonCom from "./button/index.vue";
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
  }

  main {
    display: flex;
    flex: 1;
  }
}
</style>
