<template>
  <div class="h-tree-content-box">
    <template v-for="(item,index) in options" :key="index">
      <tree-item :items="item" 
                 :data-key="index" 
                 :defaultOpenNodes="defaultOpenNodes" 
                 @nodeClick="nClick($event)" 
                 :options="options" 
                 :index="0" 
                 @change="changeKey($event)" 
                 :tabIndexs="tabKey" 
                 @selectClick="emit('selectClick',$event)" 
                 :multiple="multiple" 
      >
      </tree-item>
    </template>
  </div>
</template>
<script>
export default {
  name:'hTree'
}
</script>
<script setup>
import {ref} from 'vue'
import treeItem from './treeItem.vue'
// 数据点击，选择向使用者传递数据
const emit = defineEmits(['nodeClick','selectClick'])
const props = defineProps({
  options:{ // 传来的数据项
    type:Object,
    default:()=>{
      return {}
    }
  },
  defaultOpenNodes:Array,
  multiple:Boolean,
})

props.options.forEach((item,index)=>{
  item.key = index.toString()
})
const tabKey = ref('')
const changeKey = (e) =>{
  tabKey.value = e
}
const nClick = (item) => {
  emit('nodeClick',item)
}
</script>