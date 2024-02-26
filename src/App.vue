<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import Title from './components/TitleComponent.vue'
</script>

<template>
  <div class="app-content">
    <header>
      <div class="wrapper">
        <el-image class="icon-box" style="width: 20rem; height: 20rem" src="icon.svg" fit />
        <Title msg="Teager Vite Template" />

        <nav>
          <RouterLink to="/"><span class="link-text">ElementPlus</span></RouterLink>
          <RouterLink to="/Mobile"><span class="link-text">Vant4</span></RouterLink>
        </nav>
      </div>
    </header>

    <RouterView class="main" />
  </div>
</template>

<style scoped lang="scss">
  .app-content {
    height: 100vh;
  }
  header {
    line-height: 1.5;
    max-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    padding: px2vh(50) 0 px2vh(24);
    border-radius: px2vh(20);
    background-color: #a2d5ff;
    nav {
      width: 100%;
      display: flex;
      justify-content: space-around;
      font-size: 16px;
      text-align: center;
      margin-top: px2vw(24);
      a {
        text-decoration: none;
      }
      .link-text {
        font-size: px2vhMobile(24);
        font-weight: 600;
        color: $darkBlue;
      }
    }
    .icon-box {
      display: block;
      margin: 0 auto;
    }
    @media screen and (max-width: 600px) {
      font-size: px2vwMobile(16);
    }
  }
  .main {
    flex-grow: 1;
  }
</style>
