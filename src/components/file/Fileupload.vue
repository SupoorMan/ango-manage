<template>
  <div>
    <!-- <el-input v-model="" type="file" /> -->

    <el-image style="width: 100px; height: 100px" :src="url" :fit="fit" />

    <button @click="login">ssadada</button>
  </div>
</template>
  
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from '@/http/index'

const login = () => {
  axios.post('/auth', param)
    .then((res) => {
      console.log(res)
    })
}
</script>
  
<style lang="scss" scoped>
</style>