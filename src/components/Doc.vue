<template>
    <div class="main-box" :style="changeBox">
        主界面

        <button @click="small">缩小</button>
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';


const changeBox = ref('')
const small = async () => {
    changeBox.value = "height:300px"

    await sleep(2000)

    changeBox.value = "height:524px"

}

const sleep=(ms: number) =>{
    return new Promise(resolve => setTimeout(resolve, ms));
}
</script>
  
<style lang="scss" scoped>
.main-box {
    background-color: bisque;
    margin-left: -22px;
    transition: 1.2s;
    height: 924px;
}
</style>
  