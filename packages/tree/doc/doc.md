<script setup>
import demo1 from "./demo1.vue";
import demo2 from "./demo2.vue";
import demo3 from "./demo3.vue";
import  Attributes from '../doc/Attributes.vue'
import  event from '../doc/event.vue'
import PreView from "../../../src/components/PreView.vue"
</script>
# Tree数据展示

### 默认数据展示

<demo1/>

<PreView compath="tree" demopath="demo1"></PreView>

### 数据展开

<demo2/>

<PreView compath="tree" demopath="demo2"></PreView>

### 可选中按钮

<demo3/>

<PreView compath="tree" demopath="demo3"></PreView>

## 参数说明

<Attributes/>

<br>

## 事件

<event/>