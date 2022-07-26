<!-- html -->
<template>
  <h-space>
    <h-button @click="openMsg">消息提示</h-button>
    <h-button @click="openVNodeMsg">自定义内部DOM</h-button>
  </h-space>
</template>

<!-- js -->
<script setup>
import { getCurrentInstance, h } from 'vue'
const {proxy} = getCurrentInstance()
const openMsg = () => {
  proxy.$message({
    text: '默认消息提示'
  })
}

const openVNodeMsg = () => {
   proxy.$message({
    text: h('a', {
          onClick: () => { console.log('Add'); }
        }, '自定义渲染DOM')
  })
}
</script>
