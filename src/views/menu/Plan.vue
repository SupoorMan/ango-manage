<template>
  <!-- 搜索功能 -->
  <el-row>
    <el-col :span="24"></el-col>
  </el-row>

  <el-row class="plan-box">
    <el-col :span="4" class="row-left">
      <div class="node-div">
        <el-button type="warning" plain @click="newNode">列表</el-button>
        <el-button type="primary" plain @click="newNode">新增节点</el-button>
      </div>

      <el-timeline>
        <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon" :type="activity.type"
          :color="activity.color" :size="activity.size" :hollow="activity.hollow" :timestamp="activity.timestamp"
          ref="items" :style="activity.style?.value" @click="clickItem(activity)">
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </el-col>

    <el-col :span="20" class="row-right">
      <el-card shadow="hover">
        <!-- 标题 -->
        <el-row class="title-box">
          <el-col :span="19">
            <el-input v-model="title" placeholder="请输入标题" maxlength="12" class="title-input">
              <template #prepend>
                标题
              </template>
              <template #append>
                <el-select v-model="typeList" placeholder="分类" style="width: 115px">
                  <el-option label="工作" value="1" />
                  <el-option label="学习" value="2" />
                  <el-option label="计划" value="3" />
                </el-select>
              </template>
            </el-input>
          </el-col>

          <el-col :span="5">
            <div class="block">
              <el-date-picker v-model="timetmp" type="datetime" placeholder="选择时间" />
            </div>
          </el-col>
        </el-row>

        <!-- 标签 -->
        <el-row class="tag-box">
          <el-col :span="24">
            <el-tag v-for="tag in dynamicTags" :key="tag" class="tag-item" closable :disable-transitions="false"
              @close="handleClose(tag)">
              {{ tag }}
            </el-tag>
            <el-input v-if="inputVisible" ref="InputRef" v-model="inputValue" class="ml-1 w-20" size="small"
              @keyup.enter="handleInputConfirm" @blur="handleInputConfirm" />
            <el-button v-else class="key-box" size="small" @click="showInput">
              + 关键字
            </el-button>
          </el-col>
        </el-row>

        <!-- 内容 -->
        <el-row class="cxt-box">
          <el-col :span="1" class="text-index">
            <el-text type="primary" v-for="index in textareaRows" style="color: #cfcfcc;">{{ index }}</el-text>
          </el-col>
          <el-col :span="23">
            <el-input v-model="textarea" maxlength="512" placeholder="请输入内容" show-word-limit
              :autosize="{ minRows: textareaRows, maxRows: textareaRows * 2 }" type="textarea" />
          </el-col>
        </el-row>

        <!-- 保存|删除 -->
        <el-row class="tag-box">
          <el-col :span="21">
          </el-col>
          <el-col :span="3">
            <el-button type="primary">保存</el-button>
            <el-button type="danger">删除</el-button>
          </el-col>
        </el-row>
      </el-card>

    </el-col>
  </el-row>

  <el-row>
    <el-col :span="24"></el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'
// import { ElInput } from 'element-plus'

const activities:any = ref([])

const newNode = () => {
  let node: any = { content: '工作1', timestamp: '2022-04-12 20:46', size: 'large', active: 1, icon: MoreFilled, hollow: false, color: '#ff00b7', style: ref('') }
  activities.value.unshift(node)

  console.log(activities)
}

const timetmp = ref('')

const textarea = ref('')
const textareaRows = ref(16)


const inputValue = ref('')
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3'])
const inputVisible = ref(false)
// const InputRef = ref<InstanceType<typeof ElInput>>()

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    // InputRef.value!.input!.focus()
  })
}

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}


const title = ref('')
const typeList = ref('')

const clickItem = (item: any) => {
  activities.forEach((n: any) => {
    if (n.timestamp === item.timestamp) {
      n.style.value = 'background-color: #FFFFFF;border-right: 1rem solid #eb7119;'
    } else {
      n.style.value = ''
    }
  })
}

// const activities = [
//   {
//     content: '工作',
//     timestamp: '2018-04-12 20:46',
//     size: 'large',
//     type: 'primary',
//     active: 1,
//     icon: MoreFilled,
//     hollow: false,
//     color: '#ff00b7',
//     style: ref('')
//   },
//   {
//     content: '外出',
//     timestamp: '2018-04-03 20:16',
//     active: 0,
//     color: '#00f2ff',
//     hollow: false,
//     style: ref('')
//   },
//   {
//     content: 'Custom size',
//     timestamp: '2018-04-03 20:46',
//     size: 'large',
//     active: 0,
//     hollow: true,
//     color: '#2f00ff',
//     style: ref('')
//   },
// ]
</script>

<style lang="scss" scoped>
.plan-box {
  user-select: none;

  .row-left {

    :deep(.el-timeline-item__wrapper) {
      margin-bottom: .5rem;
    }

    .node-div {
      text-align: center;
      margin-bottom: 1rem;
    }
  }

  .row-right {

    .title-box {
      margin-bottom: 1rem;

      .title-input {
        width: 70%;
      }
    }

    .tag-box {
      margin-bottom: .8rem;

      .tag-item {
        margin-right: .2rem;
        margin-bottom: .2rem;
      }

    }

    .cxt-box {
      margin-bottom: 1rem;

      .text-index {
        display: inline-grid;
        line-height: 1.5;
        margin-top: 0.3rem;
        justify-items: center;
        border-left: 0.1rem solid #dbdbdb;
      }
    }
  }
}
</style>