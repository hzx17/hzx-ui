<script setup>
import demo1 from "./demo1.vue";
import demo2 from "./demo2.vue";
import demo3 from "./demo3.vue";
import PreView from '../../../src/components/PreView.vue'
</script>

# space间隔

### 默认为横向排列

<demo1/>

<PreView compath="space" demopath="demo1"></PreView>

#### 竖向排列

 * 加入 _columned_ 属性 

<demo2/>

<PreView compath="space" demopath="demo2"></PreView>

#### 自定义内容间隔大小，默认间隔为间隔都为[10,10]

* 例如加入 _:size="[10,100]"_

<demo3/>

<PreView compath="space" demopath="demo3"></PreView>
