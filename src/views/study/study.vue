<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <h1>vue-router</h1>
  <ul>
    <li>
      <router-link :to="{ name: 'home' }">首页</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'login' }">Login</router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
