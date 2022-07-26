<!-- html -->
<template>
  <h-input v-model="val" placeholder="搜索一下，你就知道" disabled></h-input>
</template>

<!-- script -->
<script  setup>
import {ref} from 'vue'
const val = ref("")
</script>