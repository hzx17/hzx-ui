<!-- html -->
<template>
  <div :class='hRadioStyle'>
    <div 
      v-for="(item,index) in options" 
      :key="index" 
      :class="itemClass(item)" 
      @click="change(item,index)"
     >
       <input type="radio" :name="optionTab" :checked="item.value == modelVal" :value="modelVal" :disabled="item.disabled">
       <span :class="{active: item.value == modelVal}" >{{item.label}}</span>
    </div>
      
  </div>
</template>

<!-- script -->
<script>
import { computed , ref} from '@vue/runtime-core'
export default {
  name:'hRadio'
}
</script>
<script  setup>
const props = defineProps({
  optionTab:{
    type:String,
    dafault:'radio'
  },
  options:{
    type:Array,
    dafault:''
  },
  modelValue:String,
  columned:Boolean
})
const emit=defineEmits(['change','update:modelValue'])
const modelVal = ref(props.modelValue||'')
/* 用户选择 */
const change = (item,index)=>{
  if(!item.disabled){
    emit('update:modelValue',item.value)
    emit('change', { label: item.label, value: item.value, index: index })
    modelVal.value = item.value
  }
}
// 是否禁用样式返回
const itemClass = (item)=>{
  return item.disabled ? 'h-radio-item-disabled' : 'h-radio-item'
}
const hRadioStyle = computed(()=>{
  return [
    'h-radio',
     props.columned ? 'h-radio-columned' :'' 
  ]
})
</script>

<style lang="less" scoped>
.h-radio{
  width: auto;
  height: auto;
  overflow: hidden;
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
  .h-radio-item-disabled{
    display: inline-block;
    margin-right: 20px;
    cursor: no-drop;
    opacity: 0.5;
    input[type="radio"] { 
      padding: 0;
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: no-drop;
      outline: none;
      margin: 5px;
    }    
    span{
      padding: 0;
      margin: 0;
      font-size: 14px;
      color: @info;
    }
  }
  .h-radio-item{
    margin-right: 20px;
    cursor: pointer;
    input[type="radio"] { 
      padding: 0;
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: pointer;
      outline: none;
      margin: 5px;
    }    
    span{
      padding: 0;
      margin: 0;
      font-size: 14px;
      color: @info;
      &:hover{
        color:@primary;
      }
    }
    span.active{
      color:@primary;
    }
  }
}
.h-radio-columned{
  flex-direction: column !important;
}
</style>