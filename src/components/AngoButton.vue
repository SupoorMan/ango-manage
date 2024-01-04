<template>
  <div :class="btnClass" @mousedown="btnDown" @mouseup="btnUp">
    <span :style="'color:' + props.bcolor">{{ props.bname }}</span>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';

const props = defineProps({
  bname: String,
  bcolor: String
});

const btnClass = ref('context-ango-button')
const btnDown = () => {
  btnClass.value = 'context-ango-button-down'
}
const btnUp = () => {
  btnClass.value = 'context-ango-button'
}
</script>
  
<style lang="scss" scoped>
.context-ango-button {
  color: #1E1E1E;
  background-color: #dcdcdc;
  width: 70px;
  height: 24px;
  cursor: default;
  border-radius: 4px;
  line-height: 24px;
  text-align: center;
  user-select: none;
  display: inline-block;
  margin-right: 5px;
}

.context-ango-button-down {
  color: #1E1E1E;
  background-color: #929292;
  width: 70px;
  height: 24px;
  cursor: default;
  border-radius: 4px;
  line-height: 24px;
  text-align: center;
  user-select: none;
  display: inline-block;
  margin-right: 5px;
}
</style>
  