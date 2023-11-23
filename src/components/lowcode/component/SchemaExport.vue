<template>
  <el-dialog title="导出" :visible.sync="show" width="40%">
    <div>
      <template v-if="isComplete">
        <h3 class="mb20 f13 f-grey">
          组件配置项schema，放在组件包下 schema.json
          配置文件中，若不满足可手动修改
        </h3>
        <json-viewer v-model="config" :expand-depth="6" :copyable="{
          copyText: '复制JSON',
          copiedText: '已复制',
          timeout: 1000
        }" boxed></json-viewer>
      </template>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { provide, reactive, ref,inject } from 'vue';
import JsonViewer from 'vue-json-viewer';

const show = ref(false)
const isComplete = ref(false)
const config = ref({})
const initializing = ref({})

const content: any = inject('content')
const model: any = inject('model')

const open = () => {
  show.value = true
  parsing()
}

const parsing = () => {
  config.value = {
    label: content.model.label,
    icon: content.model.icon,
    fields: {}
  }
  content.model.componentList.map((cmp: any) => {
    parsingFields(cmp, config.value.fields)
  })
  isComplete.value = true
}

const parsingFields = (config: { property: any; label: any; type: any; child: any; value: any; data: any; options: any; }, fields: { [x: string]: { label: any; type: any; value?: undefined; } | { label: any; type: any; value: any; }; }) => {
  let { property, label, type, child, value, data, options } = config
  let target = (fields[property] = ['object', 'array'].includes(type)
    ? { label, type }
    : { label, type, value })

  data && (target.data = data)
  options && (target.options = options)

  if (child) {
    target.child = {}
    child.map((c: any) => parsingFields(c, target.child))
  }
}
</script>

<style lang="scss" scoped>
:deep(.jv-button) {
  margin-top: 10px;
  color: $color-theme !important;
}

textarea {
  display: inline-block;
  width: 100%;
  height: 500px;
  margin: 0 auto;
  padding: 20px;
  border: solid 1px #c0c0c0;
}
</style>
