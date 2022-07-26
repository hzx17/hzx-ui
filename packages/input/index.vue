<!-- html -->
<template>
  <div :class="hInputCalss">
    <i :class="['left-icon','iconfont',lefticon]" v-if="!clearable&&lefticon!=''"></i>
    <input :type="inputtype" 
    :value="modelValue"
    @input="input"
    @focus="focus"
    :placeholder="placeholder"
    :disabled="disabled">
    <i :class="['right-icon','iconfont',righticon]" v-if="!clearable&&righticon!=''"></i>
    <span :style="clearStyle" class="iconclear-box" v-if="clearable"  @click="clearModelValue">
       <i class="iconfont h-icondelete"></i>
    </span>
    <span :style="showStyle" class="iconshow-box"  @click="showPassword">
       <i class="iconfont h-iconbrowse"></i>
    </span>
  </div>
</template>

<!-- script -->
<script>
import { computed , ref } from '@vue/runtime-core'
export default {
  name:'HInput'
}
</script>
<script  setup>
const emit = defineEmits(['update:modelValue','clear','focus','blur','input','change'])
/* 接收传递过来的数据 */
const props = defineProps({
  modelValue: String || Number, // 双向绑定的数值
  placeholder:String || Number , //占位符
  disabled:Boolean,             // 是否不可点击
  clearable:Boolean,             //是否有清除按钮
  type:{                 // input框类型
    type:String,    
    default:'text'         
  },
  lefticon:{  // 右侧图标
    type:String,
    default:''
  },
  righticon:{
    type:String,
    default:''
  }
})
const inputtype = ref(props.type)
// 通过计算属性返回类名
const hInputCalss = computed(()=>{
  return [
    'h-input',
    props.disabled ? 'h-input-disabled' : '',
    props.lefticon !='' ? 'h-input-left-icon-default' : '',
    props.righticon !='' ? 'h-input-right-icon-default' : '',
  ]
})
// 组件输入事件，触发，更新数据
const input = (e)=>{
  emit('update:modelValue', e.target.value)
}
// 点击清除输入框内容
const clearModelValue = ()=>{
  emit('update:modelValue',"")
}
// 查看密码函数
const showPassword = (e)=> {
  if(inputtype.value=='text'){
    inputtype.value = 'password'
  }else{
    inputtype.value = 'text'
  }
}
// 查看密码样式
const showStyle = computed(()=>{
  return [
    {
      "display" : props.type =='password' && props.modelValue ? 'block' : 'none' 
    }
  ]
})
// 清除图标样式
const clearStyle = computed(()=>{
  return [
    {
      "display" : props.clearable && props.modelValue ? 'block' : 'none' 
    }
  ]
})
</script>

<style lang="less" scoped>
.h-input{
  min-width: 250px;
  width: 90%;
  display: inline-block;
  font-size: 14px;
  position: relative;
  .iconshow-box{
    position: absolute;
    top:10px;
    right: 20px;
    i{
        font-size: 20px;
        color: @info;
        cursor: pointer;
    }
  }
  .iconclear-box{
    position: absolute;
    top:10px;
    right: 0;
    i{
      font-size: 20px;
        color: @info;
        cursor: pointer;
    }
  }
  input{
    outline: none;
    border: 1px solid @boder;
    line-height: 1;
    width: 100%;
    padding: 10px 8px;
    font-size: 14px;
    color: @info;
    border-radius: 4px;
    transition: all .15s ease-in;
    box-shadow: @shadow;
    &:focus{
      border-color: @primary;
    }
  }
}
.h-input-left-icon-default{
  height:35px;
  width: 300px;
  input{
    padding:10px 25px 10px 32px;
  }
  input::placeholder { /* 大部分现代浏览器 */
    color:    #c6c8cc;
    font-size: 14px;
  }
  .left-icon{
    position:absolute;
    left:10px;
    top:11px;
    color:#94969b;
  }
}
.h-input-right-icon-default{
  height:35px;
  width: 310px;
  input{
     padding:10px 32px 10px 10px;   
  }
  input::placeholder { /* 大部分现代浏览器 */
    color:    #c6c8cc;
    font-size: 14px;
  }
 .right-icon{
  position: absolute;
  top: 10px;
  right: -30px;
  font-size: 20px;
}
}
.h-input-disabled{
  input{
   opacity: .5;
   cursor: no-drop;
  }
}
</style>