<template>
  <el-container>
    <el-aside width="200px">
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header>Header {{ name }}</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { onMounted } from '@vue/runtime-core';
import AppMenu from './components/AppMenu.vue';

const name = ref('AppLayout');

onMounted(() => {
  console.log('name :', name.value);
});
</script>

<style lang="scss" scoped></style>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
}

.el-aside {
  background-color: #304156;
  color: var(--el-text-color-primary);
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
}

.el-container {
  height: 100vh;
}
</style>
