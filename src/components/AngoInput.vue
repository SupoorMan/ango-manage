<template>
  <span class="context-ango-input">
    <input
      type="text"
      class="input-label"
      :value="props.label"
      :style="
        'width:' + props.labelWidth + 'px;background-color:' + props.labelColor
      "
      readonly
    />
    <input type="text" class="input-value" />
  </span>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  //接收 父传子
  label: String,
  labelWidth: Number,
  labelColor: String,
});
</script>

<style lang="scss" scoped>
.context-ango-input {
  margin-bottom: 4px;
  margin-right: 4px;
  line-height: 24px;
  margin-right: 10px;

  input:focus {
    outline: none;
    border: none;
  }

  .input-label {
    width: 40px;
    text-align: center;
    border-radius: 4px 0px 0px 4px;
    cursor: default;
    line-height: 24px;
    background-color: #2d2d2d;
    color: #dcdcdc;
    outline: none;
    border: none;
  }

  .input-value {
    background-color: aliceblue;
    outline: none;
    border: none;
    border-radius: 0px 4px 4px 0px;
    line-height: 24px;
    padding-left: 2px;
  }
}
</style>
