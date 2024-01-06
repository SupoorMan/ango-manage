<template>
  <div class="context-menu">
    <div class="left-box">
      <AngoInput :label="'一级菜单名称'" :label-width="84"></AngoInput>
    </div>
    <div class="midden-line">1</div>
    <div class="right-box">
      <div class="demo" draggable="true">123</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import AngoInput from "@/components/AngoInput.vue";

const list = [
  { name: "John", id: 0 },
  { name: "Joao", id: 1 },
  { name: "Jean", id: 2 },
];
</script>

<style lang="scss" scoped>
.context-menu {
  background-color: #c2c7cb;
  display: flex;
  height: 100%;

  .left-box {
    background-color: aquamarine;
    flex: 16;
  }

  .midden-line {
    background-color: brown;
    flex: 1;
  }

  .right-box {
    background-color: rgb(226, 187, 159);
    flex: 16;

    .demo{
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background-color: chocolate;
      line-height: 50px;
      text-align: center;
      user-select: none;
      margin-top: 20px;
      margin-left: 20px;
    }
  }
}
</style>
