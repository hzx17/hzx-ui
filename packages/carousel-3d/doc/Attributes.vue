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
        attr: "sliders",
        type: "Array",
        red: "轮播图图片参数",
        sel: "-------",
        def: "-------",
      },
      {
        attr: "switchBtn",
        type: "Boolean",
        red: "是否展示左右选择",
        sel: "true || false",
        def: "false",
      },
      {
        attr: "initital",
        type: "Number",
        red: "初始展示轮播位置",
        sel: "-------",
        def: "0",
      },
      {
        attr: "breadth",
        type: "Number",
        red: "两个层叠图之间的间距",
        sel: "--------",
        def: "80",
      },
      {
        attr: "autoLoop",
        type: "Boolean",
        red: "是否自动轮播",
        sel: "true || false",
        def: "true",
      },
      {
        attr: "width",
        type: "Number",
        red: "轮播图宽度，配合层叠轮播图使用",
        sel: "--------",
        def: "100",
      },
      {
        attr: "punctuation",
        type: "Boolean",
        red: "是否显示下标指示器器",
        sel: "true || false",
        def: "true",
      },
      {
        attr: "timeout",
        type: "Number",
        red: "轮播延时",
        sel: "-------",
        def: "3000",
      }
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>