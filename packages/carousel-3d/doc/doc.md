<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import Attributes from './Attributes.vue'
import event from './event.vue'
import PreView from '@/components/PreView.vue'
</script>

## 基本使用

#### 只需传入轮播图数据
<demo1/>

<PreView compath="carousel-3d" demopath="demo1"></PreView>

## 层叠轮播图
##### 通过传入width，与breadth属性之间的间隔，完成轮播图的配置

<demo2/>

<PreView compath="carousel-3d" demopath="demo2"></PreView>


## 参数

<Attributes/>

## 事件

<event/>
<br>
<br>
