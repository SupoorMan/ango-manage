<template>
  <div class="context-shop">
    <div class="header">
      <span v-for="item in head" :key="item.id" v-show="item.show">
        <AngoInput :label="item.label"></AngoInput>
      </span>

      <AngoButton :bname="'新增'" :bcolor="'#1E1E1E'" class="add-btn" @click="openEdit = true"></AngoButton>
      <AngoButton :bname="'查询'" :bcolor="'#1E1E1E'" class="search-btn"></AngoButton>
    </div>

    <div class="body">
      <PageList></PageList>
    </div>


    <div class="right-box" v-if="openEdit">
      <div class="title">水果店操作</div>

      <div class="form">
        <AngoInput :label="'名称'"></AngoInput>
        <AngoInput :label="'地址'"></AngoInput>
        <AngoInput :label="'图片'"></AngoInput>
        <AngoInput :label="'详情说明'"></AngoInput>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';
import PageList from '@/components/PageList.vue';
import AngoInput from '@/components/AngoInput.vue';
import AngoButton from '@/components/AngoButton.vue';

const openEdit = ref(false)

const head = [{
  id: 0,
  field: "id",
  label: "ID",
  width: -999,
  param: 'n',
  type: 'String',
  show: false
},
{
  id: 1,
  field: "name",
  label: "名称",
  width: -999,
  param: 'a',
  type: 'String',
  show: true
}, {
  id: 2,
  field: "phone",
  label: "手机",
  width: -999,
  param: 'a',
  type: 'String',
  show: true
}, {
  id: 3,
  field: "address",
  label: "地址",
  width: -999,
  param: 'n',
  type: 'String',
  show: false
}, {
  id: 4,
  field: "deletable",
  label: "删除",
  width: -999,
  param: 'n',
  type: 'String',
  show: true
}, {
  id: 999,
  field: null,
  label: "操作",
  width: -999,
  param: 'n',
  type: 'String',
  show: false
}
];

const list = [{
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
},]

const param = ref({})

</script>
  
<style lang="scss" scoped>
.context-shop {
  padding-top: 8px;
  padding-left: 8px;
  padding-right: 8px;

  .header {
    background-color: #2d2d2d;
    height: auto;
    padding: 8px;

    .add-btn {
      position: absolute;
      right: 90px;
      // background-color: #FFD700;
    }

    .search-btn {
      position: absolute;
      right: 10px;
      // background-color: #FFD700;
    }
  }

  .body {
    // background-color: wheat;
  }

  .right-box {
    background-color: antiquewhite;
    color: #2d2d2d;
    position: fixed;
    right: 0px;
    top: 0px;
    width: 40%;
    height: 100%;
    transition: 2s;
    padding: 10px;
  }
}
</style>
  