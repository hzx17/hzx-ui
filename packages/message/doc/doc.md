<script setup>
import demo1 from './demo1.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import Attributes from './Attributes.vue'
import PreView from '@/components/PreView.vue'
</script>

# Message 消息提示

#### 常用于交互反馈提示场景

<br/>

## 基本使用


* 可以通过 _text_ 来配置里面的文字，也可以返回一个h渲染函数自定义其Dom及方法

<div class="componetnsBox">
  <demo1/>
</div>

<PreView compath="message" demopath="demo1"></PreView>

## message颜色类型与自定义

* 参考参数列表

<demo3/>

<PreView compath="message" demopath="demo3"></PreView>

### message弹窗延时

<demo4/>

<PreView compath="message" demopath="demo4"></PreView>

## 参数说明

<Attributes/>

<br>
