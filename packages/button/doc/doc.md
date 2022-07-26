<script setup>
import demo1 from '../doc/demo1.vue'
import demo2 from '../doc/demo2.vue'
import demo3 from '../doc/demo3.vue'
import demo4 from '../doc/demo4.vue'
import demo5 from '../doc/demo5.vue'
import  Attributes from '../doc/Attributes.vue'
import PreView from '../../../src/components/PreView.vue';
</script>

# Button组件
## 基础按钮

* 按钮颜色有7种设定，需要传入一个 _type_ 属性，例如 _type="primary"_
* 圆角传入 _round_ 属性
* 图标需要传入 _leftIcon="h-iconeditor"_ 或者 _rightIcon="h-iconeditor"_ 分别代表左右图标
* 纯图标按钮 只需要传入 图标属性，不需要加插槽

<demo1/>
<PreView compath="button" demopath="demo1"></PreView>


## 不可点击按钮

* 不可点击按钮 加入 _disable_ 属性

<demo2/>
<PreView  compath="button" demopath="demo2"></PreView>

## 不同大小按钮
* 加入 _size_属性，例如 _size="normal"_

<demo3/>
<PreView  compath="button" demopath="demo3"></PreView>

## 加载中按钮
* 加入加载图标 _rightIcon="h-iconloading1"_ ,再加入 _loading_属性

<demo4/>
<PreView  compath="button" demopath="demo4"></PreView>

## 自定义颜色按钮
需要将 _type_属性设置为 _custom_ 再加入 _customColor_属性   例如 _type="custom" customColor="#9935f5"_

<demo5/>
<PreView  compath="button" demopath="demo5"></PreView>

# 参数说明

<Attributes/>
<br>