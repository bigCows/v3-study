// 1.导入creataApp函数
// 2.创建根组件App.vue
// 3.使用CreateApp创建应用实例
// 4.将实例挂载到index.html

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App)

console.log('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window);
app.mount('#app')