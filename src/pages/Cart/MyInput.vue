<script setup></script>

<template>
  <div class="">
    <!-- 1. v-bind绑定透传的属性 -->
    <nut-input v-bind="$attrs">
      <!-- 2. 按需渲染插槽 -->
      <!-- 3. 通过slot，向上传递数据 -->
      <template v-for="(value, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}"></slot>
      </template>
    </nut-input>
  </div>
</template>

<style scoped></style>
