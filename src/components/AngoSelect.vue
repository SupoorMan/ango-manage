<template>
  <div class="context-ango-select">
    <div :class="selectClass" @click="clickItem">
      {{ props.selectName }}
    </div>

    <div class="option" v-if="openOption" @mouseleave="openOption = false">
      <span
        v-for="item in props.selectList"
        :key="item.index"
        @click="setTopMenuPath(item)"
      >
        <div>{{ item.value }}</div>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const openOption = ref(false);
const selectClass = ref("unselect");

const props = defineProps({
  selectName: String,
  selectList: Array,
});

const clickItem = () => {
  openOption.value = true;
  selectClass.value = "select";
};

//getTopMenuPath
const emit = defineEmits({ "get-top-menu-path": String });
const setTopMenuPath = (item) => {
  emit("get-top-menu-path", item);

  openOption.value = false; //可省略
};
</script>

<style lang="scss" scoped>
.context-ango-select {
  cursor: pointer;

  .unselect {
    width: 60px;
    height: 24px;
    background-color: #363c4e;
    user-select: none;
    text-align-last: center;
    line-height: 24px;
    position: absolute;
    top: 12px;
  }

  .select {
    width: 60px;
    height: 24px;
    background-color: #363c4e;
    user-select: none;
    text-align-last: center;
    line-height: 24px;
    position: absolute;
    top: 12px;
    color: #fff;
    border-bottom: 1px solid aliceblue;
  }

  .option {
    color: #fff;
    width: 60px;
    top: 42px;
    position: relative;
    padding-top: 38px;
    text-align-last: center;
    line-height: 30px;
    user-select: none;
    background: linear-gradient(0, #363c4e, rgba(0, 0, 0, 0));
  }
}
</style>
