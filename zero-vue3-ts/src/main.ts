import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// 引入unocss css
import 'uno.css';
import '@/plugins/unocss';
// 导入全局的svg图标
// import '@/plugins/svgIcon';

const app = createApp(App);

app.use(ElementPlus);
app.mount('#app');
