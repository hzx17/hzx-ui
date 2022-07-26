<template>
  <h-space>
    <h-textarea  cols="20" rows="5" v-model="value1"></h-textarea>
    <h-textarea v-model="value2" cols="25" rows="8"></h-textarea>
    <h-textarea v-model="value3" cols="35" rows="12"></h-textarea>
    <h-textarea v-model="value3" cols="40" rows="15"></h-textarea>
    <h-textarea v-model="value3" cols="40" rows="3"></h-textarea>
  </h-space>
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref("")
const value2 = ref("")
const value3 = ref("")
</script>
