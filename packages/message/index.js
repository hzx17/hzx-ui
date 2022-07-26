
import { createVNode, render } from 'vue'
import hMessage from './index.vue'


//  export default hMessage
export default ({ text, type, timeout, icon, textColor, bgColor, customClass }) => {  // 
  // 动态创建一个DOM容器
  const div =
    typeof document !== 'undefined'
      ? typeof document.createElement !== 'undefined'
        ? document.createElement('div')
        : ''
      : ''
  div.setAttribute('class', 'h-meassage-container') // 添加属性
  if (typeof document !== 'undefined') {
    document.body.appendChild(div)
  }
  let timer = null
  // 传递给组件的选项, h(标签, {属性},[可以继续嵌套h()])  
  const vnode = createVNode(hMessage, { text, type, timeout, icon, textColor, bgColor, customClass },{ default: () => [text]})

  // render函数涉及到vue里的一个核心思想：虚拟DOM。Vue 通过建立一个虚拟 DOM 来追踪自己要如何改变真实 DOM。
  render(vnode, div)
  clearTimeout(timer)
  timer = setTimeout(() => {
    render(null, div)
    if (typeof document !== 'undefined') {
      document.body.removeChild(div) // 移出
    }
    clearTimeout(timer)
  }, timeout || 2500)
}
