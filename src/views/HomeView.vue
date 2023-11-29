<template>
  <div class="home-box">
    <Menu></Menu>

    <div class="context">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Menu from '../components/menu/Menu.vue';

const contextClass = ref('context-close');

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

</script>

<style lang="scss" scoped>
.home-box {
  // height: 100%;
  height: 2000px;
  background-color: #ffffff;

  .context {
    transition: 0.5s;
    // float: right;
    margin-top: 10px;
    margin-right: 10px;
    margin-left: 10px;
  }
}
</style>