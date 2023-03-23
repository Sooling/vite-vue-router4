<script setup>
import { ref } from 'vue';
const value = ref('');
</script>
<script>
export default {};
</script>

<template>
  <div class="px-4 py-4 box-border fit-height bg-gray-50">
    <nut-input v-model="value" placeholder="请输入文本" />
  </div>
</template>

<style scoped></style>
