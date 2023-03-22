<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const back = () => {
  router.go(-1);
};
</script>
<script>
import { Left } from '@nutui/icons-vue';
export default {
  components: {
    Left,
  },
};
</script>

<template>
  <div class="bg-gray-50 fixed left-0 top-0 h-screen w-screen z-over-tabbar">
    <nut-navbar @on-click-back="back" left-show title="设置"> </nut-navbar>
  </div>
</template>

<style scoped></style>
