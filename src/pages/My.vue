<script setup>
import { ref } from 'vue';
</script>
<script>
import { Setting } from '@nutui/icons-vue';
export default {
  components: { Setting },
};
</script>

<template>
  <div class="px-4 py-4 box-border fit-height">
    <nut-cell-group>
      <nut-cell title="设置" to="/My/Setting">
        <template v-slot:icon> <Setting /> </template
      ></nut-cell>
    </nut-cell-group>

    <!-- 使用动态过渡名称 -->
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.25s ease;
}
.slide-right-enter-from {
  transform: translateX(0);
}
.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.25s ease;
}
.slide-left-enter-from {
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(0);
}
</style>
