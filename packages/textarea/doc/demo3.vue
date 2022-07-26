<template>
  <h-textarea v-model="value1" maxlength=100 type="success" placeholder="这是一个文本域，字数限制为100以内"></h-textarea>
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref("")
</script>