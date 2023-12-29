<template>
  <div class="context-top-menu">
    <div class="logo" @click="coder">㎡</div>
    <AngoSelect class="menu" :select-name="select0" :select-list="selectList0" @get-top-menu-path="getTopMenuPath"
      @to-coder="toCoder"></AngoSelect>
  </div>
</template>

<script setup>
import AngoSelect from "@/components/AngoSelect.vue";
import router from "@/router";
import { ref } from "vue";

const openCoder = ref(false)
//父传子
const select0 = ref("新视见");
const selectList0 = [
  {
    index: 0,
    value: "招商",
    path: "/zhaoshang",
    leftMenu: true
  },
  {
    index: 1,
    value: "财务",
    path: "/caiwu",
    leftMenu: false
  },
  {
    index: 2,
    value: "表单📄",
    path: "/forms",
    leftMenu: false
  },
];

const emit = defineEmits({ "open-left-menu": Object, "to-coder": Boolean });
const getTopMenuPath = (item) => { //子传父
  router.push(item.path)

  openCoder.value = false
  emit("open-left-menu", item);
}
const toCoder = () => {
  openCoder.value = true
  emit("to-coder", openCoder.value);
}

const coder = () => {
  router.push("/coder")

  toCoder()
}
</script>

<style lang="scss" scoped>
.context-top-menu {
  height: 48px;
  padding-left: 20px;
  color: #dcdcdc;
  background-color: #363c4e;
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
