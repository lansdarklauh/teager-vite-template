<script setup lang="ts">
  defineProps<{
    msg: string
  }>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>Vue3+Vite+Pinia+Vue Router+Vant4+ElementPlus</h3>
  </div>
</template>

<style scoped lang="scss">
  .green,
  h3 {
    text-align: center;
  }
</style>
