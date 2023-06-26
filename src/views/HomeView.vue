<script setup lang="ts">
import headerLight from '../components/HeaderLight.vue';
import { ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter();

const navi = [
  {
    name: ref(),
    rame: '空地',
    icon: 'Mug',
    style: ref('transition: .5s;width:2.8rem;background-color: #ffffff00;color: #00DD00;border: 0px solid #00DD00;'),
    affix_in: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #00DD00;border: 0px solid #00DD00;',
    affix_out: 'transition: .5s;width:2.8rem;background-color: #ffffff00;color: #00DD00;border: 0px solid #00DD00;',
    btn_in: 'background-color: #00DD00;color: #FFF;border: 0px solid #00DD00;',
    btn_out: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #00DD00;',
    path: 'index',
  },
  {
    name: ref(),
    rame: '设置',
    icon: 'Bell',
    style: ref('transition: .5s;width:2.8rem;background-color: #ffffff00;color: #EE7700;border: 0px solid #EE7700;'),
    affix_in: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #EE7700;border: 0px solid #EE7700;',
    affix_out: 'transition: .5s;width:2.8rem;background-color: #ffffff00;color: #EE7700;border: 0px solid #EE7700;',
    btn_in: 'background-color: #EE7700;color: #FFF;border: 0px solid #EE7700;',
    btn_out: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #EE7700;',
    path: 'index',
  },
  {
    name: ref(),
    rame: '搭建',
    icon: 'PieChart',
    style: ref('transition: .5s;width:2.8rem;background-color: #ffffff00;color: #0066FF;border: 0px solid #0066FF;'),
    affix_in: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #0066FF;border: 0px solid #0066FF;',
    affix_out: 'transition: .5s;width:2.8rem;background-color: #ffffff00;color: #0066FF;border: 0px solid #0066FF;',
    btn_in: 'background-color: #0066FF;color: #FFF;border: 0px solid #0066FF;',
    btn_out: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #0066FF;',
    path: 'builder',
  },
  {
    name: ref(),
    rame: '资源',
    icon: 'Crop',
    style: ref('transition: .5s;width:2.8rem;background-color: #ffffff00;color: #888888;border: 0px solid #888888;'),
    affix_in: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #888888;border: 0px solid #888888;',
    affix_out: 'transition: .5s;width:2.8rem;background-color: #ffffff00;color: #888888;border: 0px solid #888888;',
    btn_in: 'background-color: #888888;color: #FFF;border: 0px solid #888888;',
    btn_out: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #888888;',
    path: 'index',
  }
]

let currentNav = ref(navi[0].rame)

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

const item_enter = (btn: any) => {//按钮进入事件
  btn.style.value = btn.affix_in + btn.btn_in
}
const item_leave = (btn: any) => {//按钮移出事件
  btn.style.value = btn.affix_out + btn.btn_out
}


const jump = (btn: any) => {//路由跳转
  currentNav.value = btn.rame
  router.push({ path: btn.path })
}
</script>

<template>
  <div class="home-box">
    <el-container>
      <img alt="logo" src="@/assets/ango1.png" height="48" width="72" class="logo-img" />
      <!-- <el-header>
      </el-header> -->
      <el-main class="main-box">
        <!-- 浮动导航 -->
        <div class="crt_nai">🐾&nbsp;{{ currentNav }}</div>
        <el-affix draggable="true" :offset="150" class="affix-box" @mouseenter="affix_enter" @mouseleave="affix_leave">
          <el-button type="primary" :style="btm.style.value" v-for="btm in navi" :key="btm.rame"
            @mouseenter="item_enter(btm)" @mouseleave="item_leave(btm)" @click="jump(btm)">

            <el-icon>
              <component :is="btm.icon" />
            </el-icon>
            <span v-if="btm.name.value" class="span-cnt">
              &nbsp;{{ btm.name.value }}
            </span>
          </el-button>
        </el-affix>

        <!-- 功能页 -->
        <div class="context">
          <RouterView />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.context {
  margin-left: 7%;
  height: 100%;
}

.crt_nai {
  width: fit-content;
  position: absolute;
  top: 17%;
  left: 1%;
  user-select: none;
  pointer-events: none;
}

.span-cnt {
  opacity: 0;
  animation: fadeIn .4s ease-out forwards 0.4s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

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
  transition: .5s;
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
  /* border-bottom: 1px solid rgb(47, 41, 52); */
}

.el-container {
  height: 100%
}

.logo-img {
  pointer-events: none;
  user-select: none;
  position: absolute;
  left: 1.2%;
  top: 2.2%;
}
</style>