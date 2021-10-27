<template>
  <h1>login</h1>
  <div class="page login">
    <input type="text" v-model="name" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const name = ref('');
</script>

<style lang="scss" scoped></style>
