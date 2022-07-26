<template>
  <div class="container" >
    <div class="imgLogo">
      <img src="../assets/logo.png" alt="hzxui">
    </div>
     <h1>这是一款支持pc端的UI组件库,使用Vue3+vite搭建,支持按需引入</h1>
     <h2>如果你感兴趣，欢迎加入，一起封装</h2>
     <div class="index-button">
      <h-button type="primary" round @click="tohzxui">立即上手</h-button>
      <h-button round @click="toGithub">github</h-button>
     </div>
  </div>
</template>

<script  setup>
import {useRouter} from 'vue-router' 
const router = useRouter()
function tohzxui(){
  router.push({
    path:'/hzxui'
  }) 
  sessionStorage.setItem("tabIndex", 1); 
}
const toGithub = ()=>{
  window.open('http://github.com/hzx17')
}
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  height: auto;
  overflow: hidden;
  min-height: calc(100vh - 64px);
  background:  rgba(9, 195, 190, 0.02);
  .imgLogo{
    margin: 0 auto;
    display: block;
    width: 12vw;
    margin-top: 100px;
    position: relative;
  }
  h1{
    margin: 0 auto;
    font-size: 2vw;
    color: #000000D9;
    padding-top: 30px;
    min-width: 200px;
    text-align: center;
    width: 70vw;
  }
  h2{
    margin: 0 auto;
    font-size: 1.2vw;
    color: #4a5264;
    padding-top: 30px;
    min-width: 200px;
    text-align: center;
    width: 50vw;
  }
}
 .imgLogo {
   
    img {
      width: 100%;
      display: block;
    }
  }

.index-button{
  padding: 10px;
  width: 50vw;
  margin: 0 auto;
}
.h-button{
  display: block;
  margin: 20px auto;
}
// .contentBox {
//   width: 100%;
//   height: auto;
//   overflow: hidden;
//   min-height: calc(100vh - 64px);
//   background: rgba(9, 195, 190, 0.02);
//   .imgLogo {
//     margin: 0 auto;
//     display: block;
//     width: 12vw;
//     margin-top: 60px;
//     position: relative;
//     img {
//       width: 100%;
//       display: block;
//     }
//   }
// }
</style>