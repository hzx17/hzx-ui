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
        event: "selectItem",
        red: "点击轮播图",
        sel: "item",
        def: "@selectItem='test'",
      }
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>