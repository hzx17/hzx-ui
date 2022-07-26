<template>
  <div :class="['h-tree-item-box']">
    <li>
      <div 
      :class="['h-tree-lable-box',{'label-active':tabIndexs === items.key}]" 
      @click.stop.prevent="toggle(items)" :data-key="dataKey" 
      :style="{'padding-left':index*15+'px'}">
        <span :style="[{transform:items.isOpen ? 'rotate(90deg)' : 'rotate(0deg)'}]">
          <i :class="[{'iconfont h-iconenter':items.children&&items.children.length}]" 
          ></i>
        </span>
        <span 
        :class="['h-tree-label-select-span',{'h-tree-label-select-span-active':items.isSelected,'h-tree-label-select-span-active-1'
        :items.semiSelected}]" 
        @click.stop="selectClick(items,index)" v-if="multiple"></span>
        <span class="h-tree-label">{{items.label}}</span>
      </div>
      <transition name="slide-fade">
        <div class="h-tree-ul-box" v-show="items.isOpen" v-if="items.children&&items.children.length">
          <tree-item v-for="(v,i) in items.children" :key="i" 
          :items="v" 
          :data-key="dataKey+'-'+i" 
          :defaultOpenNodes="defaultOpenNodes" 
          @nodeClick="outClick($event,items)" 
          :options="options" 
          :index="index+1" 
          :tabIndexs="tabIndexs" 
          @selectClick="emit('selectClick',$event)" 
          :multiple="multiple" 
           ></tree-item>
        </div>
      </transition>
    </li>
  </div>
</template>

<script setup>
import {computed,onMounted,ref} from 'vue'
const emit = defineEmits(['nodeClick','change','selectClick'])
const props = defineProps({
  items:{ // children数据项
    type:Object,
    default:()=>{}
  },
  dataKey:String|Number, // childrenindex
  index:Number,          // index=0
  defaultOpenNodes:{     // 默认展开的数据项
    type:Array,
    default:()=>[]
  },
  options:{       // 数据项
    type:Object,
    default:()=>{
      return {}
    }
  },
  tabIndexs:String|Number, //当前元素
  multiple:Boolean,        // 是否可以选择
})
props.items.key=props.dataKey
// 
const height = ref(28+'px')
const selectedLen = ref(0)
// 选择的列表
const selectList = ref([])
// 获取items字符串
var recursiveFunction = function(items){
  var str = ''
  const getStr = function(items){
    if(items.isOpen){
      items.children.forEach((v,i)=>{
        if(v.children){
          getStr(v)
          str += v.label + ";"
        }else {
          str += v.label + ";"
        }
      })
    }
  }
  getStr(items)
  return str.split(';')
  
}
/* 是否折叠 */
const isFolder = computed(()=>{
  return props.children.items && props.items.children.length;
})
/* 是否展开与关闭 */
const toggle = (item) => { 
  if (isFolder&&item.children&&item.children.length) {
    item.isOpen = !item.isOpen
    if(!item.isOpen){
      setTimeout(()=>{
        height.value = '28px'
      },100)
    }else{
      height.value = (recursiveFunction(item).length-1)*28+'px'
    }
  }
  emit('nodeClick',item)
  emit('change',item.key)
}
/* 点击之后触发事件，向父组件传递值 */
const outClick = (item,e) => {
  emit('nodeClick',item)
  emit('change',item.key)
}
const getParents = (option, key) => {
  for (var i in option) {
    if (option[i].key == key) {
      return [option[i]];
    }
    if (option[i].children) {
      var ro = getParents(option[i].children, key);
      if (ro !== undefined) {
        return ro.concat(option[i]);
      }
    }
  }
}
const setSelectted = (item,flag) => {
  item.forEach((v,i)=>{
    v.isSelected = flag
    if(v.children){
      setSelectted(v.children,flag)
    }
  })
}
let n = 0
const isParentSel = (item) => {
  item.forEach((v,i)=>{
    n+=1
    if(v.isSelected){
      selectedLen.value+=1
    }
    if(v.children){
      isParentSel(v.children)
    }
  })
}
const getSameLevelChile = (item,item1)=>{
  let n1 =0;
  item.children.forEach((v,i)=>{
    if(v.isSelected){
      n1+=1
    }
  })
  isParentSel(item1.children,item1)
  
  if(n1==item.children.length){
    selectedLen.value+1
    item.isSelected = true
    item.semiSelected = false
  }else if(n1==0){
    item.isSelected = false
    item.semiSelected = false
  }else{
    item.semiSelected = true
  }
  if(selectedLen.value==n){
    item1.isSelected = true
    item1.semiSelected = false
  }else if(selectedLen.value==0){
    item1.isSelected = false
    item1.semiSelected = false
  }else{
    item1.isSelected = false
    item1.semiSelected = true
  }
  // getIsSelectNode(props.options)
}
const getIsSelectNode = (option) => {
  option.forEach((v,i)=>{
    if(v.isSelected){
      selectList.value.push(v)
    }
    if(v.children){
      getIsSelectNode(v.children)
    }
  })
  return selectList.value
}
/* 点击选中 */
const selectClick = (item,index) => {
  item.isSelected = !item.isSelected
  item.semiSelected = false
  selectList.value = []
  let nodeItems = getParents(props.options,item.key)
  if(item.isSelected){
    if(item.children){
      setSelectted(item.children,true)
    }
    if(nodeItems.length>1){
      n = selectedLen.value = 0
      getSameLevelChile(nodeItems[1],nodeItems[nodeItems.length-1])
    }
  }else{
    if(item.children){
      setSelectted(item.children,false)
    }
    if(nodeItems.length>1){
      n = selectedLen.value = 0
      getSameLevelChile(nodeItems[1],nodeItems[nodeItems.length-1])
    }
  }
  emit('selectClick',item)
  emit('nodeClick',getIsSelectNode(props.options))
}
/* 设置选择，children通过递归选中 */
const setSelect = (option,key) => {
  option.forEach((v,i)=>{
    if(v.key==key){
      v.isSelected = true
    }
    // 如果子数据还有，递归调用选中
    if(v.children){
      setSelect(v.children,key)
    }
  })
}
onMounted(()=>{
  // 当用户配置了默认展开时
  if(props.defaultOpenNodes&&props.defaultOpenNodes.length){
    props.defaultOpenNodes.forEach((v,i)=>{
      getParents(props.options,v).forEach((item,index)=>{
        item.isOpen = true
        setTimeout(()=>{
          if(item.children){
            height.value = (recursiveFunction(item).length-1)*28+'px'
          }
        },100)
      })
    })
  }
  // 可以选择
  if(props.multiple){
    if(props.defaultSelectNodes&&props.defaultSelectNodes.length){
      props.defaultSelectNodes.forEach((v,i)=>{
        setSelect(props.options,v)
        getParents(props.options,v).forEach((item,index)=>{
          item.isOpen = true
          setTimeout(()=>{
            if(item.children){
              height.value = (recursiveFunction(item).length-1)*28+'px'
            }
          },100)
        })
        let nodeItems = getParents(props.options,v)
        getSameLevelChile(nodeItems[1],nodeItems[nodeItems.length-1])
      })
      
    }
  }
})

