<template>
  <h1>login</h1>
  <div class="page login">
    <input type="text" v-model="name" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getLoginInfo } from '@/api/common';
// ! 加载类型 import type
import type { ILoginInfo } from '@/api/types/common';
import { onMounted } from '@vue/runtime-core';

const name = ref('');
const list = ref<ILoginInfo['slide']>([]);

onMounted(() => {
  getLoginInfo().then((data) => {
    console.log('login', data);
    list.value = data.slide;
  });
});
</script>

<style lang="scss" scoped></style>
