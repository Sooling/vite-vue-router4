<script>
export default {
  mounted() {
    // 4. 将UI组件库对外暴露的属性提到当前组件实例对象上
    // console.log(this.$refs.input);
    const entries = Object.entries(this.$refs.input);
    for (const [key, value] of entries) {
      this[key] = value;
    }
  },
};
</script>

<template>
  <div class="">
    <!-- 1. v-bind绑定透传的属性 -->
    <el-input ref="input" v-bind="$attrs">
      <!-- 2. 按需渲染插槽 -->
      <!-- 3. 通过slot，向上传递数据 -->
      <template v-for="(value, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}"></slot>
      </template>
    </el-input>
  </div>
</template>

<style scoped></style>
