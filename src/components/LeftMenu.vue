<template>
  <div class="context-left-menu">
    <div
      class="btn-box"
      v-for="item in leftMenuList"
      :key="item.index"
      @click="clickMenu(item)"
    >
      <span :class="item.selected ? item.class + 'spaned' : item.class"></span>
      <span :class="item.selected ? 'spaned' : ''">{{ item.name }}</span>
      <span v-if="item.selected">{{ item.selectIcon }}</span>
      <div class="bottom-line" v-if="item.selected"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import api from "@/http/index.ts";
import router from "@/router";

const leftMenuList = ref([]);

const props = defineProps({
  //接收 父传子
  currentTopMenu: Object,
});

const emit = defineEmits({ "get-left-menu": Object });
const clickMenu = (item) => {
  //子传父
  emit("get-left-menu", item);

  if (leftMenuList) {
    item.selected = true;
    for (let i = 0; i < leftMenuList.value.length; i++) {
      if (leftMenuList.value[i].path !== item.path) {
        leftMenuList.value[i].selected = false;
      }
    }
  }

  router.push(item.path);
  localStorage.setItem("lm", JSON.stringify(item));
};

watch(props, (newValue, oldValue) => {
  //设置左边子菜单
  let path = props.currentTopMenu.path;
  menuJump(path);

  let lm = localStorage.getItem("lm");
  if (lm) {
    let item = JSON.parse(lm);
    for (let i = 0; i < leftMenuList.value.length; i++) {
      if (leftMenuList.value[i].path === item.path) {
        leftMenuList.value[i].selected = true;
      }
    }
  }
});

//左菜单设置
const menuJump = (path) => {
  switch (path) {
    case "/zhaoshang":
      leftMenuList.value = [
        {
          index: 0,
          name: "水果店",
          path: "/fruitshop",
          class: "iconfont icon-shangjiaguanli iconbox ",
          selected: false,
          selectIcon: "🍒",
        },
        {
          index: 1,
          name: "招商人",
          path: "/people",
          class: "iconfont icon-shangye- iconbox ",
          selected: false,
          selectIcon: "🍓",
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
  background-color: #1E1E1E;
  padding-top: 10px;

  .btn-box {
    background-color: rgba(0, 0, 0, 0);
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    margin-left: 24px;
    color: #929292;
    cursor: pointer;
    user-select: none;

    .iconbox {
      margin-right: 6px;
    }

    .spaned {
      color: #dcdcdc;
    }

    .bottom-line {
      position: relative;
      right: -50px;
      top: -2px;
      height: 1px;
      width: 68%;
      background-color: #ffd700;
    }
  }
}
</style>
