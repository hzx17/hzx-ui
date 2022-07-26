<!-- html -->
<template>
  <div class='h-space-container'>
    <myDiv/>
  </div>
</template>

<script>
export default {
  name:'hSpace'
}
</script>
<!-- script -->
<script setup>
import { useSlots ,  ref , h, computed} from 'vue'
const props =defineProps({
  columned:{
    type:Boolean,
    default:false
  },
  size:{
    type: Array,
    default:[10,10]
  }
})
const $slots = useSlots()
const slotList = ref([])
// 遍历$slots
$slots.default().forEach((item,index) => {
  slotList.value.push(
    h('div',{
      className:'h-space-item',
      style:'fit-content'
    },item)
  )
})
const hStyle = computed(()=>{
    return {
      display: props.columned ? 'flex' : 'inline-flex',
      'flex-wrap':'wrap',
        gap: props.columned ? `${props.size[1]}px`: `${props.size[0]}px  ${props.size[1]}px`,
      'flex-direction': props.columned ? 'column' : 'inherit'
    }
})
const myDiv =h('div',{
  className:'h-space',
  style:hStyle.value
},slotList.value)  
</script>


<style lang="less" scoped>
.h-space-container{
  padding: 10px;
}

</style>

