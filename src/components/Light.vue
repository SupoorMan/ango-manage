<script setup lang="ts">
</script>

<template>
    <div className="light-column"></div>
    <div className="light-column-yellow"></div>
    <div className="light-column-red"></div>
    <div className="light-column-orange"></div>
    <div className="light-column-green"></div>
    <div className="light-column-white"></div>
    <div className="light-column-pink"></div>
    <div className="light-column-grey"></div>
    <div className="light-column-black"></div>
    <div className="light-column-orange2"></div>
    <div className="light-column0"></div>
    <div className="light-column1"></div>
    <div className="light-column2"></div>
    <div className="light-column3"></div>
</template>

<style scoped>
.light-column-pink {
    background-color: rgb(242, 44, 179);
    width: .1vw;
    height: .1vh;
    position: fixed;
    left: 6%;
    -webkit-box-shadow: 0px 0px 32px 8px rgba(242, 44, 179, 0.8);
    -moz-box-shadow: 0px 0px 32px 8px rgba(242, 44, 179, 0.8);
    box-shadow: 0px 0px 8px 2px rgba(242, 44, 179, 0.8);
    animation: down-column 31.3s linear infinite;
}

.light-column-white {
    background-color: rgb(255, 255, 255);
    width: .1vw;
    height: .1vh;
    position: fixed;
    left: 8%;
    -webkit-box-shadow: 0px 0px 32px 8px rgba(255, 255, 255, 0.8);
    -moz-box-shadow: 0px 0px 32px 8px rgba(255, 255, 255, 0.8);
    box-shadow: 0px 0px 8px 2px rgba(255, 255, 255, 0.8);
    animation: down-column 53.7s linear infinite;
}


.light-column {
    background-color: aqua;
    width: .1vw;
    height: .1vh;
    position: fixed;
    left: 10%;
    -webkit-box-shadow: 0px 0px 10px 8px rgba(45, 255, 196, 0.7);
    -moz-box-shadow: 0px 0px 10px 8px rgba(45, 255, 196, 0.7);
    box-shadow: 0px 0px 8px 2px rgba(45, 255, 196, 0.7);
    animation: down-column 27.1s linear infinite;
}

.light-column-green {
    background-color: rgb(102, 255, 0);
    width: .1vw;
    height: .1vh;
    position: fixed;
    left: 14%;
    -webkit-box-shadow: 0px 0px 32px 8px rgba(102, 255, 0, 0.5);
    -moz-box-shadow: 0px 0px 32px 8px rgba(102, 255, 0, 0.5);
    box-shadow: 0px 0px 8px 2px rgba(102, 255, 0, 0.8);
    animation: down-column 38.6s linear infinite;
}

.light-column-yellow {
    background-color: rgb(255, 255, 0);
    width: .1vw;
    height: .1vh;
    position: fixed;
    left: 16%;
    -webkit-box-shadow: 0px 0px 32px 8px rgba(227, 255, 46, 0.9);
    -moz-box-shadow: 0px 0px 32px 8px rgba(227, 255, 46, 0.9);
    box-shadow: 0px 0px 8px 2px rgba(227, 255, 46, 0.9);
    animation: down-column 32.4s linear infinite;
}


.light-column-black {
    background-color: rgb(0, 0, 0);
    width: .1vw;
    height: .1vh;
    position: fixed;
    left: 18%;
    -webkit-box-shadow: 0px 0px 32px 8px rgba(0, 0, 0);
    -moz-box-shadow: 0px 0px 32px 8px rgba(0, 0, 0);
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0);
    animation: down-column 59.3s linear infinite;
}

.light-column-orange2 {
    background-color: rgb(224, 156, 20);
    width: .1vw;
    height: .1vh;
    position: fixed;
    left: 20%;
    -webkit-box-shadow: 0px 0px 32px 8px rgba(224, 156, 20);
    -moz-box-shadow: 0px 0px 32px 8px rgba(224, 156, 20);
    box-shadow: 0px 0px 8px 2px rgba(224, 156, 20);
    animation: down-column 26.3s linear infinite;
}

.light-column-orange {
    background-color: rgb(255, 115, 0);
    width: .1vw;
    height: .1vh;
    position: fixed;
    left: 22%;
    -webkit-box-shadow: 0px 0px 32px 8px rgba(255, 115, 0, 0.8);
    -moz-box-shadow: 0px 0px 32px 8px rgba(255, 115, 0, 0.8);
    box-shadow: 0px 0px 8px 2px rgba(255, 115, 0, 0.8);
    animation: down-column 14.3s linear infinite;
}

.light-column-grey {
    background-color: rgb(105, 104, 105);
    width: .1vw;
    height: .1vh;
    position: fixed;
    left: 24%;
    -webkit-box-shadow: 0px 0px 32px 8px rgba(105, 104, 105);
    -moz-box-shadow: 0px 0px 32px 8px rgba(105, 104, 105);
    box-shadow: 0px 0px 8px 2px rgba(105, 104, 105);
    animation: down-column 19.3s linear infinite;
}

.light-column-red {
    background-color: rgb(255, 0, 0);
    width: .1vw;
    height: .1vh;
    position: fixed;
    left: 26%;
    -webkit-box-shadow: 0px 0px 32px 8px rgba(255, 0, 0, 0.8);
    -moz-box-shadow: 0px 0px 32px 8px rgba(255, 0, 0, 0.8);
    box-shadow: 0px 0px 8px 2px rgba(255, 0, 0, 0.8);
    animation: down-column 44.1s linear infinite;
}

.light-column0 {
    background-color: rgb(130, 91, 91);
    width: .1vw;
    height: .1vh;
    position: fixed;
    left: 28%;
    -webkit-box-shadow: 0px 0px 32px 8px rgba(130, 91, 91, 0.8);
    -moz-box-shadow: 0px 0px 32px 8px rgba(130, 91, 91, 0.8);
    box-shadow: 0px 0px 8px 2px rgba(130, 91, 91, 0.8);
    animation: down-column 16.3s linear infinite;
}

.light-column1 {
    background-color: rgb(244, 242, 115);
    width: .1vw;
    height: .1vh;
    position: fixed;
    left: 31%;
    -webkit-box-shadow: 0px 0px 32px 8px rgba(244, 242, 115, 0.8);
    -moz-box-shadow: 0px 0px 32px 8px rgba(244, 242, 115, 0.8);
    box-shadow: 0px 0px 8px 2px rgba(244, 242, 115, 0.8);
    animation: down-column 22.3s linear infinite;
}

.light-column2 {
    background-color: rgb(8, 51, 190);
    width: .1vw;
    height: .1vh;
    position: fixed;
    left: 33%;
    -webkit-box-shadow: 0px 0px 32px 8px rgba(8, 51, 190, 0.8);
    -moz-box-shadow: 0px 0px 32px 8px rgba(8, 51, 190, 0.8);
    box-shadow: 0px 0px 8px 4px rgba(8, 51, 190, 0.8);
    animation: down-column 61.3s linear infinite;
}

.light-column2 {
    background-color: rgb(174, 17, 247);
    width: .1vw;
    height: .1vh;
    position: fixed;
    left: 38%;
    -webkit-box-shadow: 0px 0px 32px 8px rgba(174, 17, 247, 0.8);
    -moz-box-shadow: 0px 0px 32px 8px rgba(174, 17, 247, 0.8);
    box-shadow: 0px 0px 8px 2px rgba(174, 17, 247, 0.8);
    animation: down-column 47.13s linear infinite;
}

@keyframes down-column {
    0% {
        top: 0%;
    }

    100% {
        top: 110%;
    }
}
</style>