<!-- html -->
<template>
  <h-space>
    <h-select :options="options" @change="change"></h-select>
    <h-select :options="options" @change="change" size="bigger"></h-select>
    <h-select :options="options" @change="change" size="small"></h-select>
    <h-select :options="options" @change="change" size="mini"></h-select> 
  </h-space>
</template>

<!-- script -->
<script>
import { reactive } from '@vue/reactivity'
export default {
  name:''
}
</script>
<script  setup>
const state = reactive({
  options:[
    {
      label:'中国',
      value:'China'
    },
        {
      label:'美国',
      value:'America'
    },
        {
      label:'日本',
      value:'Japan'
    },
        {
      label:'俄罗斯',
      value:'Russia'
    },
        {
      label:'韩国',
      value:'Korea'
    },
  ]
})
const change = (e)=>{
  console.log(e)
}
const {options} = state
</script>
