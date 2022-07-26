<!-- html -->
<template>
  <h-Switch v-model="switchVal" @change="switchChange"></h-Switch>
</template>

<script setup>
import {ref} from 'vue'
const switchVal = ref(false)
const switchChange = (e)=>{
  console.log(e)
}
</script>