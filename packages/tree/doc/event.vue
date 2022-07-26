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
        event: "selectClick",
        red: "点击选中",
        sel: "$event",
        def: "----------",
      },
      {
        event: "nodeClick",
        red: "数据项选中",
        sel: "自身和子数据项",
        def: "-------",
      }
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>