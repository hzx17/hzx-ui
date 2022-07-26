<!-- html -->
<template>
  <h-input v-model="val" placeholder="搜索一下，你就知道" clearable></h-input>
  <p>{{val}}</p>
</template>

<!-- script -->
<script  setup>
import {ref} from 'vue'
const val = ref("")
</script>