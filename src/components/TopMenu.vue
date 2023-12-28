<template>
  <div class="context-top-menu">
    <div class="logo">码仔</div>
    <div class="menu">菜单</div>

    <AngoSelect class="ango-select"></AngoSelect>
  </div>
</template>
  
<script>
import AngoSelect from '@/components/AngoSelect.vue'

export default {
  name: 'TopMenu',
  props: {
    msg: String
  },
  components:{
    AngoSelect
  }
}
</script>
  
<style lang="scss" scoped>
.context-top-menu {
  height: 48px;
  padding-left: 20px;
  color: #dcdcdc;
  background-color: #1E1E1E;
  display: flex;
  align-items: center;

  .logo {
    color: #FFD700;
    flex: 1;
  }

  .menu {
    color: #929292;
    flex: 4;
  }

  .ango-select{
    flex: 1;
  }
}
</style>
  