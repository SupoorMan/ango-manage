<template>
  <div class="context-menu">
    <div class="left-box">
      <AngoInput :label="'名称'"></AngoInput>
    </div>
    <div class="midden-line">1</div>
    <div class="right-box">
      <draggable class="draggable" :list="list" item-key="id" ghost-class="ghost" group="list">
        <template #item="{ element  }">
          <div class="node1">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import AngoInput from "@/components/AngoInput.vue";
import draggable from "vuedraggable";

const list = [
  { name: "John", id: 0 },
  { name: "Joao", id: 1 },
  { name: "Jean", id: 2 },
];
</script>

<style lang="scss" scoped>
.context-menu {
  background-color: #c2c7cb;
  display: flex;
  height: 100%;

  .left-box {
    background-color: aquamarine;
    flex: 16;
  }

  .midden-line {
    background-color: brown;
    flex: 1;
  }

  .right-box {
    background-color: rgb(226, 187, 159);
    flex: 16;

    .draggable {
      height: 100%;
      background-color: #c2c7cb;

      .node1 {
        color: black;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        line-height: 40px;
        text-align: center;
      }
    }
  }
}
</style>
