<script setup lang="ts">
  import { ref } from 'vue'

  const text = ref('这里是手机移动端页面，使用的Vant4组件库')
  const keywords = ref(['手机移动端', 'Vant4'])
  const replacePage = (param) => {
    if (param === 'element-plus') {
      window.location.replace('https://vant-contrib.gitee.io/vant/#/zh-CN/')
    }
  }
</script>

<template>
  <div class="Mobile-content">
    <h1 class="title">
      <van-highlight class="mx-1" :keywords="keywords" :source-string="text"></van-highlight>
    </h1>
    <div class="button-box">
      <van-button type="primary" @click="replacePage('element-plus')">Vant4官网</van-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .Mobile-content {
    max-width: 1200px;
    margin: px2vh(10) auto 0;
    padding: px2vh(24) 0 0;
    background-color: #8febcc;
    border-radius: px2vh(20);
    .title {
      text-align: center;
      .mx-1 {
        font-size: px2vwMobile(16);
      }
    }
    .button-box {
      width: 100%;
      display: flex;
      justify-content: space-around;
      padding: 0 0 px2vhMobile(24);
    }
  }
</style>
