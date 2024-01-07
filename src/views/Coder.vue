<template>
  <div class="context-coder">
    <AngoButton :bname="'菜单设置'" :bcolor="'#000'" @click="toMenu"
     class="menu-set"></AngoButton>

    <div class="coder-body">
      <RouterView></RouterView>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import router from "@/router";
import AngoButton from '@/components/AngoButton.vue';

const toMenu = () => {
  router.push('/menu')
}
</script>
  
<style lang="scss" scoped>
.context-coder {
  background-color: #2d2d2d;
  height: 100%;//test
  
  .menu-set{
    margin-left: 10px;
    line-height: 28px;
  }

  .coder-body{
    height: 100%;
  }
}
</style>
  