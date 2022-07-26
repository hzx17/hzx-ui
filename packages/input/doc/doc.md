<script setup>
   import demo1 from "./demo1.vue";
   import demo2 from "./demo2.vue";
   import demo3 from "./demo3.vue";
   import demo4 from "./demo4.vue";
   import demo5 from "./demo5.vue";
   import  Attributes from '../doc/Attributes.vue'
   import  event from '../doc/event.vue'
   import PreView from '../../../src/components/PreView.vue'
</script>

# input组件
### 基本输入框
* 需要绑定一个值，_placeholder_ 为占位符 例如 _v-model="val" placeholder="搜索一下，你就知道"_

<demo1/>

<PreView compath="input" demopath="demo1"></PreView>

### 禁用输入框

* 加入一个 _disabled_ 属性

<demo2/>

<PreView compath="input" demopath="demo2"></PreView>

### 具有清空输入框

* 加入 _clearable_ 属性

<demo3/>

<PreView compath="input" demopath="demo3"></PreView>

### 密码输入框

* 设置 _type="password"_

<demo4/>

<PreView compath="input" demopath="demo4"></PreView>

### 带图标的输入框

* 设置 _righticon="h-iconother"_ 或者 _lefticon="h-iconother"_ 表示左侧或右侧图标

<demo5/>

<PreView compath="input" demopath="demo5"></PreView>

# 参数说明

<Attributes/>
<br>

# 事件

<event/>
<br>