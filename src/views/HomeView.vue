<template>
  <div class="home-box">
    <!-- <el-container> -->
    <Menu @openMenu="isOpen"></Menu>

    <!-- <el-main> -->
    <!-- 功能页 -->
    <!-- <div :class="contextClass" :style="contextBox"> -->
    <div class="context" :style="contextBox">
      <RouterView />
    </div>
    <!-- </el-main> -->
    <!-- </el-container> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Menu from '../components/menu/Menu.vue';

const contextClass = ref('context-close');
const contextBox = ref('width:91%');



// onMounted(() => {
//   window.onresize = () => {
//     return (() => {
//       //body实际宽度
//       let body = window.innerWidth-140;

//       //window.innerWidth/window.outerWidth = bodyBox/body
//       let width = window.innerWidth*body/window.outerWidth;
//       // window.innerWidth * 0.92;
//       if (width <= window.outerWidth*0.5) {
//         return;
//       }
//       contextBox.value = 'width:' + width + 'px;';
//     })()
//   }
// })


const isOpen = (val: number) => {
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
.home-box {
  // height: 100%;
  height: 2000px;
  background-color: #2f323f;

  .context {
    transition: 0.5s;
    float: right;
    margin-top: 20px;
    margin-right: 20px;
    // margin-left: 0%;
    // height: 100%;
    // transition: 0.5s;
  }

  .context-close {
    margin-left: 9.4%;
    height: 100%;
    transition: 0.5s;
  }

  .context-open {
    margin-left: 13%;
    height: 100%;
    transition: 0.5s;
  }

}
</style>