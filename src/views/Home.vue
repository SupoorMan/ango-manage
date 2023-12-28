<template>
  <TopMenu></TopMenu>

  <div class="context">
    <LeftMenu class="left-menu"></LeftMenu>

    <div class="body">
        <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import TopMenu from "@/components/TopMenu.vue";
import LeftMenu from "@/components/LeftMenu.vue";
import { RouterView } from "vue-router";

export default {
  name: "HelloWorld",
  components: {
    TopMenu,
    LeftMenu,
    RouterView
},
  props: {
    msg: String,
  },
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
  }

  .body {
    flex: 10;
    background-color: bisque;
    width: 100%;
    height: 100%;
  }
}
</style>
