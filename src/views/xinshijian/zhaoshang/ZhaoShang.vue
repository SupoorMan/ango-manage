<template>
  <div class="context-zhaoshang">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import router from "@/router";
import { onMounted, ref } from "vue";

onMounted(() => {
  let lm = localStorage.getItem("lm");
  if (lm) {
    let item = JSON.parse(lm);
    router.push(item.path);
  }
});
</script>

<style lang="scss" scoped>
.context-zhaoshang {
}
</style>
