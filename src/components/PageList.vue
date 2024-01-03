<template>
  <div class="context-page-list">
    <table border="1" cellspacing="0" cellpadding="50" class="table-box">
      <tr>
        <th v-for="item in tableHead" :key="item.id">{{ item.name }}</th>
      </tr>
      <tr v-for="item in tableList" :key="item.id">
        <td v-for="n in item" v-show="item.id !== n">{{ n }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tableHead = [
  {
    id: 1,
    name: "名称",
  },
  {
    id: 2,
    name: "手机",
  },
  {
    id: 3,
    name: "地址",
  },
  {
    id: 4,
    name: "删除",
  },
];
const tableList = [
  {
    id: 1,
    name: "dsad",
    phone: "12312312313",
    address: "asdsadsada",
    delete: false,
  },
  {
    id: 2,
    name: "fffff",
    phone: "33244325",
    address: "jjjjjjj",
    delete: true,
  },
];
</script>

<style lang="scss" scoped>
.context-page-list {
  margin-top: 10px;

  .table-box {
    width: 100%;
    color: #dcdcdc;
    background-color: #2d2d2d;

    th{
        text-align: center;
    }
  }
}
</style>
