<template>
  <div class='carousel' @mouseenter="stop()" @mouseleave="start()">
    <ul class="carousel-body">
      <li class="carousel-item" v-for="(item, i) in list" :key="item.id" :class="{fade: index === i}">
          <img :src="item.imgUrl" alt="" @click="selectItem(item)">
      </li>
    </ul>
    <!-- 左右控制按钮 -->
    <a href="javascript:;" class="carousel-btn prev" @click="toggle(-1)">&lt;</a>
    <a href="javascript:;" class="carousel-btn next" @click="toggle(1)">&gt;</a>
    <!-- 分页器 -->
    <div class="carousel-indicator" v-if="indicator">
      <span v-for="(item,i) in list" :key="i" :class="{active: index === i}" @click="index = i"></span>
    </div>
  </div>
</template>

<script>
import { ref, watch, onUnmounted } from 'vue'
export default {
  name: 'hCarousel',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    duration: {
      type: Number,
      default: 3000
    },
    autoPlay: {
      type: Boolean,
      default: false
    },
    indicator : {
      type: Boolean,
      default : true,
    }
  },
  // emits: ['selectItem'],
  setup (props,{emit}) {
    const index = ref(0)
    let timer = null
    // 自动轮播
    const autoPlayFn = () => {
      clearInterval(timer)
      timer = setInterval(() => {
        index.value++
        if(index.value >= props.list.length) {
          index.value = 0 
        }
      },props.duration)
    }

    // 鼠标移出时执行
    const start = ()=> {
      if(props.autoPlay && props.list.length >1) {
        autoPlayFn()
      }
    }
    // 鼠标移入时执行
    const stop = () => {
      if(timer) {
        clearInterval(timer)
      }
    }

    // 左右按钮 
    const toggle = (num) => {
      index.value += num
      // 左侧临界值
      if(index.value >= props.list.length) {
          index.value = 0 
      }
      // 右侧临界值
      if(index.value < 0) {
        index.value = props.list.length -1
      }
    }
    
    // 选择事件
    const selectItem = (item) => {
      emit('selectItem',item)
    }

    // 监听
    watch (() => props.list , (newVal) => {
      // 有数据才开启监听
      if(newVal.length >1 && props.autoPlay) {
        index.value = 0
        autoPlayFn()
      }
    },{immediate:true})

    // 清除定时器
    onUnmounted (()=>{
      clearInterval(timer)
    })
    return { index ,start , stop , toggle, selectItem}
  }
}
</script>
<style scoped lang="less">
.carousel{
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  border: 1px solid #ccc;
  text-decoration: none;
  .carousel{
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      list-style: none;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 40px;
        height: 3px;
        background: rgba(0,0,0,0.8);
        border-radius: 2px;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background:  #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0,0,0,.8);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      font-size: 20px;
      font-weight: 700;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      font-family: serif;
      text-decoration: none;
      transition: all 0.5s;
      &.prev{
        left: 20px;
      }
      &.next{
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
