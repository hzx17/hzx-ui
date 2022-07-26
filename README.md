## 快速安装
```javascript
  npm install  hzx-ui --save

  yarn add  hzx-ui --save
```

## 整体引入
```javascript
  import { createApp } from 'vue'
  import App from '@/App.vue'
  import hzx-ui from 'hzx-ui'
  import '../node_modules/hzx-ui/dist/hzxui.css'

  const app = createApp(App)
  app.use(hzx-ui)
  app.mount('#app')
```

## 支持按需引用
```javascript
  import { hButton, hInput } from 'hzx-ui'
```
## 使用示例
```javascript
<h-button size="normal">默认大小</h-button>
<h-button type="primary" size="normal">默认大小</h-button>
<h-button type="success" size="medium">中等大小</h-button>
<h-button type="warn" size="medium">中等大小</h-button>
<h-button type="danger" size="small">小型按钮</h-button>
<h-button type="info" size="mini">超小按钮</h-button>
<h-button type="dashed" size="mini">超小按钮</h-button>
```

<br>
<br>

