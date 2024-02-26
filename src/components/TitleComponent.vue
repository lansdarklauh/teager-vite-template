<script setup lang="ts">
  import { example } from '@/services/api'
  import { ref, onMounted } from 'vue'

  defineProps<{
    msg: string
  }>()

  const address = ref({})

  onMounted(async () => {
    const res = await example()
    if (res.data && Object.keys(res.data).length) {
      address.value = res.data
    }
  })
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2 class="blue">基于Vue3+Vite+Pinia+Vue Router+Vant4+ElementPlus构建的开发模板</h2>
    <h2 class="blue">可用于开发pc端与移动端的web应用（也可开发小程序与app）</h2>
    <h3 class="gold" v-for="(value, key) in address" :key="key">
      {{ key + ': ' }}
      <a class="address" :href="value" target="_blank">{{ value }}</a>
    </h3>
  </div>
</template>

<style scoped lang="scss">
  .green,
  h2,
  h3 {
    text-align: center;
  }
  .green {
    color: $mainGreen;
  }
  .blue {
    color: $mainBlue;
  }
  .gold {
    color: #ffd87f;
  }
  .address {
    text-decoration: none;
    color: #ffd87f;
  }
</style>
