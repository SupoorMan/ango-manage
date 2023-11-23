<!-- 导航 组件 -->
<template>
  <div :class="navigationClass">
    <div class="menuToggle" @click="openMenu">
    </div>
    <ul>
      <li :class="item.cls.value" v-for="item in menuList" @click="menuClick(item)">
        <a href="#" style="--clr:#f44336">
          <span class="icon"><i :class="item.icon"></i></span>
          <span class="text">{{ item.label }}</span>
        </a>
      </li>
      <p v-if="!isMenuShow" class="menuNtn" @click="menuShowOpen">导航</p>
    </ul>

    <div class="menuShower" @click="menuShow">
    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import "@/assets/menu/iconfont.css";
import { nextTick } from 'process';

const router = useRouter();

//处理F5刷新页面 导航记录被还原到首页
onMounted(() => {
  let navigation = document.querySelector('.navigation')
  let menuToggle = document.querySelector('.menuToggle')
  menuToggle?.addEventListener('click', function () {
    navigation?.classList.toggle('active')
  })

  window.onresize = () => {
    return (() => {
      if ((window.outerWidth * 0.8) < document.body.clientWidth) {
        
      }
    })()
  }

})

const menuList = [{
  cls: ref('list active'),
  icon: 'iconfont icon-yueliang',
  label: '首页',
  path: 'index'
},
{
  cls: ref('list'),
  icon: 'iconfont icon-baozi-01',
  label: '没啥',
  path: 'lowcode'
}, {
  cls: ref('list'),
  icon: 'iconfont icon-baomihua-01',
  label: '商品模板',
  path: 'productTemplate'
}, {
  cls: ref('list'),
  icon: 'iconfont icon-bingqilin-01',
  label: '游戏',
  path: 'game'
}, {
  cls: ref('list'),
  icon: 'iconfont icon-jitui-01',
  label: '其他',
  path: 'builder'
}, {
  cls: ref('list'),
  icon: 'iconfont icon-jitui-01',
  label: '其他',
  path: 'uniapp'
}, {
  cls: ref('list'),
  icon: 'iconfont icon-jitui-01',
  label: '其他',
  path: 'fruitShop'
}, {
  cls: ref('list'),
  icon: 'iconfont icon-bingqilin-01',
  label: '文档',
  path: 'doc'
}]

const menuClick = (item: any) => {
  console.log(item)
  menuList.forEach(n => {
    n.cls.value = 'list';
  })

  item.cls.value = 'list active';

  nextTick(() => {
    router.push({ path: item.path });
  })
}

let openMenuStatus = 0
const isOpen = defineEmits(['openMenu']);
// 放大菜单 通知主组件 改变style
const openMenu = () => {
  if (openMenuStatus === 0) {//打开
    openMenuStatus = 1;
  } else if (openMenuStatus === 1) {//关闭
    openMenuStatus = 0;
  }
  isOpen('openMenu', openMenuStatus);
}

let isMenuShow = true;
const navigationClass = ref('navigation');
// 隐藏菜单
const menuShow = () => {
  if (isMenuShow) {
    navigationClass.value = 'navigation-hidden';
    isMenuShow = !isMenuShow;

    //改变主组件style
    openMenuStatus = 0;
    isOpen('openMenu', 2);
  }
}
// 打开菜单
const menuShowOpen = () => {
  if (!isMenuShow) {
    navigationClass.value = 'navigation';
    isMenuShow = !isMenuShow;

    //改变主组件style
    isOpen('openMenu', openMenuStatus);
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  inset: 40px 0 40px 20px;
  background: #fff;
  width: 75px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  // transition: 0.5s;
  border-radius: 20px;
}

.navigation-hidden {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: #167269;
  width: 75px;
  height: 75px;
  display: flex;
  border-radius: 50%;
  z-index: 9999;

  .menuNtn {
    color: #ffffff;
    position: absolute;
    left: 12px;
    top: 24px;
    font-size: 20px;
    cursor: pointer;
  }

  ul li {
    font-size: 8px;
    background-color: #ffffff;
    opacity: 0;
    display: none;
  }

  ul li.active {
    display: block;
    opacity: 1;
    list-style: none;
    position: absolute;
    left: 52px;
    width: inherit;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: 1px solid transparent;
    transition: .5s;
    text-align: center;
    color: #ffffff;

    a {
      position: absolute;
      top: 24px;
      left: 7px;
      color: #2f323f;
      font-size: 21px;
    }
  }

  .menuToggle {
    transform: scale(0);
    transition: .4s;
  }

  .menuShower {
    transform: scale(0);
    transition: .4s;
  }
}

.menuShower {
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 24px;
  border-top: 1px solid rgba(0, 0, 0, .25);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.menuShower::before {
  content: '';
  position: absolute;
  width: 30px;
  height: 2px;
  background: #333;
  transform: rotate(135deg);
  transition: .5s;
}

.menuShower::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 2px;
  background: #333;
  transform: rotate(45deg);
  // box-shadow: 0 -8px 0 #333; //分身
  transition: .5s;
}


.menuToggle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 0 24px;
  border-bottom: 1px solid rgba(0, 0, 0, .25);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.menuToggle::before {
  content: '';
  position: absolute;
  width: 30px;
  height: 2px;
  background: #333;
  transform: translateY(-8px);
  transition: .5s;
}

.menuToggle::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 2px;
  background: #333;
  transform: translateY(8px);
  box-shadow: 0 -8px 0 #333;
  transition: .5s;
}

