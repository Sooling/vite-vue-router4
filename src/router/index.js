import { createRouter, createWebHashHistory } from 'vue-router';

// const pageList = [
//   {
//     title: '首页',
//     text: 'Home',
//   },
//   {
//     title: '分类',
//     text: 'Category',
//   },
//   {
//     title: '寻找',
//     text: 'Find',
//   },
//   {
//     title: '购物车',
//     text: 'Cart',
//   },
//   {
//     title: '我的',
//     text: 'My',
//   },
// ];

// 路由懒加载
const Home = () => import('../pages/Home.vue');
const Category = () => import('../pages/Category.vue');
const Find = () => import('../pages/Find.vue');
const Cart = () => import('../pages/Cart.vue');
const My = () => import('../pages/My.vue');
const Setting = () => import('../pages/Setting.vue');
const NotFound = () => import('../pages/NotFound.vue');

const HomeHeader = () => import('../pages/Home/Header.vue');
const HomeContent = () => import('../pages/Home/Content.vue');
const HomeFooter = () => import('../pages/Home/Footer.vue');
const HomeHeaderLeft = () => import('../pages/Home/Left.vue');
const HomeHeaderRight = () => import('../pages/Home/Right.vue');

const routes = [
  // 统一匹配404页面
  { path: '/:pathMath(.*)*', component: NotFound },
  // alias: ['/Home'] 设置路由别名
  {
    path: '/',
    component: Home,
    alias: ['/Home'],
    children: [
      {
        path: '',
        // 命名视图
        components: {
          HomeHeader,
          HomeContent,
          HomeFooter,
        },
        children: [
          {
            path: '',
            components: {
              HomeHeaderLeft,
              HomeHeaderRight,
            },
          },
        ],
      },
    ],
  },
  { path: '/Category', component: Category },
  { path: '/Find', component: Find },
  { path: '/Cart', component: Cart },
  {
    path: '/My',
    component: My,
    children: [
      {
        path: 'Setting/:setId',
        component: Setting,
        name: 'Setting',
        query: {
          setId: '',
        },
        meta: {
          transition: 'slide-left',
        },
        alias: ['Setting/'],
      },
      {
        path: 'User/:setId',
        redirect: (to) => {
          return { path: `/My/Setting/${to.params.setId}` };
        },
        // name: 'User',
        // query: {
        //   setId: '',
        // },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 根据路径的深度动态添加信息到 meta 字段
// 调用afterEach时，还没有触发DOM更新，也就是说如果设置了页面过渡动画，动画还未开始
router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length;
  const fromDepth = from.path.split('/').length;
  // console.log(to.path.split('/'), fromDepth);
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left';
});

// router.beforeEach((to) => {
//   console.log(to.meta);
// });

export default router;
