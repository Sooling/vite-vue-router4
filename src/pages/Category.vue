<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const showSongPage = (songId) => {
  router.push({ path: `/Category/Song/${songId}` });
};
showSongPage('01');
</script>

<script>
// import { defineComponent } from 'vue';

// export default defineComponent({
//   // 在渲染该组件的对应路由被验证前调用
//   // 如果传入第3个参数next，则next必须调用
//   beforeRouteEnter(to, from, next) {
//     next(false);
//   },
// });
</script>

<template>
  <div>
    <nut-navbar title="分类"> </nut-navbar>
    <div class="px-4 py-4">
      <p class="pb-6">beforeRouteUpdate组件内守卫 获取数据</p>
      <div class="flex justify-between">
        <nut-button type="primary" @click="showSongPage('01')"
          >第一首歌曲</nut-button
        >
        <nut-button type="info" @click="showSongPage('02')"
          >第二首歌曲</nut-button
        >
        <nut-button type="default" @click="showSongPage('03')"
          >第三首歌曲</nut-button
        >
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
