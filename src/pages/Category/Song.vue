<script setup>
import { ref, watch, reactive } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
// console.log('setup');
const route = useRoute();

const songInfo = reactive({
  title: '',
  cover: '',
  artist: '',
});
const loading = ref(false);
const error = ref(null);

const getSongInfo = () => {
  loading.value = true;
  error.value = null;
  fetch('https://api.paugram.com/acgm/')
    .then((response) => {
      loading.value = false;
      return response.text();
    })
    .then((data) => {
      console.log(data);
      const info = JSON.parse(data);
      songInfo.cover = info.cover;
      songInfo.title = info.title;
      songInfo.artist = info.artist;
    })
    .catch((e) => {
      error.value = e.toString();
    });
};
getSongInfo();

onBeforeRouteUpdate(getSongInfo);
</script>

<script></script>

<template>
  <div class="h-24 bg-blue-50 my-4 rounded-lg">
    <div v-if="loading" class="flex h-24 justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
        >
          <animateTransform
            attributeName="transform"
            dur="0.75s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;360 12 12"
          />
        </path>
      </svg>
    </div>
    <div v-else-if="error" class="flex h-24 justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 7v4a1 1 0 0 0 1 1h3m0-5v10m3-9v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1zm7-1v4a1 1 0 0 0 1 1h3m0-5v10"
        />
      </svg>
    </div>
    <div v-else class="h-24 bg-blue-50 flex my-4 rounded-lg">
      <div class="w-24 h-24">
        <img :src="songInfo.cover" alt="" />
      </div>
      <div class="px-6 py-4">
        <p class="text-lg font-bold truncate">{{ songInfo.title }}</p>
        <p class="text-sm mt-2">{{ songInfo.artist }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
