<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

const setIdP = ref(route.params.setId);
const setIdQ = ref(route.query.setId);

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
    <div class="px-4 py-4">
      <nut-cell-group title="接收的路径参数">
        <nut-input v-model="setIdP" readonly />
      </nut-cell-group>
      <nut-cell-group title="接收的查询参数">
        <nut-input v-model="setIdQ" readonly />
      </nut-cell-group>
    </div>
  </div>
</template>

<style scoped></style>
