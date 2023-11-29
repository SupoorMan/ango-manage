
<script setup lang="ts">
</script>

<template>
    <div class="main-box">
        <p>
            <span>Hello,</span>
            <span>world!</span>
            <span>This is</span>
            <span>a test.</span>
        </p>

        <!-- <el-affix :offset="120">
            <el-button type="primary">Offset top 120px</el-button>
        </el-affix> -->
    </div>
</template>

<style scoped>
.main-box{
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
}</style>