<!-- html -->
<template>
  <div :class='hTextareaClass'>
    <textarea name="" id="" 
     :cols="currentCols" 
     :rows="currentRows" 
     @input="input" 
     :maxlength="maxlength"
     :placeholder="placeholder"
     :value="modelValue"
     @focus="focus"
     @blur="blur"
     :disabled="disabled"
     >
    </textarea>
    <span :class="countStyle" v-if="maxlength!==''">{{n}}/{{maxlength}}</span>
  </div>
</template>

<!-- script -->
<script>
export default {
  name:'hTextarea'
}
</script>
<script  setup>
import {computed, ref, watch}  from 'vue'
const emit = defineEmits(['update:modelValue','input','focus','blur'])
const props = defineProps({
  modelValue:{ //用户输入的数据
    type:String,
    default:''
  },
  rows:{ // 行高
    type:String || Number,
    default:"5"
  },
  cols:{ // 列宽
    type:String || Number ,
    default:"30"
  },
  placeholder:{
    type:String,
    default:'请输入'
  },
  maxlength:{ //输入最大长度
    type:String,
    default:''
  },
  type:{
    type:String,
    default:'primary'
  },
  disabled:Boolean
})
// 将用户传来的字数数量作为响应式
const n = ref(props.modelValue||0)
// 限制字数的数字样式
const countStyle =ref('h-textarea-span')
/* 将用户传来的数据返回*/
const currentRows = computed(()=>{
  return props.rows
})
const currentCols = computed(()=>{
  return props.cols
})
// 用户输入事件触发该方法
const input = (e)=>{
  emit("update:modelValue",e.target.value)
  n.value = e.target.value.length
  if(n.value>=props.maxlength){
    n.value = props.maxlength
  }
}
// 聚焦时触发
const focus = (e)=>{
  countStyle.value = `span-color-${props.type}`
}
// 用户失去聚焦时返回
const blur = (e)=>{
  countStyle.value = 'h-textarea-span'
}
// 用户聚焦时，将用户聚焦样式返回
const spanStyle = computed(()=>{
  return countStyle
})
/* 返回边框激活样式 */
const hTextareaClass = computed(()=>{
  return [
    'h-textarea',
    props.type=='primary' ? "" : `h-textarea-${props.type}`,
    props.disabled ? 'h-textarea-disabled' : ''
  ]
})

</script>

<style lang="less" scoped>
.h-textarea{
  position: relative;
  width: auto;
  height: auto;
  overflow: hidden;
  display: inline-block;
   textarea{
    padding: 10px;
    outline: none;
    border:1px solid @boder;
    color: @info;
    &:focus{
      border-color:@primary ;
    }
   }
   .h-textarea-span{
      position: absolute;
      bottom: 10px;
      right: 10px;
      color:@boder;
   }
   .span-color-primary{
    position: absolute;
    bottom: 10px;
    right: 10px;
    color:@primary !important ;
   }
  .span-color-success{
      position: absolute;
      bottom: 10px;
      right: 10px;
      color:@success !important ;
  }
  .span-color-danger{
      position: absolute;
      bottom: 10px;
      right: 10px;
      color:@danger !important ;
  }
  .span-color-warn{
      position: absolute;
      bottom: 10px;
      right: 10px;
      color:@warn !important ;
  }
}
.h-textarea-warn{
 textarea{
    &:focus{
      border-color:@warn ;
    }
   }
}
.h-textarea-success{
 textarea{
    &:focus{
      border-color:@success ;
    }
   }
}
.h-textarea-danger{
 textarea{
    &:focus{
      border-color:@danger ;
    }
   }
}
.h-textarea-disabled{
  textarea{
      cursor: no-drop;
   }
}
</style>