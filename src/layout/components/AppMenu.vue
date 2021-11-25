<template>
  <el-menu
    active-text-color="#3585f0"
    background-color="#304156"
    class="aside-menu-vertical"
    default-active="2"
    text-color="#fff"
    router
  >
    <el-menu-item index="/">
      <el-icon><Menu /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
// import { ref } from 'vue';
</script>

<style lang="scss" scoped></style>
