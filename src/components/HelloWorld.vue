<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Every one need your help. For example:
    </h3>
    <p>
      废品 | 书籍 | 旧车 | 相亲 | 外卖 | 抢票 | 软件 | 接娃 | 拼单 | 种地 | 蔬菜 | 水果
    </p>
    <p>
      硬件 | 电子 | 快递 | 求职 | 陪玩 | 求职 | 陪玩 | 开锁 | 修理 | 看门 | 教育 | 摸奖
    </p>

  </div>
</template>

<style scoped>
h1 {
  font-weight: 600;
  font-size: 2.8rem;
  top: -8px;
}

h3 {
  font-size: 1.2rem;
}

p {
  font-size: 0.1rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
  margin-bottom: 1.5rem;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
