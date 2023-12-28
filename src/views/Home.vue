<template>
    <TopMenu></TopMenu>

    <div class="context">
        <LeftMenu></LeftMenu>

        <div class="body">body-box</div>
    </div>
</template>
  
<script>
import TopMenu from "@/components/TopMenu.vue";
import LeftMenu from "@/components/LeftMenu.vue";

export default {
    name: 'HelloWorld',
    components: {
        TopMenu,
        LeftMenu
    },
    props: {
        msg: String
    }
}
</script>
  
<style lang="scss" scoped>
.context {
    background-color: aquamarine;
    display: flex;
    align-items: center;
}
</style>