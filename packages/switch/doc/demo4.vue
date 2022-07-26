<!-- html -->
<template>
 <h-switch v-model="switchVal1" @change="switchChange" showTipsText></h-switch>
 <br>
 <h-switch v-model="switchVal2" @change="switchChange" :width="120" closeColor="#b8b8b8"  activeColor="#09b63d" showTipsText></h-switch>
 <br>
 <h-switch v-model="switchVal3" @change="switchChange" :width="150" closeColor="#ec3437"  activeColor="#09b63d" showTipsText></h-switch>
 <br>
 <h-switch v-model="switchVal4" @change="switchChange" :width="300" closeColor="#ec3437"  activeColor="#f57b29" showTipsText></h-switch>
</template>

<script setup>
import {ref} from 'vue'
const switchVal1 = ref(true)
const switchVal2 = ref(true)
const switchVal3 = ref(false)
const switchVal4 = ref(true)
const switchChange = (e)=>{
  console.log(e)
}
</script>