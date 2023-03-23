<script setup>
import { ref } from 'vue';
</script>
<script>
export default {};
</script>

<template>
  <div class="bg-yellow-200 flex-none h-10 text-xs">
    HomeHeader page（命名视图）
    <div class="flex justify-between">
      <router-view name="HomeHeaderLeft"></router-view>
      <router-view name="HomeHeaderRight"></router-view>
    </div>
  </div>
</template>

<style scoped></style>
