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
        attr: "options",
        type: "Json",
        red: "数据配置项，需要符合JSON格式",
        sel: "--------",
        def: "-------",
      },
      {
        attr: "defaultOpenNodes",
        type: "Array",
        red: "默认展开数据，0-0代表第一数据项，和子数据项的第一项展开",
        sel: "['0-0',.......]",
        def: "-------",
      },
      {
        attr: "multiple",
        type: "Boolean",
        red: "是否具有选中框",
        sel: "---------",
        def: "false",
      }
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>