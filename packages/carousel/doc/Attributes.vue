<template>
  <h-table :options="options" ></h-table>
  <br>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options: {
    fileds: [
      { field: "attr", title: "参数", align: "center" },
      { field: "type", title: "类型", align: "center" },
      { field: "red", title: "说明", align: "center"},
      { field: "sel", title: "可选值", align: "center" },
      { field: "def", title: "默认值", align: "center" },
    ],
    datas: [
      {
        attr: "list",
        type: "Object",
        red: "轮播图图片参数",
        sel: "-------",
        def: "-------",
      },
      {
        attr: "duration",
        type: "Number",
        red: "轮播时间",
        sel: "---------",
        def: "3000",
      },
      {
        attr: "autoPlay",
        type: "Boolean",
        red: "是否轮播",
        sel: "true || false",
        def: "false",
      },
      {
        attr: "indicator",
        type: "Boolean",
        red: "是否显示下标指示器器",
        sel: "true || false",
        def: "true",
      }
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>