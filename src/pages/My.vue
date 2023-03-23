<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const setId = ref('1');
const goSettingPage = () => {
  let value = setId.value.trim();
  router.push(`/My/Setting/${value}`);
};
const goSettingNamePage = () => {
  let value = setId.value.trim();
  router.push({
    name: 'Setting',
    params: {
      setId: value,
    },
  });
};
const goUserPage = () => {
  let value = setId.value.trim();
  router.push(`/My/User/${value}`);
};

const setIdQuery = ref('');
const goSettingPageQuery = () => {
  let value = setId.value.trim();
  router.push({
    path: '/My/Setting',
    query: {
      setId: setIdQuery.value,
    },
  });
};
</script>
<script>
import { Setting, Right, People } from '@nutui/icons-vue';
export default {
  components: { Setting, Right, People },
};
</script>

<template>
  <div class="px-4 py-4 box-border fit-height bg-gray-50">
    <nut-cell-group title="路径传参">
      <nut-input v-model="setId" placeholder="输入设置页的路径参数" />
      <nut-cell title="设置" @click="goSettingPage">
        <template v-slot:icon> <Setting /> </template>
        <template v-slot:link> <Right /> </template>
      </nut-cell>
    </nut-cell-group>

    <nut-cell-group title="路径传参（命名路由）">
      <nut-input v-model="setId" placeholder="输入设置页的路径参数" />
      <nut-cell title="设置" @click="goSettingNamePage">
        <template v-slot:icon> <Setting /> </template>
        <template v-slot:link> <Right /> </template>
      </nut-cell>
    </nut-cell-group>

    <nut-cell-group title="查询传参">
      <nut-input v-model="setIdQuery" placeholder="输入设置页的路径参数" />
      <nut-cell title="设置" @click="goSettingPageQuery">
        <template v-slot:icon> <Setting /> </template>
        <template v-slot:link> <Right /> </template>
      </nut-cell>
    </nut-cell-group>

    <nut-cell-group
      title="重定向到Setting页面，并传递参数
    "
    >
      <nut-input v-model="setId" placeholder="输入设置页的路径参数" />
      <nut-cell title="用户" @click="goUserPage">
        <template v-slot:icon> <People /> </template>
        <template v-slot:link> <Right /> </template>
      </nut-cell>
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
