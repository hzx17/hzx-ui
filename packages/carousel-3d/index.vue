<template>
    <div class='h-carousel-3d' @mouseenter="enter" @mouseleave="leave">
        <div class="wrapper">
            <div class="slider" 
            @click="selectItem($event,item)"
            :class="{active : data.curInitital-1 == index}" 
            v-for="(item,index) in list" 
            :key="item.id"
            :style="item.itemStyle"
            >
                <div class="mark"></div>
                <img :src="item.imgUrl" alt="">
            </div>
        </div>
         <!-- 左右控制按钮 -->
            <a href="javascript:;" v-if="switchBtn" class="carousel-btn prev" @click="toggle(-1)">&lt;</a>
            <a href="javascript:;" v-if="switchBtn" class="carousel-btn next" @click="toggle(1)">&gt;</a>
            <!-- 分页器 -->
            <div class="carousel-indicator" v-if="punctuation">
              <span v-for="(item,i) in list" :key="i" @click="punctuationSelect(i+1)" :class="{active: data.curInitital-1 === i}"></span>
            </div>
    </div>
</template>
 
<script>
import { reactive, ref } from '@vue/reactivity'
import { onMounted , onUnmounted, watch} from '@vue/runtime-core'
import { emit } from 'process';
export default {
  name:'hCarousel3d',
}
</script>
<script setup>
const props =defineProps({
    sliders:{  // 轮播图数据
        type:Array,
        require:true
    },
    switchBtn: {
      type: Boolean,
      default:false
    },
    initital: {  // 初始激活数据
        type :Number,
        default:1
    },
    breadth: { // 两个层叠图之间的间距
        type: Number,
        default :80
    },
    autoLoop: {  // 是否自动轮播
        type: Boolean,
        default: true,
    },
    width: {
       type: Number,
       default :100,
    },
    punctuation: {  // 底部导航点
        type: Boolean,
        default:true,
    },
    timeout : {  // 轮播延时
        type: Number ,
        default:2000
    }
})

const emits = defineEmits(['selectItem'])
const source = props.sliders

const data = reactive({
  curInitital:props.initital,
  timeout:props.timeout,
  autoLoop:props.autoLoop
})
const list =ref([])

// 数据处理
const handlerSource = (initital , breadth , width) => {
  let leftCount =0 
  let overLeftCount = source.length-1
  let overRightCount=0
  let rightCount =0
  let rightPosition = 50
  let leftPosition = 50
  for(let i =0 ;i <source.length ; i++) {
    if(i % 2 ==0) {
      if (rightCount ==0) {
        rightPosition =50
      }else {
        rightPosition += width*(1-.15*rightCount)*(breadth/100)
      }
      let itemStyle = `z-index:${source.length-rightCount}; 
      left:${rightPosition}%;
      transform: translate(-50%,-50%) scale(${1-.15*rightCount});
      width:${width}%;`
      if(initital-1+rightCount>=source.length){
        source[overRightCount].itemStyle = itemStyle
        overRightCount++
      } else {
        source[initital-1+rightCount].itemStyle = itemStyle
      }
      rightCount++
    } else {
      leftPosition -= width*(1-.15*(leftCount+1))*(breadth/100)
      let itemStyle = `z-index:${source.length-leftCount-1}; 
      left:${(50-width*(1-.15*(leftCount+1))*(breadth/100))}%;
      left: ${leftPosition}%;
      transform:translate(-50%,-50%) scale(${1-.15*(leftCount+1)}); 
      width:${width}%;`
      if(initital-2-leftCount<0){
        source[overLeftCount].itemStyle = itemStyle
        overLeftCount--
      }else {
        source[initital-2- leftCount].itemStyle = itemStyle
      }
      leftCount++
    }
  }
  list.value = []
  source.map((item,index) => {
    list.value.push(item)
  })
 
}

let timer = null
// 自动轮播
const autoPlayFn = () => {
  clearInterval(timer)
  timer = setInterval(() => { 
    if(data.curInitital >= list.value.length) {
      data.curInitital = 1 
    }else {
      data.curInitital++
    }
  },data.timeout)
}

// item选择
const selectItem = (e,item) =>{
  emits('selectItem',e,item)
}

// 鼠标移入
const enter =() => {
  clearInterval(timer)
}

// 鼠标移出
const leave = () => {
  if(data.autoLoop && list) {
    autoPlayFn()
  }
}

// 点击分页器
const punctuationSelect = (index) => {
  data.curInitital = index
}

// 点击左右切换
const toggle = (num) => {
  if(data.curInitital == list.value.length) {
    data.curInitital = 0 
  } else if (data.curInitital == 0) {
    data.curInitital = list.value.length
  }
  data.curInitital += num

}
watch(()=>data.curInitital,(newVal)=> {
  handlerSource(newVal,props.breadth,props.width)
})

onMounted(()=>{
  handlerSource(props.initital,props.breadth,props.width)
  if(data.autoLoop) {
      autoPlayFn()
  }
})
// 清除定时器
onUnmounted (()=>{
  clearInterval(timer)
})
</script>

<style scoped lang="less">
.h-carousel-3d {
    width: 100%;
    position: relative;
    overflow: hidden;
    min-width: 200px;
    min-height: 100px;
    position: relative;
    transition:  .5s ;
      .slider {
          position: absolute;
          top: 50%;
          cursor: pointer;
          img {
              display: block;
              width: 100%;
              height: 100%;
          }
          .mark {
              position: absolute;
              top: 0;
              bottom: 0;
              width: 100%;
              height: 100%;
              background-color:rgba(0,0,0, .6) ;
          }
          &.active .mark{
                background-color:rgba(0,0,0, 0) ;
          }
          &:hover .mark{
                background-color:rgba(0,0,0, 0) ;
          }
      }   
    }
    .carousel {
       &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 20;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: rgba(0,0,0,0.4);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          width: 30px;
          border-radius: 5px;
          background:  @warn;
        }
      }
    }
    &-btn{
      width: 20px;
      height: 44px;
      background: rgba(0,0,0,.8);
      color: #bfa;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      font-size: 16px;
      font-weight: 700;
      text-align: center;
      line-height: 44px;
      opacity: 1;
      font-family: serif;
      text-decoration: none;
      transition: all 0.5s;
      z-index: 20;
      &.prev{
        left: 0px;
      }
      &.next{
        right: 0px;
      }
    }
}
</style>  