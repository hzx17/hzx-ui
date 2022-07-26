<script setup>
  import demo1 from "./demo1.vue";
  import demo2 from './demo2.vue';
  import demo3 from './demo3.vue';
  import demo4 from './demo4.vue';
  import  Attributes from '@packages/radio/doc/Attributes.vue'
  import  event from '../doc/event.vue'
  import PreView from "@components/PreView.vue"
</script>
# Radio单选

### 基本单选框

* 传入一个 _options_ 配置项 包含label 与 value 两个属性 ，加入 _optionTab_ 属性 表示单选框名字

<demo1/>

<PreView compath="radio" demopath="demo1"></PreView>

### 禁用部分选项单选框

* 在 _options_ 中传入 _disabled_ 属性

<demo2/>

<PreView compath="radio" demopath="demo2"></PreView>

### 竖直排列单选框

*  加入一个 _columned_ 属性

<demo3/>

<PreView compath="radio" demopath="demo3"></PreView>

<Attributes/>

# 事件

<event/>