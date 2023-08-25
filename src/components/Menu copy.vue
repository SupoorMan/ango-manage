<!-- 浮动导航 组件 -->
<template>
  <el-affix :offset="150" class="affix-box" @mouseenter="affix_enter" @mouseleave="affix_leave">
    <div class="crt_nai">🐾&nbsp;{{ currentNav }}</div>

    <el-button type="primary" :style="btm.style.value" v-for="btm in navi" :key="btm.rame" @mouseenter="item_enter(btm)"
      @mouseleave="item_leave(btm)" @click="jump(btm)">

      <el-icon>
        <component :is="btm.icon" />
      </el-icon>
      <span v-if="btm.name.value" class="span-cnt">
        &nbsp;{{ btm.name.value }}
      </span>
    </el-button>
  </el-affix>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter();

//处理F5刷新页面 导航记录被还原到首页
onMounted(() => {
  let name = router.currentRoute.value.name
  navi.forEach(n => {
    if (n.path === name) {
      currentNav.value = n.rame
      return
    }
  })
})

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
  }, {
    name: ref(),
    rame: '计划',
    icon: 'Paperclip',
    style: ref('transition: .5s;width:2.8rem;background-color: #ffffff00;color: #0019dd;border: 0px solid #0019dd;'),
    affix_in: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #0019dd;border: 0px solid #0019dd;',
    affix_out: 'transition: .5s;width:2.8rem;background-color: #ffffff00;color: #0019dd;border: 0px solid #0019dd;',
    btn_in: 'background-color: #0019dd;color: #FFF;border: 0px solid #0019dd;',
    btn_out: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #0019dd;',
    path: 'plan',
  }, {
    name: ref(),
    rame: '游戏',
    icon: 'Bell',
    style: ref('transition: .5s;width:2.8rem;background-color: #ffffff00;color: #EE7700;border: 0px solid #EE7700;'),
    affix_in: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #EE7700;border: 0px solid #EE7700;',
    affix_out: 'transition: .5s;width:2.8rem;background-color: #ffffff00;color: #EE7700;border: 0px solid #EE7700;',
    btn_in: 'background-color: #EE7700;color: #FFF;border: 0px solid #EE7700;',
    btn_out: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #EE7700;',
    path: 'game',
  }, {
    name: ref(),
    rame: 'Java',
    icon: 'PieChart',
    style: ref('transition: .5s;width:2.8rem;background-color: #ffffff00;color: #0066FF;border: 0px solid #0066FF;'),
    affix_in: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #0066FF;border: 0px solid #0066FF;',
    affix_out: 'transition: .5s;width:2.8rem;background-color: #ffffff00;color: #0066FF;border: 0px solid #0066FF;',
    btn_in: 'background-color: #0066FF;color: #FFF;border: 0px solid #0066FF;',
    btn_out: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #0066FF;',
    path: 'builder',
  }, {
    name: ref(),
    rame: '资源',
    icon: 'Crop',
    style: ref('transition: .5s;width:2.8rem;background-color: #ffffff00;color: #888888;border: 0px solid #888888;'),
    affix_in: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #888888;border: 0px solid #888888;',
    affix_out: 'transition: .5s;width:2.8rem;background-color: #ffffff00;color: #888888;border: 0px solid #888888;',
    btn_in: 'background-color: #888888;color: #FFF;border: 0px solid #888888;',
    btn_out: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #888888;',
    path: 'index',
  },{
    name: ref(),
    rame: 'Upp',
    icon: 'Mug',
    style: ref('transition: .5s;width:2.8rem;background-color: #ffffff00;color: #888888;border: 0px solid #888888;'),
    affix_in: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #888888;border: 0px solid #888888;',
    affix_out: 'transition: .5s;width:2.8rem;background-color: #ffffff00;color: #888888;border: 0px solid #888888;',
    btn_in: 'background-color: #888888;color: #FFF;border: 0px solid #888888;',
    btn_out: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #888888;',
    path: 'uniapp',
  },{
    name: ref(),
    rame: '水果',
    icon: 'Apple',
    style: ref('transition: .5s;width:2.8rem;background-color: #ffffff00;color: #888888;border: 0px solid #888888;'),
    affix_in: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #888888;border: 0px solid #888888;',
    affix_out: 'transition: .5s;width:2.8rem;background-color: #ffffff00;color: #888888;border: 0px solid #888888;',
    btn_in: 'background-color: #888888;color: #FFF;border: 0px solid #888888;',
    btn_out: 'transition: .5s;width:4.5rem;background-color: #ffffff00;color: #888888;',
    path: 'fruitShop',
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

<style scoped>
.crt_nai {
  width: fit-content;
  margin-left: .7rem;
  margin-bottom: 1.6rem;
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

.el-button {
  margin-left: 0 !important;
  margin-bottom: .4rem;
  background-color: #ffffff00;
}

.el-container {
  height: 100%
}

.el-affix {
  width: 5rem !important;
  height: auto !important;
  position: absolute;
  top: 20%;
  text-align: center;
  /* padding-top: 0.3rem; */
  border-radius: 7%;
  transition: .5s;
}
</style>