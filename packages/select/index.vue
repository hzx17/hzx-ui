<!-- html -->
<template>
  <div :class='selectInputStyle' >
    <input type="text" readonly :placeholder="placeholder" :value="selectValue" v-ClickOutside >
    <transition name="fade">
      <div class="h-select-box" v-if="positionShow">
        <li v-for="(item,index) in options" :key="index" :class="{active: activeIndex == index}" @click="change(item,index)">{{item.label}}</li>
      </div>
    </transition>
    <i class="h-iconquestions iconfont" :style="[{ transform: rotate }]"></i>
  </div>
</template>

<!-- script -->
<script>
export default {
  name:'hSelect'
}
</script>
<script  setup>
import {onBeforeUnmount, ref ,onBeforeMount, reactive, computed} from 'vue'
const emit = defineEmits(['change'])
const props = defineProps({
  options:{
    type:Array,
    default:[]
  },
  disabled:Boolean, //是否可以点击
  placeholder:{
    type:String,
    default:'请选择'
  },
  size:{
    type:String,
    default:''
  }
})
// 是否展示选择框
const positionShow = ref(false)
// 选择的列表数据
const selectValue = ref('')
// 激活选项
const activeIndex = ref('-1');
// 图标旋转
const rotate = ref("rotate(0deg)");
/* 自定义指令 */
const vClickOutside = {
  beforeMount (el) {
     if (!props.disabled) {
      let handler = (e)=>{
        if(el.contains(e.target)){
          positionShow.value = true
          rotate.value = "rotate(180deg)";
        } else {
          positionShow.value = false
          rotate.value = "rotate(0deg)";
        }
      }
      document.addEventListener('click' , handler)
      el.handler = handler
     }
  },
  unmounted(el) {
    document.removeEventListener("click", el.handler);
  },
}
// 选择事件时触发
const change = (item,index)=>{
  selectValue.value = item.label
  activeIndex.value = index
  positionShow.value = false
  rotate.value = "rotate(0deg)";
  emit('change',item)
}
// 根据用户的配置向来返回用户的类名
const selectInputStyle = computed(()=>{
  return [
    'h-select',
    props.disabled ? 'h-select-disabled' : '',
    props.size == '' ? '' : `h-select-${props.size}`
  ]
})
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.h-select{
  width: fit-content;
  position: relative;
  min-width: 250px;
  input{
    outline: none;
    color: @info;
    font-size: 14px;
    cursor: pointer;
    height: 35px;
    box-sizing: content-box;
    width: 100%;
    padding: 8px 10px;
    border: 1px solid @boder;
    box-sizing: border-box;
    &:focus{
      border: 1px solid @primary;
    }
  }
  .h-select-box{
    background-color: #fff;
    position:absolute;
    top: 38px;
    width: 100%;
    height: auto;
    box-shadow: @shadow;
    border: 1px solid @boder;
    z-index: 2;
    box-sizing: border-box;
    overflow: hidden;
    li{
      list-style: none;
      font-size: 14px;
      line-height: 40px;
      box-sizing: border-box;
      color: @info;
      padding: 0 10px;
      &:hover{
        cursor: pointer;
        background: #f0f0f0;
        color: @primary;
      }
    }
    li.active{
      color: @primary;
    }
  }
  i{
     font-size: 14px;
     position: absolute;
     top: 10px;
     right: 10px;
  }
}
.h-select-disabled{
  input{
    cursor: no-drop !important;
  }
  i{
    cursor: no-drop;
  }
}
.h-select-bigger { 
  min-width: 500px !important;
  input{
    font-size: 20px;
    height: 60px;
    padding: 12px 23px;
    box-sizing: border-box;
    &:focus{
      border: 1px solid @primary;
    }
  }
  .h-select-box{ 
    top: 62px !important;
    width: 100%;
    li{
      font-size: 20px;
      line-height: 46px;
      box-sizing: border-box;
      color: @info;
      padding: 0 15px;
    }
  }
  i{
     font-size: 20px !important;
     position: absolute;
     top: 20px !important;
     cursor: pointer;
     right: 10px;
  }
}
.h-select-small { 
  min-width: 200px !important;
  input{
    font-size: 12px;
    height: 28px;
    padding: 6px 8px;
    box-sizing: border-box;
    &:focus{
      border: 1px solid @primary;
    }
  }
  .h-select-box{ 
    top: 32px !important;
    width: 100%;
    li{
      font-size: 12px;
      line-height: 34px;
      box-sizing: border-box;
      color: @info;
      padding: 0 12px;
    }
  }
  i{
     font-size: 12px !important;
     position: absolute;
     top: 9px !important;
     cursor: pointer;
     right: 9px;
  }
}
.h-select-mini { 
  min-width: 100px !important;
  width: 100px;
  min-width: 0px;
  input{
    font-size: 10px;
    height: 20px;
    padding: 2px 5px;
    box-sizing: border-box;
    &:focus{
      border: 1px solid @primary;
    }
  }
  .h-select-box{ 
    top: 22px !important;
    width: 100%;
    li{
      font-size: 10px;
      line-height: 22px;
      box-sizing: border-box;
      color: @info;
      padding: 0 5px;
    }
  }
  i{
     font-size: 10px !important;
     position: absolute;
     cursor: pointer;
     top: 5px !important;
     right: 5px;
  }
}
</style>