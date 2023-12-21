<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import Title from './components/TitleComponent.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Title msg="Teager Vite Template" />

      <nav>
        <RouterLink to="/">ElementPlus</RouterLink>
        <RouterLink to="/Mobile">Vant4</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
  header {
    line-height: 1.5;
    max-height: 100vh;
    nav {
      width: 100%;
      display: flex;
      justify-content: space-around;
      font-size: 16px;
      text-align: center;
      margin-top: px2vw(24);
    }
    @media screen and (max-width: 600px) {
      font-size: px2vwMobile(16);
    }
  }
</style>
