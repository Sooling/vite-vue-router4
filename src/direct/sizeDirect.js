// 创建一个WeakMap，是元素与回调函数的映射
// 使用WeakMap避免内存泄漏
const map = new WeakMap();

// 参数是一个数组，表示观察到的元素中有哪些元素发生了变化
const ob = new ResizeObserver((entries) => {
  // console.log(entries);
  for (const entry of entries) {
    console.log(entry); // 包含不同的盒子尺寸和DOM对象
    // 如何拿到元素对应的回调函数
    const handle = map.get(entry.target);
    if (handle) {
      const box = entry.borderBoxSize[0]; // 获取borderBoxSize盒子
      handle({
        width: box.inlineSize,
        height: box.blockSize,
      });
    }
  }
});
// ob.observe(dom) // dom尺寸的变化会引发ResizeObserver回调函数的执行

export default {
  mounted(el, binding) {
    // console.log(binding);
    // binding.value拿到传入的回调函数
    map.set(el, binding.value);
    // 监视尺寸变化
    ob.observe(el);
  },
  unmounted() {
    // 取消监听
    ob.unobserve(el);
  },
};
