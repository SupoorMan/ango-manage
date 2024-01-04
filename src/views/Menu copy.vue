<template>
    <div class="context-menu">
        <div class="left-box">
            <AngoInput :label="'名称'"></AngoInput>
        </div>
        <div class="midden-line">1</div>
        <div class="right-box" ref="back_box">
            这是一个背景
            <div class="drag_box" draggable="true" @dragstart="dragstart($event)" @dragend="dragend($event)"
                :style="`left:${elLeft}px;top:${elTop}px`">
                这是一个蓝色可拖拽元素
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, reactive } from 'vue';
import {draggable} from 'v-draggable'
import AngoInput from '@/components/AngoInput.vue';
let initWidth = ref(0) // 父元素的宽-自适应值
let initHeight = ref(0) // 父元素的高-自适应值
let startclientX = ref(0) // 元素拖拽前距离浏览器的X轴位置
let startclientY = ref(0) //元素拖拽前距离浏览器的Y轴位置
let elLeft = ref(0) // 元素的左偏移量
let elTop = ref(0) // 元素的右偏移量
let back_box = ref()

// 页面初始化
const initBodySize = () => {
    initWidth.value = back_box.value.clientWidth; // 拿到父元素宽
    initHeight.value = initWidth.value * ((1080 * 0.88) / (1920 - 1080 * 0.02)); // 根据宽计算高实现自适应
}
// 拖拽开始事件
const dragstart = (e) => {
    console.log(e);
    startclientX.value = e.clientX; // 记录拖拽元素初始位置
    startclientY.value = e.clientY;
}
// 拖拽完成事件
const dragend = (e) => {
    console.log(e);
    let x = e.clientX - startclientX.value; // 计算偏移量
    let y = e.clientY - startclientY.value;
    elLeft.value += x; // 实现拖拽元素随偏移量移动
    elTop.value += y;
}
onMounted(() => {
    initBodySize()
})

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

        .drag_box {
            width: 100px;
            height: 100px;
            background: skyblue;
            position: relative;
            z-index: 10;
            user-select: none;
        }

    }
}
</style>
  