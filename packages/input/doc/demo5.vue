<!-- html -->
<template>
  <h-input v-model="val1" lefticon="h-iconsend"></h-input>
  <br>
  <br>
  <h-input v-model="val2" righticon="h-iconother"></h-input>
</template>

<!-- script -->
<script  setup>
import {ref} from 'vue'
const val1 = ref("")
const val2 = ref("")
</script>