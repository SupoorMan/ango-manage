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
import { ref, watch } from "vue";

const openOption = ref(false);
const selectClass = ref("unselect");

const props = defineProps({
  selectName: String,
  selectList: Array,
  selected: Boolean,
});

watch(props, (n, o) => {
  if (props.selected) {
    selectClass.value = "select";
  }
});

const clickItem = () => {
  openOption.value = true;
  selectClass.value = "select";
};

//getTopMenuPath
const emit = defineEmits({ "get-top-menu": Object });
const setTopMenuPath = (item) => {
  let tm = localStorage.getItem("tm");
  if (tm) {
    tm = JSON.parse(tm);
    if (item.path === tm.path) {
      openOption.value = false;
      return;
    }
  }

  emit("get-top-menu", item);
  openOption.value = false; //可省略
};
</script>

<style lang="scss" scoped>
.context-ango-select {
  cursor: pointer;

  .unselect {
    width: 60px;
    height: 24px;
    // background-color: #363c4e00;
    user-select: none;
    text-align-last: center;
    line-height: 24px;
    position: absolute;
    top: 12px;
  }

  .select {
    width: 60px;
    height: 24px;
    // background-color: #363c4e00;
    user-select: none;
    text-align-last: center;
    line-height: 24px;
    position: absolute;
    top: 12px;
    color: #dcdcdc;
    border-bottom: 1px solid #ffd700;
  }

  .option {
    color: #dcdcdc;
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
