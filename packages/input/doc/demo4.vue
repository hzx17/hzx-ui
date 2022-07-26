<!-- html -->
<template>
  <h-input v-model="val" type="password"></h-input>
  <!-- <p>{{val}}</p> -->
</template>

<!-- script -->
<script  setup>
import {ref} from 'vue'
const val = ref("")
</script>