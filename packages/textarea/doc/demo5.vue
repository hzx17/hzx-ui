<template>
  <h-textarea v-model="value1" placeholder="这是一个文本域请输入" disabled></h-textarea>
  <p>{{value1}}</p>
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref("")
</script>