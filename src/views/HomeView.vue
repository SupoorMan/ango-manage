<template>
  <div class="home-box">
    <el-container>
      <!-- <img alt="logo" src="@/assets/ango1.png" height="48" width="72" class="logo-img" /> -->
      <div class="bk-money"></div>
      <!-- <h1 class="logo-img">Ango</h1> -->
      <Menu @openMenu="isOpen"></Menu>

      <el-main class="main-box">
        <!-- 功能页 -->
        <div :class="contextClass">
          <RouterView />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Menu from '../components/Menu.vue';

const contextClass = ref('context-close');

const isOpen = (val: number) => {
  console.log('组件传值:' + val)
  if (val === 1) { //打开菜单
    contextClass.value = "context-open"
  } else if (val === 0) {
    contextClass.value = "context-close"
  } else if (val === 2) {
    contextClass.value = "context"
  }
}

</script>

<style lang="scss" scoped>
.context {
  margin-left: 0%;
  height: 100%;
  transition: 0.5s;
}

.context-close {
  margin-left: 9.6%;
  height: 100%;
  transition: 0.5s;
}

.context-open {
  margin-left: 15.2%;
  height: 100%;
  transition: 0.5s;
}

.bk-money {
  background: url('../static/money.jpg');
  background-size: 100% 100%;
}

.home-box {
  height: 100%;
  background-color: #2f323f;
}

// .logo-img {
//   pointer-events: none;
//   user-select: none;
//   position: absolute;
//   left: 1.2%;
//   top: 2.2%;
//   color: antiquewhite;
// }
</style>