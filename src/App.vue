<script setup>
import { ref, h } from 'vue';
import { Home, Category, Find, Cart, My } from '@nutui/icons-vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const List = ref([
  {
    title: '首页',
    text: 'Home',
    icon: h(Home),
  },
  {
    title: '分类',
    text: 'Category',
    icon: h(Category),
  },
  {
    title: '寻找',
    text: 'Find',
    icon: h(Find),
  },
  {
    title: '购物车',
    text: 'Cart',
    icon: h(Cart),
  },
  {
    title: '我的',
    text: 'My',
    icon: h(My),
  },
]);

const tabSwitch = (value, index) => {
  // 编程式导航
  router.push(`/${List.value[index].text}`);
};
</script>

<template>
  <!-- 路由视图 -->
  <!-- v-slot API 和 Transition 的 API 添加路由页面过渡动效 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>

  <!-- 底部tabBar -->
  <nut-tabbar bottom safe-area-inset-bottom placeholder @tab-switch="tabSwitch">
    <nut-tabbar-item
      v-for="(item, index) in List"
      :tab-title="item.title"
      :icon="item.icon"
    >
    </nut-tabbar-item>
  </nut-tabbar>
</template>

<style scoped>
/* 页面过渡动画样式 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  /* 设置visibility 和 position属性让页面的过渡动画更加自然 */
  visibility: hidden;
  position: absolute;
}
</style>
