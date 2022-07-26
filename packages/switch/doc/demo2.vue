<!-- html -->
<template>
  <h-switch v-model="switchVal1" @change="switchChange" showTipsText></h-switch>
</template>

<script setup>
import {ref} from 'vue'
const switchVal1 = ref(false)
const switchChange = (e)=>{
  console.log(e)
}
</script>