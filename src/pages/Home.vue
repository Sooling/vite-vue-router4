<script setup>
import { ref } from 'vue';
</script>
<script>
export default {};
</script>

<template>
  <div class="fit-height flex flex-col">
    <router-view name="HomeHeader"></router-view>
    <router-view name="HomeContent"></router-view>
    <router-view name="HomeFooter"></router-view>
  </div>
</template>

<style scoped></style>
