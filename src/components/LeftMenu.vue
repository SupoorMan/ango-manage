<template>
    <div class="context-left-menu">

        <div class="btn-box" @click="clickMenu">
            <span class="iconfont icon-shangye- iconbox"></span>
            <span>xxx</span>
        </div>

        <div class="btn-box">
            <span class="iconfont icon-shangjiaguanli iconbox"></span>
            <span>xxx</span>
        </div>
    </div>
</template>
  
<script setup>
import { watch } from 'vue';
import api from '@/http/index.ts'

const props = defineProps({ //接收 父传子
    currentTopMenu: Object
});

const clickMenu = ()=>{
    api.get('/ango/test3').then((res)=>{
        console.log(res)
    })
}

watch(props, (newValue, oldValue) => {
    console.log('watch 已触发', newValue)
    console.log('watch 已触发....', oldValue)
})
</script>
  
<style lang="scss" scoped>
@import url('@/assets/menu/iconfont.css');

.context-left-menu {
    background-color: #1e2436;

    .btn-box {
        background-color: rgba(0, 0, 0, 0);
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 26px;
        color: #FFFFFF;
        cursor: pointer;

        .iconbox {
            margin-right: 12px;
        }
    }
}
</style>
  