<template>
    <div class="context-ango-select">
        <div class="select" @click="clickItem">
            {{ crtSelectItemValue }}
        </div>

        <div class="option" v-if="openOption">
            <span v-for="item in selectList" :key="item.index">
                <div>{{ item.value }}</div>
            </span>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const openOption = ref(false)
const crtSelectItemValue = "22222"
const selectList = [{
    index: 0,
    value: '怕黑'
},
{
    index: 1,
    value: '菜单'
},
{
    index: 2,
    value: '吃的'
}]


const clickItem = () => {
    openOption.value = true
}
</script>
  
<style lang="scss" scoped>
.context-ango-select {

    .select {
        width: 60px;
        height: 20px;
        background-color: #da2626;
        user-select: none;
        text-align-last: center;
        line-height: 20px;
        position: absolute;
        top: 18px;

        .select-item {
            // line-height: 20px;
        }
    }

    .option {
        color: #1E1E1E;
        width: 60px;
        top: 58px;
        position: relative;
        background-color: bisque;
        text-align-last: center;
        line-height: 30px;
    }
}
</style>
  