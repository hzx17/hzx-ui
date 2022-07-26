<!-- html -->
<template>
  <div class="h-switch-default">
    <span class="h-switch-left-text"
     v-if="textArea=='left'&&closeText!=''&&activeText!=''" 
     :style="{'color':modelValue?activeColor:closeColor}">{{switchText}}</span>
    <div class="h-switch-content"  
    @click="handlerSwitch"  
    :style="[switchStyle,{'width':width+'px'}]">
      <span class="h-switch-round" :style="[roundStyle]"></span>
      <span class="h-switch-flagtext" :style="flagTextStyle" v-if="showTipsText">{{flagText}}</span>
    </div>
    <span class="h-switch-right-text"
     v-if="textArea=='right'&&closeText!=''&&activeText!=''"  :style="{'color':modelValue?activeColor:closeColor}">{{switchText}}</span>
  </div>
</template>

<!-- script -->
<script>
export default {
  name:'hSwitch'
}
</script>
<script  setup>
import { reactive ,ref ,watchEffect  } from 'vue';
const emit = defineEmits(['update:modelValue','change'])
const props = defineProps({
  modelValue:Boolean, // 用户选择
  width:{             // 选择宽度
    type:Number,
    default:45
  },
  closeColor:{
    type:String,
    default:"#BFBFBF"
  },
  activeColor:{
    type:String,
    default:"#0e80eb"
  },
  closeText:{
    type:String,
    default:""
  },
  activeText:{
    type:String,
    default:""
  },
  showTipsText:Boolean,
  textArea:{
    type:String,
    default:"left"
  }
})
const roundStyle = reactive({"left":'2px'}) // 圆球移动距离
const flagTextStyle = reactive({"left":props.width-20+'px'})  // 文字移动距离
const switchStyle = reactive({"background":props.closeColor}) // 选择框样式
const flagText = ref('关') // 用户选择的值
const switchText = ref(props.modelValue?props.activeText:props.closeText) 
const flag = ref(props.modelValue)
/* 用户选择 */
const handlerSwitch = ()=>{
  flag.value = !flag.value
  emit('update:modelValue',flag.value)
  emit('change',flag.value)
}

watchEffect(()=>{
  roundStyle.left = props.modelValue?props.width-20+'px':'2px'
  flagTextStyle.left = props.modelValue?'6px':props.width-20+'px'
  switchStyle.background = props.modelValue?props.activeColor:props.closeColor
  if(props.modelValue){
    flagText.value = "开"
    switchText.value = props.activeText
  }else{
    flagText.value = "关"
    switchText.value = props.closeText
  }
})
</script>

<style lang="less" scoped>
.h-switch-default{
  display: flex;
  align-items: center;
  .h-switch-left-text ,.h-switch-right-text{
    font-size:14px;
    transition: all .3s ease;
    color:@info;
  }
  .h-switch-left-text{
    margin-right:7px;
  }
  .h-switch-right-text{
    margin-left:7px;
  }
  .h-switch-content{
    width: 45px;
    height: 20px;
    background-color: #bfbfbf;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    transition: all .3s ease;
  }
   .h-switch-round{
      width: 18px;
      height: 18px;
      display: inline-block;
      border-radius: 50%;
      background: #fff;
      position: absolute;
      top:1px;
      transition: all .3s ease;
    }
    .h-switch-flagtext{
      height: 18px;
      display: inline-block;
      border-radius: 50%;
      color: #fff;
      position: absolute;
      left: 10px;
      top:1px;
      right: -10px;
      transition: all .3s ease;
      font-size:12px;
      line-height: 18px;
    }
}
</style>