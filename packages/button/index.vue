<!-- html -->
<template>
  <button :class="hClass" :style="styles" :disabled="disable">
    <i :class="iconClass" v-if="leftIcon"></i>
    <span>
      <slot></slot>
    </span>
    <i :class="iconClass" v-if="rightIcon"></i>
  </button>
</template>
<!-- script -->
<script>
export default {
  name :'hButton'
}
</script>
<script  setup>
import { parserOptions } from '@vue/compiler-dom';
import {computed} from 'vue'
// 接收调用组件传来的props
const props = defineProps({
  type:{ // 按钮类型颜色
    type:String,
    default:'default'
  },
  round:Boolean, // 圆角
  disable:Boolean, //不可点击
  size:{          // button大小
    type:String,
    default:'normal'
  },
  rightIcon:String, // 右侧图标
  leftIcon:String, // 左侧图标
  loading:Boolean, //是否加载中
  customColor:{
    type:String, // 背景颜色
    default:''
  }
}) 
// 将传来的type通过计算属性返回
const hClass = computed(()=>{
  return [
    'h-button',
    `h-button-${props.type}`,
     props.round ? 'h-button-round' : '',
     props.size == "normal"
      ? ""
      : props.size == "medium"
      ? "h-button-medium"
      : props.size == "small"
      ? "h-button-small"
      : props.size == "mini"
      ? "h-button-mini"
      : "",
    props.disable? 'disable' : ''
  ]
})
// 传出来的图标,通过计算属性返回
const iconClass = computed(()=>{
  if(props.leftIcon || props.rightIcon) {
    return  [
    'iconfont',
     props.leftIcon || props.rightIcon,
     props.loading ? 'loading' : "",
   ]
  }else {
    return [ ]
  }
})
/* 将定义好的style */
const mBtnDeaultStyle = {
  background: props.customColor,
  border: props.customColor,
  color: "#fff",
};
/* 将自定义颜色返回 */
const styles = computed(() => {
  return [
    props.customColor == ""
      ? {}
      : props.type == "custom" 
      ? mBtnDeaultStyle
      : {},
  ];
});
</script>

<style lang="less" scoped>
.h-button{
  border: 0;
  padding: 0;
  margin: 0;
  outline:none;
  cursor: pointer;
  padding: 12px 24px;
  font-size: 14px; 
  line-height: 1;
  box-sizing: border-box;
  border-radius: 4px;
  &:hover{
    opacity: 0.6;
  }
}
.h-button-default{
  border: 1px solid #dcdfe6;
  color:#333;
  box-shadow: @shadow;
   &:hover ,&:focus{
    opacity: 1;
    color:@primary;
  }
}
.h-button-primary{
  background: @primary;
  color:#fff;
  border-color: @primary;
}
.h-button-success{
  background: @success;
  color:#fff;
  border-color: @success;
}
.h-button-info{
  background: @info;
  color:#fff;
  border-color: @info;
}
.h-button-warn{
  background: @warn;
  color:#fff;
  border-color: @warn;
}
.h-button-danger{
  background: @danger;
  color:#fff;
  border-color: @danger;
}
.h-button-dashed{
  border: 1px dashed #ccc;
  color:#333;
  box-shadow: @shadow;
  &:hover ,&:focus{
    border-color:@primary;
    color:@primary;
  }
}
.h-button-round{
  border-radius: 20px;
}
.h-button-medium{
  padding: 8px 20px;
  border-radius: 3px;
  font-size: 14px; 
}
.h-button-small{
  padding: 4px 12px;
  border-radius: 2px;
  font-size: 10px; 
}
.h-button-mini{
  padding: 1px 6px;
  border-radius: 1px;
  font-size: 8px; 
}
.disable{
  opacity: .4;
  cursor: none;
  &:hover{
    opacity: .4;
    cursor: no-drop;
  }
}
.loading {
  display: inline-block;
  animation: icon-loading 1.5s linear infinite;
  -webkit-animation: icon-loading 1.5s linear infinite;
}
@keyframes icon-loading {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

