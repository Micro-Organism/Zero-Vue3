<!--
 * @Author: Micro-Organism
 * @Date: 2024/8/27 09:35
 * @FilePath: src\App.vue
 * @Email: coolrabbit1993@gmail.com
 * @Description: 程序入口
-->
<template>
<!--  <div>-->
<!--    <a href="https://vitejs.dev" target="_blank">-->
<!--      <img src="/vite.svg" class="logo" alt="Vite logo" />-->
<!--    </a>-->
<!--    <a href="https://vuejs.org/" target="_blank">-->
<!--      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />-->
<!--    </a>-->
<!--  </div>-->
<!--  <HelloWorld msg="Vite + Vue" />-->
  <div>
    <overview />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/views/zero/HelloWorld.vue';
import Overview from '@/views/element/basic/Overview.vue';
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
