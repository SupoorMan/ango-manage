<template>
  <TopMenu @openLeftMenu="openLeftMenu" @toCoder="openCoder"></TopMenu>

  <div class="context">
    <LeftMenu
      :class="leftMenuClass"
      :current-top-menu="currentTopMenu"
      @get-left-menu="getLeftMenu"
    ></LeftMenu>

    <div class="home-body">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import TopMenu from "@/components/TopMenu.vue";
import LeftMenu from "@/components/LeftMenu.vue";
import { RouterView } from "vue-router";
import { onMounted, ref } from "vue";

const currentTopMenu = ref({}); //父传子
const leftMenuClass = ref("left-menu");

onMounted(() => {
  let tm = localStorage.getItem("tm");
  if (tm) {
    tm = JSON.parse(tm);
    if (tm.leftMenu) {
      openLeftMenu(tm)
    }
  }
});

const openLeftMenu = (item) => {
  //接收 子传父
  if (item.leftMenu) {
    leftMenuClass.value = "left-menu-open";
  } else {
    leftMenuClass.value = "left-menu";
  }

  currentTopMenu.value = item;
};

const openCoder = (open) => {
  //接收 子传父
  if (!open) {
    leftMenuClass.value = "left-menu-open";
  } else {
    leftMenuClass.value = "left-menu";
  }
};

const getLeftMenu = (item) => {
  //Body路由页面
  // console.log(item);
};
</script>

<style lang="scss" scoped>
.context {
  background-color: rgb(232, 241, 238);
  display: flex;
  align-items: center;
  height: 100%;

  .left-menu {
    flex: 1;
    height: 100%;
    margin-left: -10%;
    transition: 0.8s;
  }

  .left-menu-open {
    flex: 1;
    height: 100%;
    margin-left: 0;
    transition: 1s;
    border-top: 1px solid #1E1E1E;
  }

  .home-body {
    flex: 10;
    background-color: #1E1E1E;
    width: 100%;
    height: 100%;
  }
}
</style>
