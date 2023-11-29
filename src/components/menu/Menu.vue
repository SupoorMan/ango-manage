<!-- 浮动导航 组件 -->
<template>
  <div class="menu-box">
    <ul>
      <li>
        xxxxxxxxxxxxxxxxx2
      </li>
      <li>_</li>

      <li v-for="item in menuList" :key="item.name" @click="menuClick(item.path)">
        {{ item.name }}
      </li>
    </ul>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter();

//处理F5刷新页面 导航记录被还原到首页
onMounted(() => {
})

const menuList = [{
  "name": "📑主页",
  "path": "/"
}, {
  "name": "☃️项目",
  "path": "/product"
}, {
  "name": "🌨️其他",
  "path": "/other"
}]

const menuClick = (path: string) => {
  router.push({ path: path })
}

const showMenuDetail = ref(true);
const openMenu = (menu: string) => {
  if (menu === 'product') {
    showMenuDetail.value = true;
  }
}
const clearMenu = () => {
  showMenuDetail.value = true;
}

const menuSelect = (event: any) => {
  router.push({ path: event.target.value })
}


const jump = (btn: any) => {//路由跳转
  router.push({ path: btn.path })
}
</script>

<style lang="scss" scoped>
.menu-box {
  z-index: 999;
  background: linear-gradient(to bottom, #17b7bf, #ffffff);

  .menu-project-title {
    font-size: 16px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 40px;

    li {
      float: left;
      margin-right: 20px;
      line-height: 40px;
      height: inherit;
      color: #000000;
    }

    li:first-child {
      margin-left: 18px;
      user-select: none;
    }

    li:nth-child(2) {
      opacity: 0;
      width: 20%;
    }

    li:nth-of-type(n+3):hover {
      cursor: pointer;
      animation: animate 0.4s linear forwards;
    }

    @keyframes animate {
      0% {
        margin-top: -4px;
      }

      100% {
        margin-top: 0px;
        color: #ffffff;
      }
    }
  }


}
</style>