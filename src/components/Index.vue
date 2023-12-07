<template>
    <div class="main-box">
        <p>
            <span>Hello,</span>
            <span>world!</span>
            <span>This is</span>
            <span>a test.</span>
        </p>

        <button @click="test">test</button>
    </div>
</template>
<script setup lang="ts">

import request from '../http/index';

const test = () => {

    let param = {
        "username": "18767136923",
        "password": "123456"
    }

    request.post('/test/demo1', param).then(res => {
        console.log(res)
    })
}

</script>
<style lang="scss" scoped>
.main-box {
    height: 1800px;
    color: rgb(35, 36, 37);
}

p {
    font-size: 24px;
    color: #292525;
}

p span {
    opacity: 0;
}

p span:nth-child(1) {
    animation: fadeIn 1s ease forwards 0.5s;
}

p span:nth-child(2) {
    animation: fadeIn 1s ease forwards 1s;
}

p span:nth-child(3) {
    animation: fadeIn 1s ease forwards 1.5s;
}

p span:nth-child(4) {
    animation: fadeIn 1s ease forwards 2s;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>