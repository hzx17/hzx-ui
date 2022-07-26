<template>
  <h-space>
    <h-textarea  v-model="value1" placeholder="激活为默认样式"></h-textarea>
    <h-textarea v-model="value2" type="success" placeholder="激活边框为绿色" ></h-textarea>
    <h-textarea v-model="value3" type="danger" placeholder="激活边框颜色为红色" ></h-textarea>
    <h-textarea v-model="value3" type="warn" placeholder="激活边框颜色为黄色" ></h-textarea>
  </h-space>
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref("")
const value2 = ref("")
const value3 = ref("")
</script>