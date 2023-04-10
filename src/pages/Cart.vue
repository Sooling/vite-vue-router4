<script setup>
import { ref, onMounted } from 'vue';

import MyInput from './Cart/MyInput.vue';
const value = ref('');
const handleFocus = () => {
  console.log('handleFocus');
};

import MyEleInput from './Cart/MyEleInput.vue';
const eleValue = ref('adgasgdsa');
const handleBlur = () => {
  console.log('handleBlur');
};
const eleInputRef = ref(null);
onMounted(() => {
  console.log(eleInputRef.value);
  eleInputRef.value.clear();
});
</script>
<script>
export default {};
</script>

<template>
  <div class="px-4 py-4 box-border fit-height bg-gray-50">
    <p>二次封装Nut UI的input组件</p>
    <my-input
      v-model="value"
      placeholder="请输入文本"
      clearable
      @focus="handleFocus"
    >
      <template #clear>
        <span>clear</span>
      </template>
    </my-input>

    <div class="h-8"></div>

    <p>二次封装Element UI的input组件</p>
    <my-ele-input
      ref="eleInputRef"
      v-model="eleValue"
      placeholder="请输入文本"
      clearable
      @blur="handleBlur"
    >
      <template #append>
        <span>clear</span>
      </template>
    </my-ele-input>
  </div>
</template>

<style scoped></style>
