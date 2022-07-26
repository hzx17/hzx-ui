<template>
  <div class="header-block-box">
    <div class="logo-Box">
      <img src="../assets/logo.png" @click="tohome" alt="hzx-ui">
      <a href="javascript:;" @click="tohome">hzx-ui</a>
      <span>努力更新中</span>
      <div class="toolsBox">
        <a href="javascript:;" 
        v-for="(item,index) in tools" 
        :key="index"
        @click="pageView(item,index)"
        :class="{active:tabIndex  == index}"
        >{{item.name}}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { reactive ,ref , onMounted,onBeforeMount, onUpdated,} from 'vue';
const router = useRouter()
function tohome(){
  router.push("/")
  tabIndex.value = 0
  sessionStorage.setItem("tabIndex", 0);
}
// 定义当前激活导航
const tabIndex = ref(
  sessionStorage.getItem("tabIndex") || 1
)
const state = reactive({
  tools: [
    {
      name: "首页",
      path: "/",
    },
    {
      name: "组件",
      path: "/hzxui",
    },
    {
      name: "问题反馈",
      path: "open",
      url: "https://github.com/hzx17",
    },
  ],
});
const {tools} =state
// 点击导航跳转
const pageView = (item,index)  =>{
  tabIndex.value = index
  sessionStorage.setItem("tabIndex" ,index)
  if(item.path == "open"){
    window.open(item.url)
  } else {
    if(item.path !=router.currentRoute.value.fullPath) {
      router.push(item.path)
    }
  }
}
/* 挂载时判断当路由 */
onBeforeMount(() => {
  try {
    setTimeout(() => {
      if(router.currentRoute.value.fullPath =='/'){  
          sessionStorage.setItem("tabIndex" ,0)
          tabIndex.value = 0
        }
        if(router.currentRoute.value.fullPath =='/hzxui'){
          sessionStorage.setItem("tabIndex" ,1)
          tabIndex.value = 1
        }
    }, 200);
  } catch (error) {
  }
})
</script>

<style scoped lang="less" >
.header-block-box{
  width: 100%;
  height: 64px;
  background-color: #fff;
  box-shadow: 0 2px 8px #ccc ;
  clear: both;
  .logo-Box{
    height: 64px;
    padding: 0 100px 0 40px;
    overflow: hidden;
    position: relative;
    img{
      width: 40px;
      height: 40px;
      margin: 12px 10px 0 0 ;
      float: left;
      cursor: pointer;
    }
    a{
      color: #4a5264;
      font-weight: 700;
      font-size: 18px;
      text-decoration: none;
      line-height: 64px;
      float: left;
    }
    span{
      padding:  3px 8px;
      border-radius: 18px;
      font-size: 12px;
      font-weight: 700;
      background-color: #0e80eb;
      position: absolute;
      top: 6px;
    }
  }
  .toolsBox{
    float: right;
    line-height: 64px;
    a{
      font-weight: normal;
      font-size: 16px;
      padding: 0px 3px;
      display: inline-block;
      line-height: 62px;
      margin-left: 25px ;
      transition: all 0.2s ease;
      &:hover{
        color: #0e80eb ;
        border-bottom:solid 2px #0e80eb ;
      }
    }
    a.active{
      color: #0e80eb;
      border-bottom:solid 2px #0e80eb ;
    }
  }
}
</style>
