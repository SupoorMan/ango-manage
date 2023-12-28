<template>
  <RouterView></RouterView>
</template>

<script>
import autofit from "autofit.js";

export default {
  name: "App",
  components: {

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
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
