<template>
    <div class="context-shop">
        <div class="header">header</div>
        <div class="body">
          <PageList></PageList>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import PageList from '@/components/PageList.vue';
  
  </script>
  
  <style lang="scss" scoped>
  .context-shop {
    // background-color: aliceblue;
    padding-top: 8px;
    padding-left: 8px;
    padding-right: 8px;
    
    .header{
      background-color: aquamarine;
    }

    .body{
      background-color: wheat;
    }
  }
  </style>
  