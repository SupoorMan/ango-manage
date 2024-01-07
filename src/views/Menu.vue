<template>
  <div class="context-menu">
    <div class="left-box">
      <div class="left-item">
        <AngoInput :label="'🥒菜单名称'" :label-width="80"></AngoInput>
        <AngoButton :bname="'➕'" :bcolor="'#c49216'"></AngoButton>
        <AngoButton :bname="'✅'" :bcolor="'#c49216'"></AngoButton>

        <div class="menu-lv-1">
          <AngoInput :label="'🥒🥒菜单名称'" :label-width="94"></AngoInput>
          <AngoInput :label="'🥒🥒菜单路由'" :label-width="94"></AngoInput>

          <span class="menu-lv-1-btn">
            <AngoButton :bname="'➕'" :bcolor="'#c49216'"></AngoButton>
            <AngoButton :bname="'✅'" :bcolor="'#c49216'"></AngoButton>
            <AngoButton :bname="'❎'" :bcolor="'#c49216'"></AngoButton>
          </span>

          <div class="menu-lv-2">
            <AngoInput :label="'🥒🥒🥒菜单名称'" :label-width="112"></AngoInput>
            <AngoInput :label="'🥒🥒🥒菜单路由'" :label-width="112"></AngoInput>

            <span class="menu-lv-2-btn">
              <AngoButton :bname="'✅'" :bcolor="'#c49216'"></AngoButton>
              <AngoButton :bname="'❎'" :bcolor="'#c49216'"></AngoButton>
            </span>
          </div>
        </div>

        <hr />

        <div class="new-menu">
          <span>------------------------------------------------</span>
          <AngoButton
            :bname="'➕新增一级菜单'"
            :bcolor="'#c49216'"
          ></AngoButton>
          <span>------------------------------------------------</span>
        </div>
      </div>
    </div>

    <div class="midden-line">1</div>

    <div class="right-box">
      <div class="demo" draggable="true">123</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import AngoInput from "@/components/AngoInput.vue";
import AngoButton from "@/components/AngoButton.vue";

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
    background-color: #1e1e1e;
    flex: 16;
    padding: 10px;

    .left-item {
      border: 1px solid #454545;

      hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #454545;
      }

      .menu-lv-1 {
        margin-top: 10px;
        padding-left: 20px;

        .menu-lv-1-btn {
          float: right;
        }

        .menu-lv-2 {
          padding-left: 20px;
          margin-top: 10px;

          .menu-lv-2-btn {
            float: right;
          }
        }
      }

      .new-menu {
        text-align: center;
        margin-bottom: 10px;

        span {
          color: #454545;
          margin-left: 8px;
          margin-right: 10px;
        }
      }
    }
  }

  .midden-line {
    background-color: brown;
    flex: 1;
  }

  .right-box {
    background-color: rgb(226, 187, 159);
    flex: 16;

    .demo {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background-color: chocolate;
      line-height: 50px;
      text-align: center;
      user-select: none;
      margin-top: 20px;
      margin-left: 20px;
    }
  }
}
</style>
