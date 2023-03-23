<script setup>
import { onMounted, reactive, toRefs } from 'vue';

const state = reactive({
  count: new Array(100).fill(0),
});

const handleScroll = () => {
  let arr = new Array(100).fill(0);
  const len = state.count.length;
  state.count = state.count.concat(arr.map((item, index) => len + index + 1));
};

onMounted(() => {
  state.count = state.count.map((item, index) => index + 1);
});

const count = toRefs(state).count;
</script>
<script>
export default {};
</script>

<template>
  <div class="overflow-hidden" style="margin-top: -10px" id="find">
    <nut-cell :container-height="500">
      <nut-list :height="50" :listData="count" @scroll-bottom="handleScroll">
        <template v-slot="{ item, index }">
          <div class="list-item">
            {{ index }}
          </div>
        </template>
      </nut-list>
    </nut-cell>
  </div>
</template>

<style>
.nut-cell {
  height: 100%;
}
.nut-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  background-color: #f4a8b6;
  border-radius: 10px;
}
</style>