</script>

<style lang="less" scoped>
.slide-fade-enter-active,.slide-fade-enter-from {
  height:v-bind(height);
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
  height:v-bind(height);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transition: all .3s ease;
  height:0px;
}
.h-tree-item-box{
  width:100%;
  height:auto;
  overflow:hidden;
  li{
    list-style: none;
    cursor: pointer;
    font-size:14px;
    font-weight: 500;
    color:@info;
    transition: all .2s ease;
    line-height: 28px;
    overflow: hidden;
    user-select: none;
    position: relative;
    .h-tree-lable-box{
      width: 100%;
      height:100%;
      transition: all .1s ease;
      padding-left:8px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      &:hover{
        background:rgba(14, 128, 235, 0.1);
        font-weight: 500;
        color:@primary;
      }
      span.h-tree-lable-span{
        width:14px;
        height:14px;
        display: inline-block;
        line-height: 14px;
        transition: all .2s ease;
        i{
          width:100%;
          height:100%;
          font-size:12px;
          display: inline-block;
          color:#969696;
          
        }
      }
      .h-tree-label-select-span{
        width:14px;
        height: 14px;
        border-radius: 2px;
        display: inline-block;
        border:1px solid #b9b9b9;
        margin: 0px 8px 0 4px;
        background: #fff;
        position: relative;
        font-size:14px;
        box-sizing: border-box;
        transition: transform 0.15s ease-in;
        &:hover{
          border-color:@primary;
        }
        &::after{
          box-sizing: content-box;
          content: "";
          display: inline-block;
          width: 2.5px;
          height: 7px;
          transform: rotate(45deg);
          border-style: solid;
          border-color: #fff;
          border-width:   0 2px 2px 0 ;
          position: absolute;
          left:3.5px;
        }
      }
      .h-tree-label-select-span-active{
        border:1px solid @primary;
        background: @primary;
        &::after{
          border-color: #fff;
        }
      }
      .h-tree-label-select-span-active-1{
        width:14px;
        height: 14px;
        border-radius: 2px;
        display: inline-block;
        border:1px solid @primary;
        margin: 0px 8px 0 4px;
        background: @primary;
        position: relative;
        font-size:14px;
        box-sizing: border-box;
        transition: transform 0.2s ease-in;
        &::after{
          width:8.5px;
          height: 2px;
          transform: rotate(0deg);
          background: #fff;
          border:0;
          left:1.5px;
          top:5px;
        }
      }
    }
    .label-active{
      background:rgba(14, 128, 235, 0.1);
      color:@primary;
    }
    .h-tree-ul-box{
      margin:0;
      overflow: hidden;
      box-sizing: border-box;
    }
  }
}
</style>