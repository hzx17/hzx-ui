export default [
  {
    name:'首页',
    path:'/',
    component:()=>import('../views/index.vue')
  },
  {
    path:'/hzxui',
    name:'组件',
    component:()=>import('../views/Home.vue'),
    children:[
      {
        path:'',
        name:'立即安装',
        component:()=>import('../../README.md')
      },
      {
        path:'statement',
        name:'说明',
        component:()=>import('../../Explain.md')
      },
      {
        path:'button',
        name:'button按钮',
        component:()=>import('/packages/button/doc/doc.md')
      },
      {
        path:'input',
        name:'input输入框',
        component:()=>import('/packages/input/doc/doc.md')
      },
      {
        path: 'updatelog',
        name: '更新日志',
        component: () => import('/packages/input/doc/doc.md')
      },
      {
        path: 'color',
        name: 'Color 颜色',
        component: () => import('/packages/color/doc/doc.md')
      },
      {
        path: 'icon',
        name: 'Icon 图标',
        component: () => import('/packages/icon/doc/doc.md')
      },
      {
        path: 'button',
        name: 'Button 按钮',
        component: () => import('/packages/input/doc/doc.md')
      },
      {
        path: 'input',
        name: 'Input 输入框',
        component: () => import('/packages/input/doc/doc.md')
      },
      {
        path: 'textarea',
        name: 'Textarea 文本域',
        component: () => import('/packages/textarea/doc/doc.md')
      },
      {
        path: 'Space',
        name: 'Space 间距',
        component: () => import('/packages/space/doc/doc.md')
      },
      {
        path: 'select',
        name: 'Select 下拉框',
        component: () => import('/packages/select/doc/doc.md')
      },
      {
        path: 'radio',
        name: 'Radio 单选',
        component: () => import('/packages/radio/doc/doc.md')
      },
      {
        path: 'switch',
        name: 'Switch 开关',
        component: () => import('/packages/switch/doc/doc.md')
      },
      {
        path: 'table',
        name: 'Table 表格',
        component: () => import('/packages/table/doc/doc.md')
      },
      {
        path: 'tree',
        name: 'Tree 树形控件',
        component: () => import('/packages/tree/doc/doc.md')
      },
      {
        path: 'message',
        name: 'message 消息提示',
        component: () => import('/packages/message/doc/doc.md')
      },
      {
        path: 'carousel',
        name: 'carousel 轮播图',
        component: () => import('/packages/carousel/doc/doc.md')
      },
      {
        path: 'carousel-3d',
        name: 'carousel-3d 层叠轮播图',
        component: () => import('/packages/carousel-3d/doc/doc.md')
      }
    ]
  }
]