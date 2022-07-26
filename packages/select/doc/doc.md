<script setup>
  import demo1 from "./demo1.vue";
  import demo2 from './demo2.vue';
  import demo3 from './demo3.vue';
  import demo4 from './demo4.vue';
  import  Attributes from '../doc/Attributes.vue'
  import  event from '../doc/event.vue'
  import PreView from "../../../src/components/PreView.vue"
</script>

# select 下拉框

### 基本下拉框

* 传入一个 _options_ 配置项 包含 label与value两个属性

<demo1/>

<PreView compath="select" demopath="demo1"></PreView>

### 禁用下拉框

* 传入 _disabled_ 属性

<demo2/>

<PreView compath="select" demopath="demo2"></PreView>

### 自定义占位符下拉框

* 传入占位符属性，例如 _placeholder="选择国家,快来点击"_

<demo3/>

<PreView compath="select" demopath="demo3"></PreView>

### 不同大小下拉框

* 传入 _size_ 属性 

<demo4/>

<PreView compath="select" demopath="demo4"></PreView>

## 参数

<Attributes/>

## 事件

<event/>