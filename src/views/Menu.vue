<template>
    <div class="context-menu">
        <div class="left-box">
            <AngoInput :label="'名称'"></AngoInput>
        </div>
        <div class="midden-line">1</div>
        <div class="right-box">
           <div class="node1">111</div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import AngoInput from '@/components/AngoInput.vue';
import draggable from 'vuedraggable';

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

        .node1{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            line-height: 40px;
            text-align: center;
        }

    }
}
</style>
  