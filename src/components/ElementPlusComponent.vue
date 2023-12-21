<script setup lang="ts">
  const replacePage = (param) => {
    if (param === 'element-plus') {
      window.location.replace('https://element-plus.org/zh-CN/')
    }
  }
</script>

<template>
  <h1 class="title">
    <el-text class="mx-1" type="primary">这里是PC端与大屏页面，使用的ElementPlus组件库</el-text>
  </h1>
  <div class="button-box">
    <el-button type="primary" @click="replacePage('element-plus')">ElementPlus官网</el-button>
  </div>
</template>

<style scoped lang="scss">
  .title {
    text-align: center;
    .mx-1 {
      font-size: px2vw(32);
    }
  }
  .button-box {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
