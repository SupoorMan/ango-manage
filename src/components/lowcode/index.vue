<template>
  <div class="schema">
    <!-- lowcode header -->
    <ul class="schema-head">
      <li>schema 生成器</li>
      <li>
        <el-button size="small" @click="resetSchema">重置 schema</el-button>
        <el-button size="small" class="f-white bg-theme" @click="exportSchema">导出 schema</el-button>
      </li>
    </ul>
    <!-- lowcode body -->
    <div class="schema-body">
      <schema-content></schema-content>
    </div>

    <!-- export -->
    <schema-export ref="export"></schema-export>
  </div>
</template>

<script setup lang="ts">
// schema生成器页面所需注册文件，进入当前路由再懒加载执行
// import '@/util/registerGenerator'
import data from './data.json'

import SchemaContent from '@/components/lowcode/component/SchemaContent.vue'
import { provide, reactive, ref } from 'vue';
import SchemaExport from './component/SchemaExport.vue'

const state = ref(data)

const model = reactive({
  label: '新增组件',
  icon: 'icon-zujian',
  componentList: []
})
const curComponent = ref(null)

provide('model', model)
provide('content', curComponent)


</script>

<style lang="scss" scoped>
.schema {
  color: aliceblue;

  .schema-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    width: 100%;
    padding: 0 30px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
    font-size: 16px;
  }

  .schema-body {
    height: calc(100vh - 56px);
  }
}
</style>
