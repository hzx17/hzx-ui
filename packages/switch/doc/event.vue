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
    datas: [
       {
        event: "v-model",
        red: "switch选择值",
        sel: "(v-model)",
        def: "v-model='switchVal'",
      },
      {
        event: "change",
        red: "switch选择改变",
        sel: "(v-model)",
        def: "@change='change'",
      }
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>