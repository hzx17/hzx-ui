<template>
  <div class="container">
    <div class="left-menu">
      <div class="item-box" v-for="(item,index) in menuList"  
         :key="index" 
      >
        <p class="titls">
            <span>{{ item["title-cn"] }}</span>
        </p>
        <li v-for="(v,i) in item.list" 
          :key="i" 
          :class="{ active: menuIndex == index + '-' + i } "
          @click="switchmenu(v,i,index)"
          >{{v.title}}</li>
      </div>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script  setup>
import menuList from '../const/menuList.js'
import { computed, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
// 激活组件数值
const menuIndex = ref(sessionStorage.getItem("mIndex") || "0-0");
const router = useRouter()
function switchmenu(item,index,fatherIndex){
  menuIndex.value = fatherIndex + "-" + index;
  sessionStorage.setItem("mIndex", fatherIndex + "-" + index);
  router.push({
    path:item.path
  })
}
onMounted(()=>{
  try {
    setTimeout(() => {
      if(router.currentRoute.value.fullPath=='/hzxui'){
        menuIndex.value = "0-0";
        sessionStorage.setItem("mIndex", "0-0");
      }
    }, 100);
  } catch (error) { 
  }
})
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  height: ~"calc(100vh - 64px)";
  display: flex;
  * {
    scrollbar-color: #ccc #fff; /* 滑块颜色  滚动条背景颜色 */
    scrollbar-width: thin; /* 滚动条宽度有三种：thin、auto、none */
  }
  .left-menu{
    width: 315px;
    height: auto;
    overflow-y:scroll;
    // overflow-y: auto;
    .titls{
      padding: 0 0 0 34px;
      
      border-left: solid 4px #fff;
      list-style: none;
      color: #00000073;
      line-height: 34px;
      box-sizing: border-box;
    }
    li{
    padding: 0 0 0 34px;
    border-left: solid 4px #fff;
    list-style: none;
    line-height: 40px;
    box-sizing: border-box;
    &:hover{
       color:#0E80EB ;
       cursor: pointer;
    }
  }
  li.active{
      border-left: solid 4px #0E80EB;
      background-color: rgba(14,128,235,.1);
      color:#0E80E8 ;
    }
    &::-webkit-scrollbar {
      width: 2px;          /* 纵向滚动条 宽度 */
      background: #fff;   /* 整体背景 */
      border-radius: 10px;  /* 整体 圆角 */
    }
    &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
        height: 200px;     
        min-height: 200px;
        background: #ccc;
    }
  }
  .router-view{
    flex: 1;
    overflow-y:scroll;
    margin-right: 100px;
    padding: 20px 4vw 0 2vw;
    &::-webkit-scrollbar {
      width: 2px;          /* 纵向滚动条 宽度 */
      background: #fff;   /* 整体背景 */
      border-radius: 10px;  /* 整体 圆角 */
    }
    &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
        height: 200px;     
        min-height: 200px;
        background: #ccc;
    }
  }
}
</style>