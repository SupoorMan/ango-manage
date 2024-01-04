<template>
    <div class="context-menu">
        <div class="left-box">
            <AngoInput :label="'名称'"></AngoInput>
        </div>
        <div class="midden-line">1</div>
        <div class="right-box">
            <div class="node" @mousedown="handleMouseDown">1</div>
            <div>2</div>
            <div>3</div>
            <div>1</div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import AngoInput from '@/components/AngoInput.vue';

// document.addEventListener('mousemove', handleMouseMove)
// document.addEventListener('mouseup', handleMouseUp)

const startX = ref(0)
const startY = ref(0)
const node1 = ref(null)

const handleMouseDown=(event) =>{
    // event.preventDefault(); // 阻止默认的拖放操作

    startX.value = event.clientX - event.offsetLeft; // 记录初始鼠标位置与元素左边距之间的偏移量
    startY.value = event.clientY - event.offsetTop;

    //console.log(node1.value)
    // document.addEventListener('mousemove', handleMouseMove); // 添加鼠标移动事件监听器
    // document.addEventListener('mouseup', handleMouseUp); // 添加鼠标松开事件监听器
}

const handleMouseMove = (event) => {
    const x = event.clientX - startX.value; // 计算鼠标位置与初始位置之间的偏移量
    const y = event.clientY - startY.value;

    //node1.value.style.transform = `translate(${x}px, ${y}px)`; // 根据偏移量更新元素的位置
    console.log(node1.value)
}

const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove); // 移除鼠标移动事件监听器
    document.removeEventListener('mouseup', handleMouseUp); // 移除鼠标松开事件监听器
}
</script>
  
<style lang="scss" scoped>
.context-menu {
    background-color: #c2c7cb;
    display: flex;
    height: 100%;

    .left-box {
        background-color: aquamarine;
        flex: 16;
    }

    .midden-line {
        background-color: brown;
        flex: 1;
    }

    .right-box {
        background-color: chocolate;
        flex: 16;

        .node {
            height: 40px;
            width: 40px;
            background-color: #c2c7cb;
            border-radius: 50%;
            line-height: 40px;
            text-align: center;
            cursor: default;

            transition: transform 0.5s ease;
        }

        .node:active {
            cursor: move;
        }
    }
}
</style>
  