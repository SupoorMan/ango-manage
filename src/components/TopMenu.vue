<template>
  <div class="context-top-menu">
    <div class="logo" @click="coder">㎡</div>
    <AngoSelect
      class="menu"
      :select-name="select0"
      :select-list="selectList0"
      @get-top-menu-path="getTopMenuPath"
    ></AngoSelect>
  </div>
</template>

<script setup>
import AngoSelect from "@/components/AngoSelect.vue";
import router from "@/router";
import { ref } from "vue";

const select0 = ref("新视见");
const selectList0 = [
  {
    index: 0,
    value: "招商",
    path: "/zhaoshang",
  },
  {
    index: 1,
    value: "财务",
    path: "/caiwu",
  },
  {
    index: 2,
    value: "表单📄",
    path: "/forms",
  },
];

const getTopMenuPath = (item) => {
  router.push(item.path)

  console.log("接收数据：" + item);
};
const coder = ()=>{
  router.push("/coder")
}
</script>

<style lang="scss" scoped>
.context-top-menu {
  height: 48px;
  padding-left: 20px;
  color: #dcdcdc;
  background-color: #1e1e1e;
  display: flex;
  align-items: center;

  .logo {
    color: #ffd700;
    flex: 1;
    user-select: none;
  }

  .menu {
    color: #929292;
    flex: 4;
  }

  .ango-select {
    flex: 1;
  }
}
</style>
