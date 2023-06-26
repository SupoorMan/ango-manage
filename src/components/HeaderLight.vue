<template>
    <div>
        <div class="light"></div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.light {
    content: '';
    position: absolute;
    top: 0.3rem;
    width: .1rem;
    height: 3rem;
    background-color: rgb(0, 0, 0);
    animation: moveLight 12s linear 1s infinite alternate none;
}

@keyframes moveLight {
    0% {
        left: 0%;
        opacity: 0;
    }

    100% {
        left: 99%;
        opacity: 1;
    }
}
</style>