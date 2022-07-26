<template>
  <h-table :options="options" ></h-table>
  <br>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options: {
    fileds: [
      { field: "event", title: "事件名", align: "center" },
      { field: "red", title: "说明", align: "center"},
      { field: "sel", title: "回调参数", align: "center" },
      { field: "def", title: "示例", align: "center" },
    ],
    // update:modelValue','clear','focus','blur','input','change
    datas: [
      {
        event: "v-model",
        red: "输入框绑定值",
        sel: "e.target.value",
        def: "v-model='val'",
      },
      {
        event: "change",
        red: "单选输入改变",
        sel: "{ label: item.label, value: item.value, index: index }",
        def: "@change='radioChange'",
      }
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>