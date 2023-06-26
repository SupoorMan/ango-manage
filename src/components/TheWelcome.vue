<script setup lang="ts">
import headerLight from './HeaderLight.vue';
import { ref } from 'vue'

const navi = [
  {
    name: ref(),
    rame: '空地',
    icon: 'Mug',
    style: ref('transition: .6s;width:2.8rem;background-color: #ffffff00;color: #00DD00;border: 0px solid #00DD00;'),
    affix_in: 'transition: .6s;width:4.5rem;background-color: #ffffff00;color: #00DD00;border: 0px solid #00DD00;',
    affix_out: 'transition: .6s;width:2.8rem;background-color: #ffffff00;color: #00DD00;border: 0px solid #00DD00;',
    btn_in: 'background-color: #00DD00;color: #FFF;border: 0px solid #00DD00;',
    btn_out: 'transition: .6s;width:4.5rem;background-color: #ffffff00;color: #00DD00;',
  },
  {
    name: ref(),
    rame: '设置',
    icon: 'Bell',
    style: ref('transition: .6s;width:2.8rem;background-color: #ffffff00;color: #EE7700;border: 0px solid #EE7700;'),
    affix_in: 'transition: .6s;width:4.5rem;background-color: #ffffff00;color: #EE7700;border: 0px solid #EE7700;',
    affix_out: 'transition: .6s;width:2.8rem;background-color: #ffffff00;color: #EE7700;border: 0px solid #EE7700;',
    btn_in: 'background-color: #EE7700;color: #FFF;border: 0px solid #EE7700;',
    btn_out: 'transition: .6s;width:4.5rem;background-color: #ffffff00;color: #EE7700;',
  },
  {
    name: ref(),
    rame: '搭建',
    icon: 'PieChart',
    style: ref('transition: .6s;width:2.8rem;background-color: #ffffff00;color: #0066FF;border: 0px solid #0066FF;'),
    affix_in: 'transition: .6s;width:4.5rem;background-color: #ffffff00;color: #0066FF;border: 0px solid #0066FF;',
    affix_out: 'transition: .6s;width:2.8rem;background-color: #ffffff00;color: #0066FF;border: 0px solid #0066FF;',
    btn_in: 'background-color: #0066FF;color: #FFF;border: 0px solid #0066FF;',
    btn_out: 'transition: .6s;width:4.5rem;background-color: #ffffff00;color: #0066FF;',
  },
  {
    name: ref(),
    rame: '技术',
    icon: 'Crop',
    style: ref('transition: .6s;width:2.8rem;background-color: #ffffff00;color: #888888;border: 0px solid #888888;'),
    affix_in: 'transition: .6s;width:4.5rem;background-color: #ffffff00;color: #888888;border: 0px solid #888888;',
    affix_out: 'transition: .6s;width:2.8rem;background-color: #ffffff00;color: #888888;border: 0px solid #888888;',
    btn_in: 'background-color: #888888;color: #FFF;border: 0px solid #888888;',
    btn_out: 'transition: .6s;width:4.5rem;background-color: #ffffff00;color: #888888;',
  }
]

// let affix_stype: any = ref('width:2.8rem;')

//导航事件
const affix_enter = () => { //开启
  for (let i = 0; i < navi.length; i++) {
    navi[i].name.value = navi[i].rame
    navi[i].style.value = navi[i].affix_in
  }

}
const affix_leave = () => { //关闭
  for (let i = 0; i < navi.length; i++) {
    navi[i].name.value = ''
    navi[i].style.value = navi[i].affix_out
  }
}

let moveByDown = ref('')
const affix_down = (e: any) => {//点击下去事件
  moveByDown.value = "background-color: blue;"
}
const affix_up = () => {//点击释放事件
  moveByDown.value = "background-color: yellow;"
}

const item_enter = (btn: any) => {//按钮进入事件
  btn.style.value = btn.affix_in + btn.btn_in
}
const item_leave = (btn: any) => {//按钮移出事件
  btn.style.value = btn.affix_out + btn.btn_out
}
</script>

<template>
  <div class="home-box">
    <el-container>
      <el-header>
        <headerLight></headerLight>
        <img alt="logo" src="@/assets/ango1.png" height="48" width="72" class="logo-img">
      </el-header>
      <el-main class="main-box">
        <div draggable="true" class="hello" :style="moveByDown" @mousedown="affix_down($event)" @mouseup="affix_up">
          hello
        </div>

        <!-- 浮动导航 -->
        <el-affix draggable="true" :offset="150" class="affix-box" @mouseenter="affix_enter" @mouseleave="affix_leave"
          @mousedown="affix_down($event)" @mouseup="affix_up">
          <el-button type="primary" :style="btm.style.value" v-for="btm in navi" :key="btm.rame"
            @mouseenter="item_enter(btm)" @mouseleave="item_leave(btm)">
            <el-icon>
              <component :is="btm.icon" />
            </el-icon>
            <span v-if="btm.name.value">&nbsp;{{ btm.name.value }}</span>
          </el-button>
        </el-affix>


      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.hello {
  width: min-content;
}

.affix-box {
  left: 0%;
}

.el-affix {
  width: 5rem !important;
  height: auto !important;
  position: absolute;
  top: 20%;
  text-align: center;
  padding-top: 0.3rem;
  border-radius: 7%;
  transition: .6s;
}

.el-button {
  margin-left: 0 !important;
  margin-bottom: .4rem;
  background-color: #ffffff00;
}

.home-box {
  height: 100%
}

.el-header {
  border-bottom: 1px solid rgb(47, 41, 52);
}

.el-container {
  height: 100%
}

.logo-img {
  pointer-events: none;
  user-select: none;
  margin-top: 0.3rem;
}
</style>