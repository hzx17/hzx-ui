<template>
  <div class="home-banner">
    <h-carousel :list="list" :duration="1500" :autoPlay="true" :indicator="true" @selectItem="test" />
  </div>
</template>

<script>

export default {
  name: 'App',
  setup() {
    const list = [
      { id: 1, imgUrl: 'https://code-1307161657.cos.ap-beijing.myqcloud.com/images%2Fcloud.jpeg' },
      { id: 2, imgUrl: 'https://code-1307161657.cos.ap-beijing.myqcloud.com/images%2Fground.jpeg' },
      { id: 3, imgUrl: 'https://code-1307161657.cos.ap-beijing.myqcloud.com/images%2Fnight.jpeg' },
      { id: 4, imgUrl: 'https://code-1307161657.cos.ap-beijing.myqcloud.com/images%2Fstreet.jpeg' },
      { id: 5, imgUrl: 'https://code-1307161657.cos.ap-beijing.myqcloud.com/images%2Fsun.jpeg' }
    ]
    const test = (item)=> {
      console.log(item)
    }
    return { list , test}
  }
}
</script>

<style lang="less" scoped>
.home-banner {
  margin: 0 auto;
  width: 600px;
  height: 310px;
}
</style>
