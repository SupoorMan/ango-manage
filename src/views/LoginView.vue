<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Light from '../components/Light.vue'
</script>

<template>
  <div class="login-view-box">
    <Light></Light>
    <el-row>
      <el-col :span="4">
        <div class="grid-content ep-bg-purple">
          <img alt="Ango logo" class="logo" src="@/assets/ango1.png" width="145" height="68" />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content ep-bg-purple-light">
          <div class="wrapper">
            <HelloWorld msg="Are you free?" />
            <nav>
              <RouterLink to="/auth">登录</RouterLink>
              <RouterLink to="/register">注册</RouterLink>
              <RouterLink to="/test">测试</RouterLink>
            </nav>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content ep-bg-purple">
          <RouterView />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.el-row {
  text-align: -webkit-center;
}

.login-view-box {
  position: absolute;
  top: 27%;
  width: 100%;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin-top: 1rem;
  pointer-events: none;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #f8f8f8;
  font-size: 2rem;
  transition: 0.4s;
  text-align: center;
  text-shadow: 0 0 8px #00bd7e, 0 0 6px #ffffff, 0 0 8px #00bd7e, 0 0 5px rgb(66, 252, 42);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid #00bd7e;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
