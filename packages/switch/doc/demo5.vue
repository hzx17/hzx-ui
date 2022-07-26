<!-- html -->
<template>
  <h-switch v-model="switchVal1" @change="switchChange" closeText="关闭"  activeText="开启" showTipsText></h-switch>
  <br>
  <h-switch v-model="switchVal2" @change="switchChange" closeText="关闭此业务"  activeText="开启此业务" textArea="right" showTipsText></h-switch>
  <br>
  <h-switch v-model="switchVal3" @change="switchChange" closeText="Close this service"  activeText="Enabling the service" textArea="right" showTipsText></h-switch>
</template>

<script setup>
import {ref} from 'vue'
const switchVal1 = ref(true)
const switchVal2 = ref(false)
const switchVal3 = ref(true)
const switchChange = (e)=>{
  console.log(e)
}
</script>