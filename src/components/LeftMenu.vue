<template>
  <div class="context-left-menu">
    <div
      class="btn-box"
      v-for="item in leftMenuList"
      :key="item.index"
      @click="clickMenu(item)"
    >
      <span :class="item.class"></span>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import api from "@/http/index.ts";

const leftMenuList = ref(null);

const props = defineProps({
  //接收 父传子
  currentTopMenu: Object,
});

const emit = defineEmits({ "get-left-menu": Object });
const clickMenu = (item) => {
  //子传父
  emit("get-left-menu", item);

  //缓存当前菜单localstrong
  
};

watch(props, (newValue, oldValue) => {
  //设置左边子菜单
  let path = props.currentTopMenu.path;
  menuJump(path);
});

//左菜单设置
const menuJump = (path) => {
  switch (path) {
    case "/zhaoshang":
      leftMenuList.value = [
        {
          index: 0,
          name: "投资人",
          path: "/people",
          class: "iconfont icon-shangye- iconbox",
        },
        {
          index: 1,
          name: "投资门店",
          path: "/project",
          class: "iconfont icon-shangjiaguanli iconbox",
        },
      ];
      break;
    case "/caiwu":
      break;
    default:
      break;
  }
};
</script>

<style lang="scss" scoped>
@import url("@/assets/menu/iconfont.css");

.context-left-menu {
  background-color: #1e2436;

  .btn-box {
    background-color: rgba(0, 0, 0, 0);
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    margin-left: 24px;
    color: #ffffff;
    cursor: pointer;

    .iconbox {
      margin-right: 12px;
    }
  }
}
</style>
