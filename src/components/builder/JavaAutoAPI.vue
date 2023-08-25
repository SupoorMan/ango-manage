<template>
  <div class="builder-box">
    
    <el-input v-model="input" type="file" multiple="" webkitdirectory="" accept="*/*" 
    placeholder="Please input" />

  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const input = ref('')
</script>
  
<style scoped></style>
  