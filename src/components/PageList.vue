<template>
  <div class="context-page-list">
    <table class="table-box">
      <tr>
        <th v-for="item in tableHead" :key="item.id" :style="item.width !== -999 ? 'width:' + item.width + 'px' : ''">
          {{ item.name }}
        </th>
      </tr>
      <tr v-for="item in tableList" :key="item.id">
        <td v-for="n in item" v-show="item.id !== n">{{ n }}</td>

        <td class="td-option">
          <AngoButton :bname="'编辑'" :bcolor="'#1E1E1E'"></AngoButton>
          <AngoButton :bname="'删除'" :bcolor="'#c49216'"></AngoButton>
        </td>
      </tr>
    </table>

  </div>
</template>

<script setup>
import { ref } from "vue";
import AngoButton from "./AngoButton.vue";

const tableHead = [
  {
    id: 1,
    name: "名称",
    width: -999
  }, {
    id: 2,
    name: "手机",
    width: -999
  }, {
    id: 3,
    name: "地址",
    width: -999
  }, {
    id: 4,
    name: "删除",
    width: -999
  }, {
    id: 999,
    name: "操作",
    width: -999
  }
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


    th {
      text-align: center;
      height: 30px;
      border: 1px solid #1E1E1E;
    }

    td {
      padding-left: 8px;
      height: 30px;
      border: 1px solid #1E1E1E;
    }

    .td-option {
      width: 170px;
      text-align: center;
      padding-left: 0px;
    }
  }
}
</style>
