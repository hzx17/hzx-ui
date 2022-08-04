<!-- html -->
<template>
    <h-carousel-3d :width="40" @selectItem="test" :sliders="sliders" :breadth="80"></h-carousel-3d>
</template>

<!-- script -->
<script>
export default {
  name:''
}
</script>
<script  setup>
const sliders = [
  {id:1, imgUrl:'https://code-1307161657.cos.ap-beijing.myqcloud.com/images%2Fcloud.jpeg'},
  { id: 2, imgUrl: 'https://code-1307161657.cos.ap-beijing.myqcloud.com/images%2Fground.jpeg' },
  { id: 3, imgUrl: 'https://code-1307161657.cos.ap-beijing.myqcloud.com/images%2Fnight.jpeg' },
  { id: 4, imgUrl: 'https://code-1307161657.cos.ap-beijing.myqcloud.com/images%2Fstreet.jpeg' },
  { id: 5, imgUrl: 'https://code-1307161657.cos.ap-beijing.myqcloud.com/images%2Fsun.jpeg' },
]

const test = (e,item) =>{
  console.log(e,item)
}
</script>

<style lang="less" scoped>
.h-carousel-3d{
  margin: 0 auto;
  width: 600px;
  height: 250px;
}

</style>