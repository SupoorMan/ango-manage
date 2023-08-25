<template>
  <div class="builder-box">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="一键生成API文档" name="first">
        <JavaAutoAPI></JavaAutoAPI>

      </el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import JavaAutoAPI from './builder/JavaAutoAPI.vue'
// import type { TabsPaneContext } from 'element-plus'


const activeName = ref('first')

const handleClick = (tab: any, event: Event) => {
  console.log(tab, event)
}
</script>

<style scoped>
.builder-box {
  height: 100%;
}

.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

</style>
