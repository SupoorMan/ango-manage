<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import autofit from "autofit.js";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted: () => {
    autofit.init(
      {
        dh: 1080,
        dw: 1920,
        el: "#app",
        resize: true,
      },
      false
    );
  },
  methods: {
    onBeforeUnmount: () => {
      //如果是单个页面做自适应，需要在页面销毁后删除插件，调用此函数，不然会影响其他页面
      autofit.off();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
