<script setup>
import demo1 from './demo1.vue'
import Attributes from './Attributes.vue'
import event from './event.vue'
import PreView from '@/components/PreView.vue'
</script>

## 基本使用
#### list传入轮播图片与id
#### autoPlay代表是否轮播
#### duration代表轮播延时
#### indicator为是否展示下标展示器
#### 触发事件为selectItem可以根据触发的参数进行路由跳转
<demo1/>

<PreView compath="carousel" demopath="demo1"></PreView>

## 参数列表
<Attributes/>

## 事件
<event/>
<br>
<br>