// 顶部缩放 旋转元素
.navigation.active .menuToggle::before {
  transform: translateY(0) rotate(45deg)
}

// 顶部缩放 旋转元素
.navigation.active .menuToggle::after {
  transform: translateY(0) rotate(-45deg);
  box-shadow: 0 0 0 #333;
}

.navigation.active {
  width: 148px;
}

.navigation ul {
  display: flex;
  flex-direction: column;
  width: inherit;
}

.navigation ul li {
  list-style: none;
  position: relative;
  // left: -40px;
  width: inherit;
  height: 76px;
  border-radius: 12px;
  border: 8px solid transparent;
  transition: .5s;
}

.navigation ul li.active {
  transform: translateX(30px);
  background: #2f323f;
}


.navigation ul li::before {
  content: '';
  position: absolute;
  top: -28px;
  right: -10px;
  width: 20px;
  height: 20px;
  background: transparent;
  border-bottom-right-radius: 10px;
  box-shadow: 6px 5px 0 5px #2f323f;
  transform: scale(0);
  transform-origin: bottom right;
  transition: .5s;
}

.navigation ul li.active::before {
  right: 22px;
  transform: scale(.4);
}

.navigation ul li::after {
  content: '';
  position: absolute;
  bottom: -12px;
  right: -10px;
  width: 8px;
  height: 8px;
  background: transparent;
  border-top-right-radius: 10px;
  box-shadow: 6px -5px 0 5px #2f323f;
  transform: scale(0);
  transform-origin: bottom right;
  transition: .5s;
}

.navigation ul li.active::after {
  right: 22px;
  transform: scale(.5);
}

.navigation ul li a {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  text-align: center;
  text-decoration: none;
  z-index: 1000;
}

.navigation ul li a .icon {
  color: #2f323f;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  height: 60px;
  border-radius: 10px;
  font-size: 1.75em;
  line-height: 60px;
  border: 6px solid transparent;
  transition: .5s;
}

a:hover {
  background-color: #ffffff00;
}

.navigation ul li a .icon:hover {
  color: #ffffff;
  background-color: #f44336;
  border-radius: 10px;
}

.navigation ul li a .icon i {
  font-size: 24px;
}

.navigation ul li.active a .icon {
  color: #fff;
  background: var(--clr);
}


.navigation ul li a .text {
  position: relative;
  padding: 0 15px;
  color: #333;
  display: flex;
  align-items: center;
  height: 60px;
  opacity: 0;
  visibility: hidden;
  transition: .5s;
  user-select: none;
}

.navigation ul li.active a {
  margin-left: 1px;
}

.navigation.active ul li a .text {
  visibility: visible;
  opacity: 1;
  white-space: nowrap;
  margin-left: -10px;
}

.navigation ul li.active a .text {
  color: #fff;
  white-space: nowrap;
  transition: .5s;
  margin-left: -6px;
}

.navigation ul li a .icon::before {
  // content: '';
  position: absolute;
  top: 12px;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--clr);
  filter: blur(8px);
  opacity: 0;
  transition: 0.2s;
}

.navigation ul li.active a .icon::before {
  opacity: .5;
}

.navigation ul li a .icon::after {
  // content: '';
  position: absolute;
  top: 10px;
  left: -62px;
  width: 15px;
  height: 15px;
  background: var(--cIr);
  border: 8px solid #2f323f;
  border-radius: 50%;
}
</style>