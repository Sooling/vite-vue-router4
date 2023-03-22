import { createApp } from 'vue';
// 引入normalize.css重置样式
import 'normalize.css';
import './tailwind.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.mount('#app');
