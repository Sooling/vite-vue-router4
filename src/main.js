import { createApp } from 'vue';
// 引入normalize.css重置样式
import 'normalize.css';
import './nut-theme.css';
import './tailwind.css';
import sizeOb from './direct/sizeDirect.js';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.directive('size-ob', sizeOb);
app.use(router);
app.mount('#app');
