import { createApp } from 'vue'
import App from './App.vue'

// 引入路由配置
import router from './router/index.js'
// import {hButton , hInput , hTextarea} from '../packages/index.js'
import hzxui from '../packages/index.js'
import hljs from "highlight.js";
// 引入图标字体
import '../styles/iconfont.css'
// 引入全局样式
import './assets/styles/global.css'
import "highlight.js/styles/color-brewer.css";
const app = createApp(App)
// 使用自己的组件
app.use(hzxui)
// app.use(hButton)
// app.use(hInput)
// app.use(hTextarea)
// 使用路由
app.use(router)
// 代码高亮配置
hljs.configure({
  ignoreUnescapedHTML: true,
  languages: [
    "javascript",
    "css",
    "python",
    "html",
    "bash",
    "java",
    "sql",
    "json",
    "http",
    "go",
    "c++",
    "c#",
    "",
  ],
});
// 自定义代码高亮指令
app.directive("highlight", function (el) {
  const blocks = el.querySelectorAll("div code");
  blocks.forEach((block) => {
    hljs.highlightElement(block);
  });
});
app.mount('#app')